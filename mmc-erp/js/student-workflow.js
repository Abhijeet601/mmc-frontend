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
  var application = mmcLatestByCreatedAt(data.applications);
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
  var status = application ? mmcNormalizeWorkflowStatus(application.status) : 'Not Started';
  var statusKey = status.toLowerCase();
  var shortlisted = ['shortlisted', 'approved', 'selected'].indexOf(statusKey) !== -1;
  var hostel = application && application.hostel_id ? hostels.find(function(item){ return Number(item.id) === Number(application.hostel_id); }) : null;
  var room = application && application.room_id ? rooms.find(function(item){ return Number(item.id) === Number(application.room_id); }) : null;

  return {
    student: student,
    application: application,
    payments: payments,
    receipts: receipts,
    registrationReceipt: registrationReceipt,
    hostelReceipt: hostelReceipt,
    registrationPaid: MMC_PAYMENT_GATEWAY_ENABLED && Boolean(registrationReceipt || registrationPayment),
    hostelPaid: MMC_PAYMENT_GATEWAY_ENABLED && Boolean(hostelReceipt || hostelPayment),
    shortlisted: shortlisted,
    roomAllotted: Boolean(application && application.hostel_id && application.room_id),
    status: status,
    hostel: hostel,
    room: room
  };
}

function mmcLoadStudentWorkflow(){
  var student = mmcCurrentStudent();
  if(!student || !student.id) return Promise.resolve(null);
  return Promise.all([
    mmcApi('/applications?student_id=' + student.id),
    mmcApi('/payments?student_id=' + student.id),
    mmcApi('/receipts?student_id=' + student.id),
    mmcApi('/hostels'),
    mmcApi('/rooms')
  ]).then(function(results){
    return mmcBuildStudentWorkflow({
      student: student,
      applications: results[0] || [],
      payments: results[1] || [],
      receipts: results[2] || [],
      hostels: results[3] || [],
      rooms: results[4] || []
    });
  });
}

function mmcApplyStudentNavigation(workflow){
  if(!workflow) return;
  function setVisible(file, visible){
    document.querySelectorAll('.mmc-sidebar-link[href="' + file + '"]').forEach(function(link){
      link.style.display = visible ? '' : 'none';
    });
  }
  setVisible('application-form.html', !workflow.application);
  setVisible('fee-payment.html', Boolean(workflow.application && !workflow.registrationPaid));
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
  if(pageName === 'application-form' && workflow.application && workflow.registrationPaid){
    mmcWorkflowRedirect('You have already completed this step.');
    return true;
  }
  if(pageName === 'registration-fee' && !workflow.application){
    mmcWorkflowRedirect('Submit your hostel application before paying the registration fee.');
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
