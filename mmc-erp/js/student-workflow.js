var MMC_PAYMENT_GATEWAY_ENABLED = false;
var MMC_PAYMENT_DISABLED_MESSAGE = 'Payment gateway integration is currently disabled. This feature will be enabled in a future update.';

function mmcIsPaidStatus(status){
  return ['paid', 'success', 'completed'].indexOf(String(status || '').toLowerCase()) !== -1;
}

function mmcNormalizeWorkflowStatus(status){
  status = status || 'Pending';
  return status.charAt(0).toUpperCase() + status.slice(1);
}

function mmcReceiptDownloadUrl(receipt){
  return mmcReceiptUrl(receipt);
}

function mmcLatestByCreatedAt(items){
  return (items || []).slice().sort(function(a, b){
    return new Date(b.created_at || b.generated_at || 0) - new Date(a.created_at || a.generated_at || 0);
  })[0] || null;
}

function mmcBuildStudentWorkflow(data){
  var student = data.student;
  var dashboard = data.dashboard || {};
  var applicationForm = data.applicationForm || {};
  var application = data.application || mmcLatestByCreatedAt(data.applications);
  var payments = data.payments || [];
  var receipts = data.receipts || [];
  var hostels = data.hostels || [];
  var rooms = data.rooms || [];
  var registrationReceipt = receipts.find(function(receipt){ return receipt.receipt_type === 'application_registration'; }) || null;
  var hostelReceipt = receipts.find(function(receipt){ return receipt.receipt_type === 'hostel_admission'; }) || null;
  var registrationPayment = payments.find(function(payment){
    return /registration/i.test(payment.payment_type || '') && mmcIsPaidStatus(payment.status);
  }) || null;
  var hostelPayment = payments.find(function(payment){
    return /hostel/i.test(payment.payment_type || '') && mmcIsPaidStatus(payment.status);
  }) || null;
  var status = application ? mmcNormalizeWorkflowStatus(application.status || application.form_status) : mmcNormalizeWorkflowStatus(dashboard.application_status || 'Not Started');
  var statusKey = status.toLowerCase();
  var draft = statusKey === 'draft' || dashboard.form_status === 'draft';
  var shortlisted = Boolean(dashboard.shortlisted) || ['shortlisted', 'approved', 'selected'].indexOf(statusKey) !== -1;
  var hostel = application && application.hostel_id ? hostels.find(function(item){ return Number(item.id) === Number(application.hostel_id); }) : null;
  var room = application && application.room_id ? rooms.find(function(item){ return Number(item.id) === Number(application.room_id); }) : null;

  return {
    student: student,
    application: application,
    payments: payments,
    receipts: receipts,
    registrationReceipt: registrationReceipt,
    hostelReceipt: hostelReceipt,
    registrationPaid: MMC_PAYMENT_GATEWAY_ENABLED && (dashboard.application_payment_status === 'paid' || Boolean(registrationReceipt || registrationPayment)),
    hostelPaid: MMC_PAYMENT_GATEWAY_ENABLED && (dashboard.hostel_receipt || Boolean(hostelReceipt || hostelPayment)),
    shortlisted: shortlisted,
    roomAllotted: Boolean(dashboard.room_number || (application && application.hostel_id && application.room_id)),
    status: status,
    draft: draft,
    hostel: hostel,
    room: room,
    settings: data.settings || null
  };
}

