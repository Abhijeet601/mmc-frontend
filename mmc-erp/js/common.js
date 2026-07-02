/* ===================================================================
   MAGADH MAHILA COLLEGE ERP — common.js
   Shared behaviour used across every page: sidebar, topbar widgets,
   toasts, counters, scroll-reveal, multi-step wizard engine,
   dropzones, confirm modal, small formatting helpers.
   =================================================================== */

/* ---------------------------------------------------------------
   Formatting helpers
--------------------------------------------------------------- */
function mmcCurrency(num){
  return '₹' + Number(num).toLocaleString('en-IN');
}
function mmcInitials(name){
  return (name || '').split(' ').filter(Boolean).slice(0,2).map(w => w[0].toUpperCase()).join('');
}

/* ---------------------------------------------------------------
   Page loader
--------------------------------------------------------------- */
window.addEventListener('load', function(){
  var loader = document.getElementById('mmcPageLoader');
  if(loader){ setTimeout(function(){ loader.classList.add('is-hidden'); }, 350); }
});

/* ---------------------------------------------------------------
   Sidebar: desktop collapse + mobile offcanvas
--------------------------------------------------------------- */
function mmcInitSidebar(){
  var sidebar = document.querySelector('.mmc-sidebar');
  var main = document.querySelector('.mmc-main');
  var backdrop = document.querySelector('.mmc-sidebar-backdrop');
  if(!sidebar) return;

  // restore collapsed preference (desktop only)
  if(localStorage.getItem('mmc_sidebar_collapsed') === '1' && window.innerWidth > 991){
    sidebar.classList.add('collapsed');
    if(main) main.classList.add('collapsed');
  }

  document.querySelectorAll('.js-sidebar-toggle').forEach(function(btn){
    btn.addEventListener('click', function(){
      if(window.innerWidth <= 991){
        sidebar.classList.toggle('mobile-open');
        if(backdrop) backdrop.classList.toggle('show');
      } else {
        sidebar.classList.toggle('collapsed');
        if(main) main.classList.toggle('collapsed');
        localStorage.setItem('mmc_sidebar_collapsed', sidebar.classList.contains('collapsed') ? '1' : '0');
      }
    });
  });

  if(backdrop){
    backdrop.addEventListener('click', function(){
      sidebar.classList.remove('mobile-open');
      backdrop.classList.remove('show');
    });
  }

  // highlight active link based on filename
  var current = location.pathname.split('/').pop();
  document.querySelectorAll('.mmc-sidebar-link').forEach(function(link){
    var href = (link.getAttribute('href') || '').split('/').pop();
    if(href && href === current){ link.classList.add('active'); }
  });
}

/* ---------------------------------------------------------------
   Notification bell
--------------------------------------------------------------- */
function mmcRenderNotifications(){
  var list = document.getElementById('mmcNotifList');
  if(!list) return;
  list.innerHTML = '<div class="px-3 py-4 text-center fs-13 text-secondary">No notifications yet.</div>';
  var badge = document.getElementById('mmcNotifBadge');
  if(badge){ badge.style.display = 'none'; }
}

/* ---------------------------------------------------------------
   Toast notifications.
--------------------------------------------------------------- */
function mmcToast(title, message, variant){
  variant = variant || 'success';
  var container = document.getElementById('mmcToastContainer');
  if(!container){
    container = document.createElement('div');
    container.id = 'mmcToastContainer';
    container.className = 'toast-container position-fixed bottom-0 end-0 p-3';
    container.style.zIndex = 2050;
    document.body.appendChild(container);
  }
  var iconMap = { success:'fa-circle-check', danger:'fa-circle-xmark', warning:'fa-triangle-exclamation', info:'fa-circle-info' };
  var colorMap = { success:'#22C55E', danger:'#EF4444', warning:'#F59E0B', info:'#0EA5E9' };
  var el = document.createElement('div');
  el.className = 'toast align-items-center mmc-pop-in';
  el.setAttribute('role', 'alert');
  el.innerHTML =
    '<div class="toast-header">' +
      '<i class="fa-solid ' + (iconMap[variant] || iconMap.success) + ' me-2" style="color:' + (colorMap[variant] || colorMap.success) + '"></i>' +
      '<strong class="me-auto" style="font-size:13.5px;color:var(--mmc-navy);">' + title + '</strong>' +
      '<button type="button" class="btn-close" data-bs-dismiss="toast"></button>' +
    '</div>' +
    '<div class="toast-body" style="font-size:13px;">' + message + '</div>';
  container.appendChild(el);
  var toast = new bootstrap.Toast(el, { delay: 4000 });
  toast.show();
  el.addEventListener('hidden.bs.toast', function(){ el.remove(); });
}

