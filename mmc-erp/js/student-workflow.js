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

function mmcWorkflowPaymentStatus(registrationPaid, hostelPaid, shortlisted){
  if(registrationPaid && hostelPaid) return 'paid';
  if(registrationPaid && shortlisted) return 'partially_paid';
  if(registrationPaid) return 'paid';
  return 'pending';
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
  var failedPayment = payments.find(function(payment){
    return String(payment.status || '').toLowerCase() === 'failed';
  }) || null;
  var status = application ? mmcNormalizeWorkflowStatus(application.status) : 'Not Started';
  var statusKey = status.toLowerCase();
  var draft = statusKey === 'draft';
  var shortlisted = ['shortlisted', 'published', 'room allocated', 'room_allocated', 'approved', 'selected'].indexOf(statusKey) !== -1;
  var hostel = application && application.hostel_id ? hostels.find(function(item){ return Number(item.id) === Number(application.hostel_id); }) : null;
  var room = application && application.room_id ? rooms.find(function(item){ return Number(item.id) === Number(application.room_id); }) : null;
  var bed = application && application.bed ? application.bed : null;

  return {
    student: student,
    application: application,
    payments: payments,
    receipts: receipts,
    registrationReceipt: registrationReceipt,
    hostelReceipt: hostelReceipt,
    registrationPaid: Boolean(registrationReceipt || registrationPayment),
    hostelPaid: Boolean(hostelReceipt || hostelPayment),
    paymentStatus: failedPayment ? 'failed' : mmcWorkflowPaymentStatus(Boolean(registrationReceipt || registrationPayment), Boolean(hostelReceipt || hostelPayment), shortlisted),
    shortlisted: shortlisted,
    roomAllotted: Boolean(application && application.hostel_id && application.room_id && application.bed),
    status: status,
    draft: draft,
    hostel: hostel,
    room: room,
    bed: bed,
    settings: data.settings || null
  };
}

function mmcLoadStudentWorkflow(){
  var student = mmcCurrentStudent();
  if(!student || !student.id) return Promise.resolve(null);
  var authHeaders = student.access_token || student.token ? { 'Authorization': 'Bearer ' + (student.access_token || student.token) } : {};
  function optionalApi(path, fallback){
    return mmcApi(path).catch(function(){ return fallback; });
  }
  return Promise.all([
    mmcApi('/applications?student_id=' + student.id, { headers: authHeaders }),
    mmcApi('/payments?student_id=' + student.id, { headers: authHeaders }),
    mmcApi('/receipts?student_id=' + student.id, { headers: authHeaders }),
    mmcApi('/hostels'),
    mmcApi('/rooms'),
    optionalApi('/settings/application', null)
  ]).then(function(results){
    return mmcBuildStudentWorkflow({
      student: student,
      applications: results[0] || [],
      payments: results[1] || [],
      receipts: results[2] || [],
      hostels: results[3] || [],
      rooms: results[4] || [],
      settings: results[5] || null
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
  var canEditApplication = !workflow.application || workflow.draft;
  if(canEditApplication){
    setVisible('application-form.html', true);
  } else {
    document.querySelectorAll('.mmc-sidebar-link[href="application-form.html"]').forEach(function(link){
      link.href = 'application-preview.html';
      var icon = link.querySelector('i');
      var label = link.querySelector('span');
      if(icon) icon.className = 'fa-solid fa-eye';
      if(label) label.textContent = 'Application Preview';
    });
  }
  setVisible('fee-payment.html', Boolean(workflow.application && !workflow.draft && !workflow.registrationPaid));
  setVisible('hostel-fee-payment.html', Boolean(workflow.registrationPaid && workflow.shortlisted && !workflow.hostelPaid));
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