function mmcLoadStudentWorkflow(){
  var student = mmcCurrentStudent();
  if(!student || (!student.access_token && !student.id)) return Promise.resolve(null);
  function optionalApi(path, fallback){
    return mmcApi(path).catch(function(){ return fallback; });
  }
  return Promise.all([
    optionalApi('/dashboard', null),
    optionalApi('/application', null),
    optionalApi('/settings/application', null)
  ]).then(function(results){
    var dashboard = results[0] || {};
    var applicationForm = results[1] || {};
    var applicationSummary = applicationForm.data || dashboard.summary || {};
    var application = applicationForm.application_number ? Object.assign({}, applicationSummary, {
      application_no: applicationForm.application_number,
      form_status: applicationForm.form_status,
      status: applicationForm.form_status,
      current_step: applicationForm.form_status === 'draft' ? 1 : 8
    }) : null;
    return mmcBuildStudentWorkflow({
      student: Object.assign({}, student, {
        name: dashboard.student_name || student.name,
        email: dashboard.email || student.email,
        mobile: dashboard.mobile_number || student.mobile,
        date_of_birth: applicationForm.registration_date_of_birth || student.date_of_birth
      }),
      dashboard: dashboard,
      applicationForm: applicationForm,
      application: application,
      payments: dashboard.payment_history || [],
      receipts: [dashboard.application_receipt, dashboard.hostel_receipt].filter(Boolean),
      hostels: [{ id: 1, name: 'Vaidehi Hostel' }, { id: 2, name: 'Mahima Hostel' }],
      rooms: [],
      settings: results[2] || null
    });
  });
}

function mmcAdmissionIsOpen(settings){
  return !settings || settings.admission_state === 'open';
}

function mmcPaymentIsOpen(settings){
  return !settings || settings.payment_state === 'open';
}

function mmcApplyStudentNavigation(workflow){
  if(!workflow) return;
  function setVisible(file, visible){
    document.querySelectorAll('.mmc-sidebar-link[href="' + file + '"]').forEach(function(link){
      link.style.display = visible ? '' : 'none';
    });
  }
  setVisible('application-form.html', !workflow.application || workflow.draft);
  setVisible('fee-payment.html', Boolean(workflow.application && !workflow.draft && !workflow.registrationPaid));
  setVisible('hostel-fee-payment.html', Boolean(MMC_PAYMENT_GATEWAY_ENABLED && workflow.registrationPaid && workflow.shortlisted && !workflow.hostelPaid));
  setVisible('room-allotment.html', Boolean(workflow.hostelPaid || workflow.roomAllotted));
}

function mmcWorkflowRedirect(message){
  sessionStorage.setItem('mmc_workflow_message', message || 'You have already completed this step.');
  window.location.href = 'dashboard.html';
}

function mmcShowWorkflowMessage(){
  var message = sessionStorage.getItem('mmc_workflow_message');
  if(message){
    sessionStorage.removeItem('mmc_workflow_message');
    setTimeout(function(){ mmcToast('Step unavailable', message, 'info'); }, 500);
  }
}

function mmcGuardStudentWorkflow(pageName, workflow){
  if(!workflow) return false;
  if(pageName === 'application-form' && workflow.application && !workflow.draft){
    mmcWorkflowRedirect('You have already completed this step.');
    return true;
  }
  if(pageName === 'registration-fee' && (!workflow.application || workflow.draft)){
    mmcWorkflowRedirect('Submit your hostel application before paying the registration fee.');
    return true;
  }
  if(pageName === 'registration-fee' && !mmcPaymentIsOpen(workflow.settings)){
    mmcWorkflowRedirect(workflow.settings && workflow.settings.payment_message ? workflow.settings.payment_message : 'Payment is currently unavailable.');
    return true;
  }
  if(pageName === 'registration-fee' && workflow.registrationPaid){
    mmcWorkflowRedirect('You have already completed this step.');
    return true;
  }
  if(pageName === 'hostel-fee' && !MMC_PAYMENT_GATEWAY_ENABLED){
    mmcWorkflowRedirect('Hostel Fee Payment is currently disabled. This feature will be activated after the online payment gateway is integrated and the student is shortlisted.');
    return true;
  }
  if(pageName === 'hostel-fee' && !mmcPaymentIsOpen(workflow.settings)){
    mmcWorkflowRedirect(workflow.settings && workflow.settings.payment_message ? workflow.settings.payment_message : 'Payment is currently unavailable.');
    return true;
  }
  if(pageName === 'hostel-fee' && (!workflow.registrationPaid || !workflow.shortlisted)){
    mmcWorkflowRedirect('Hostel fee opens after registration fee payment and shortlisting.');
    return true;
  }
  if(pageName === 'hostel-fee' && workflow.hostelPaid){
    mmcWorkflowRedirect('You have already completed this step.');
    return true;
  }
  return false;
}