/* ---------------------------------------------------------------
   Animated counters — usage: <span class="mmc-counter" data-target="248">0</span>
--------------------------------------------------------------- */
function mmcAnimateCounters(scope){
  var els = (scope || document).querySelectorAll('.mmc-counter');
  var obs = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(!entry.isIntersecting) return;
      var el = entry.target;
      if(el.dataset.done) return;
      el.dataset.done = '1';
      var target = parseFloat(el.dataset.target || '0');
      var prefix = el.dataset.prefix || '';
      var suffix = el.dataset.suffix || '';
      var decimals = el.dataset.decimals ? parseInt(el.dataset.decimals) : 0;
      var duration = 1200, start = null;
      function step(ts){
        if(!start) start = ts;
        var progress = Math.min((ts - start) / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3);
        var val = target * eased;
        el.textContent = prefix + (decimals ? val.toFixed(decimals) : Math.round(val)).toLocaleString('en-IN') + suffix;
        if(progress < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
      obs.unobserve(el);
    });
  }, { threshold: 0.4 });
  els.forEach(function(el){ obs.observe(el); });
}

/* ---------------------------------------------------------------
   Scroll reveal — usage: class="mmc-reveal" on any element
--------------------------------------------------------------- */
function mmcInitReveal(){
  var els = document.querySelectorAll('.mmc-reveal');
  if(!els.length) return;
  var obs = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){ entry.target.classList.add('is-visible'); obs.unobserve(entry.target); }
    });
  }, { threshold: 0.15 });
  els.forEach(function(el, i){ el.style.transitionDelay = (i % 6) * 0.06 + 's'; obs.observe(el); });
}

/* ---------------------------------------------------------------
   Password visibility toggle — usage: <button data-toggle-password="#pwdInput">
--------------------------------------------------------------- */
function mmcInitPasswordToggles(){
  document.querySelectorAll('[data-toggle-password]').forEach(function(btn){
    btn.addEventListener('click', function(){
      var input = document.querySelector(btn.getAttribute('data-toggle-password'));
      if(!input) return;
      var icon = btn.querySelector('i');
      if(input.type === 'password'){ input.type = 'text'; if(icon){ icon.classList.remove('fa-eye'); icon.classList.add('fa-eye-slash'); } }
      else { input.type = 'password'; if(icon){ icon.classList.remove('fa-eye-slash'); icon.classList.add('fa-eye'); } }
    });
  });
}

/* ---------------------------------------------------------------
   Admin role permissions. Plain admins can handle application review and
   routine student/hostel management, while super_admin retains destructive
   controls. The backend must enforce the same policy.
--------------------------------------------------------------- */
function mmcApplyAdminPermissions(scope){
  var raw = sessionStorage.getItem('mmc_admin_user');
  if(!raw || !location.pathname.toLowerCase().includes('/admin/')) return;
  var user;
  try { user = JSON.parse(raw); } catch(error) { return; }
  var role = String(user.role || 'admin').toLowerCase().replace(/[ -]/g, '_');
  if(role === 'super_admin' || role === 'superadmin') return;
  var root = scope || document;
  var blocked = /^(delete|reject|allocate|transfer|upload|import|publish|generate|mark|cancel allocation|remove)\b/i;
  root.querySelectorAll('button, a.btn, [role="button"], [data-super-admin-only]').forEach(function(control){
    var text = (control.textContent || '').trim();
    var target = control.getAttribute('data-bs-target') || '';
    if(control.hasAttribute('data-super-admin-only') || blocked.test(text) || /(?:upload|import|generate|allocate|transfer)modal/i.test(target)){
      control.classList.add('d-none');
      control.setAttribute('aria-hidden', 'true');
    }
  });
  document.documentElement.dataset.adminRole = 'admin';
}

/* ---------------------------------------------------------------
   Dropzone — usage: mmcInitDropzone('#docDropzone', '#docInput', '#docChipList')
--------------------------------------------------------------- */
function mmcInitDropzone(zoneSel, inputSel, chipListSel){
  var zone = document.querySelector(zoneSel);
  var input = document.querySelector(inputSel);
  var chipList = chipListSel ? document.querySelector(chipListSel) : null;
  if(!zone || !input) return;

  function addChip(file){
    if(!chipList) return;
    var chip = document.createElement('div');
    chip.className = 'mmc-upload-chip';
    chip.innerHTML = '<i class="fa-solid fa-file-circle-check"></i><span>' + file.name + '</span><span class="text-body-tertiary ms-1">(' + (file.size/1024).toFixed(0) + ' KB)</span>';
    chipList.appendChild(chip);
  }

  zone.addEventListener('click', function(){ input.click(); });
  input.addEventListener('change', function(){
    if(chipList) chipList.innerHTML = '';
    Array.from(input.files).forEach(addChip);
    if(input.files.length){ mmcToast('File selected', input.files.length + ' file(s) ready to upload.', 'success'); }
  });
  ['dragenter','dragover'].forEach(function(evt){
    zone.addEventListener(evt, function(e){ e.preventDefault(); zone.classList.add('dragover'); });
  });
  ['dragleave','drop'].forEach(function(evt){
    zone.addEventListener(evt, function(e){ e.preventDefault(); zone.classList.remove('dragover'); });
  });
  zone.addEventListener('drop', function(e){
    if(e.dataTransfer.files.length){
      input.files = e.dataTransfer.files;
      if(chipList) chipList.innerHTML = '';
      Array.from(e.dataTransfer.files).forEach(addChip);
      mmcToast('File uploaded', e.dataTransfer.files.length + ' file(s) added.', 'success');
    }
  });
}

/* ---------------------------------------------------------------
   Generic confirm modal — usage: mmcConfirm('Delete application?', 'This cannot be undone.', function(){ ...do delete... })
--------------------------------------------------------------- */
function mmcConfirm(title, message, onYes, variant){
  variant = variant || 'danger';
  var modalEl = document.getElementById('mmcGlobalConfirm');
  if(!modalEl){
    modalEl = document.createElement('div');
    modalEl.id = 'mmcGlobalConfirm';
    modalEl.className = 'modal fade';
    modalEl.innerHTML =
      '<div class="modal-dialog modal-dialog-centered"><div class="modal-content">' +
        '<div class="modal-body text-center pt-4 pb-2">' +
          '<div class="mx-auto mb-3 d-flex align-items-center justify-content-center rounded-circle mmc-icon-danger" style="width:56px;height:56px;font-size:22px;" id="mmcConfirmIcon"><i class="fa-solid fa-triangle-exclamation"></i></div>' +
          '<h6 class="fw-700 mb-1" id="mmcConfirmTitle" style="color:var(--mmc-navy);"></h6>' +
          '<p class="text-secondary fs-13 mb-0" id="mmcConfirmMsg"></p>' +
        '</div>' +
        '<div class="modal-footer border-0 justify-content-center pb-4">' +
          '<button class="btn btn-ghost" data-bs-dismiss="modal">Cancel</button>' +
          '<button class="btn btn-maroon" id="mmcConfirmYes">Yes, Continue</button>' +
        '</div>' +
      '</div></div>';
    document.body.appendChild(modalEl);
  }
  modalEl.querySelector('#mmcConfirmTitle').textContent = title;
  modalEl.querySelector('#mmcConfirmMsg').textContent = message;
  var iconWrap = modalEl.querySelector('#mmcConfirmIcon');
  iconWrap.className = 'mx-auto mb-3 d-flex align-items-center justify-content-center rounded-circle mmc-icon-' + variant;
  iconWrap.style.width = '56px'; iconWrap.style.height = '56px'; iconWrap.style.fontSize = '22px';
  var yesBtn = modalEl.querySelector('#mmcConfirmYes');
  yesBtn.className = 'btn btn-' + (variant === 'danger' ? 'maroon' : 'navy');
  var modal = new bootstrap.Modal(modalEl);
  var handler = function(){
    modal.hide();
    if(typeof onYes === 'function') onYes();
    yesBtn.removeEventListener('click', handler);
  };
  yesBtn.addEventListener('click', handler);
  modal.show();
}

/* ---------------------------------------------------------------
   Multi-step Wizard engine
   Markup contract:
     root [data-wizard]
       .mmc-stepper .mmc-step[data-step="1"]...
       .mmc-wizard-panel[data-step="1"]...
       [data-wizard-next] [data-wizard-prev] buttons inside each panel
       optional .mmc-progressbar-thin > div as progress fill
--------------------------------------------------------------- */
function mmcInitWizard(rootSel, opts){
  opts = opts || {};
  var root = document.querySelector(rootSel);
  if(!root) return null;
  var panels = Array.from(root.querySelectorAll('.mmc-wizard-panel'));
  var steps = Array.from(root.querySelectorAll('.mmc-stepper .mmc-step'));
  var fill = root.querySelector('.mmc-progressbar-thin > div');
  var current = 1;

  function render(){
    panels.forEach(function(p){
      p.style.display = (parseInt(p.dataset.step) === current) ? '' : 'none';
    });
    steps.forEach(function(s){
      var n = parseInt(s.dataset.step);
      s.classList.remove('active','done');
      if(n < current) s.classList.add('done');
      else if(n === current) s.classList.add('active');
    });
    if(fill){ fill.style.width = (current / panels.length * 100) + '%'; }
    var panel = panels.find ? panels.find(function(p){ return parseInt(p.dataset.step) === current; }) : null;
    if(panel){ panel.scrollIntoView({ behavior:'smooth', block:'start' }); }
    if(typeof opts.onChange === 'function') opts.onChange(current);
  }

  root.addEventListener('click', function(e){
    var nextBtn = e.target.closest('[data-wizard-next]');
    var prevBtn = e.target.closest('[data-wizard-prev]');
    if(nextBtn){
      var activePanel = panels.find(function(p){ return parseInt(p.dataset.step) === current; });
      var requiredFields = activePanel ? activePanel.querySelectorAll('[required]') : [];
      var valid = true;
      requiredFields.forEach(function(f){ if(!f.checkValidity()){ f.reportValidity(); valid = false; } });
      if(!valid) return;
      if(current < panels.length){ current++; render(); }
      else if(typeof opts.onFinish === 'function'){ opts.onFinish(); }
    }
    if(prevBtn && current > 1){ current--; render(); }
  });

  render();
  return { goTo: function(n){ current = n; render(); }, current: function(){ return current; } };
}

/* ---------------------------------------------------------------
   Chart.js brand defaults
--------------------------------------------------------------- */
function mmcChartDefaults(){
  if(typeof Chart === 'undefined') return;
  Chart.defaults.font.family = "'Poppins', sans-serif";
  Chart.defaults.color = '#5B6478';
  Chart.defaults.plugins.legend.labels.usePointStyle = true;
  Chart.defaults.plugins.legend.labels.boxWidth = 8;
}

/* ---------------------------------------------------------------
   DataTable brand defaults — usage: mmcDataTable('#myTable', { pageLength: 8 })
--------------------------------------------------------------- */
function mmcDataTable(sel, opts){
  if(typeof $ === 'undefined' || !$.fn.DataTable) return null;
  return $(sel).DataTable(Object.assign({
    pageLength: 8,
    lengthMenu: [5, 8, 10, 25, 50],
    language: { search: '', searchPlaceholder: 'Search records...' },
    dom: "<'row mb-2'<'col-sm-6'l><'col-sm-6 text-end'f>><'table-responsive't><'row mt-2'<'col-sm-6'i><'col-sm-6'p>>"
  }, opts || {}));
}

/* ---------------------------------------------------------------
   Boot
--------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', function(){
  mmcInitSidebar();
  mmcRenderNotifications();
  mmcAnimateCounters();
  mmcInitReveal();
  mmcInitPasswordToggles();
  mmcApplyAdminPermissions(document);

  if(location.pathname.toLowerCase().includes('/admin/')){
    new MutationObserver(function(records){
      records.forEach(function(record){ record.addedNodes.forEach(function(node){ if(node.nodeType === 1) mmcApplyAdminPermissions(node); }); });
    }).observe(document.body, { childList:true, subtree:true });
  }

  // enable all bootstrap tooltips/dropdowns automatically
  document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(function(el){ new bootstrap.Tooltip(el); });
});
