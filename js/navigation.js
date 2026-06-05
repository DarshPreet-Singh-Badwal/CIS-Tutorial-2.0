/**
 * BRIGHTSPACE REDESIGN — SHARED NAVIGATION & COMPONENTS
 * HCI-compliant interactions, keyboard nav, accessibility
 */

/* ============================================================
   THEME MANAGEMENT
   ============================================================ */
const ThemeManager = {
  init() {
    const saved = localStorage.getItem('bs-theme') || 'dark';
    this.apply(saved);
  },
  apply(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('bs-theme', theme);
    const btn = document.getElementById('themeToggle');
    if (btn) {
      btn.innerHTML = theme === 'dark'
        ? `<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`
        : `<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
      btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
      btn.setAttribute('data-tooltip', theme === 'dark' ? 'Light mode' : 'Dark mode');
    }
  },
  toggle() {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    this.apply(current === 'dark' ? 'light' : 'dark');
  }
};

/* ============================================================
   SIDEBAR MANAGEMENT
   ============================================================ */
const Sidebar = {
  collapsed: false,
  init() {
    this.collapsed = localStorage.getItem('bs-sidebar-collapsed') === 'true';
    this.apply();

    const toggleBtn = document.getElementById('sidebarToggle');
    if (toggleBtn) toggleBtn.addEventListener('click', () => this.toggle());

    const mobileToggle = document.getElementById('mobileSidebarToggle');
    if (mobileToggle) mobileToggle.addEventListener('click', () => this.openMobile());

    // Close sidebar on outside click (mobile)
    document.addEventListener('click', (e) => {
      const sidebar = document.getElementById('sidebar');
      const toggle = document.getElementById('mobileSidebarToggle');
      if (sidebar && window.innerWidth <= 768) {
        if (!sidebar.contains(e.target) && e.target !== toggle) {
          sidebar.classList.remove('mobile-open');
        }
      }
    });

    // Keyboard shortcut: Ctrl+B toggle sidebar
    document.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'b') {
        e.preventDefault();
        this.toggle();
      }
    });
  },
  apply() {
    const shell = document.querySelector('.app-shell');
    if (shell) shell.classList.toggle('sidebar-collapsed', this.collapsed);
  },
  toggle() {
    this.collapsed = !this.collapsed;
    localStorage.setItem('bs-sidebar-collapsed', this.collapsed);
    this.apply();
  },
  openMobile() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) sidebar.classList.toggle('mobile-open');
  }
};

/* ============================================================
   ROLE TOGGLE (Student / Instructor)
   ============================================================ */
const RoleManager = {
  current: 'student',
  init() {
    const saved = localStorage.getItem('bs-role') || 'student';
    this.apply(saved);

    document.querySelectorAll('[data-role-btn]').forEach(btn => {
      btn.addEventListener('click', () => {
        this.apply(btn.dataset.roleBtn);
      });
    });
  },
  apply(role) {
    this.current = role;
    localStorage.setItem('bs-role', role);
    document.body.setAttribute('data-role', role);

    document.querySelectorAll('[data-role-btn]').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.roleBtn === role);
    });

    // Show/hide role-specific nav items
    document.querySelectorAll('[data-student-only]').forEach(el =>
      el.style.display = role === 'student' ? '' : 'none'
    );
    document.querySelectorAll('[data-instructor-only]').forEach(el =>
      el.style.display = role === 'instructor' ? '' : 'none'
    );

    // Show role badge in topbar
    const badge = document.getElementById('roleBadge');
    if (badge) {
      badge.textContent = role === 'student' ? 'Student View' : 'Instructor View';
      badge.className = `badge ${role === 'student' ? 'badge-accent' : 'badge-warning'}`;
    }
  }
};

/* ============================================================
   ACTIVE NAV ITEM
   ============================================================ */
function setActiveNav() {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-item[data-page]').forEach(item => {
    item.classList.toggle('active', item.dataset.page === page);
    item.setAttribute('aria-current', item.dataset.page === page ? 'page' : 'false');
  });
}

/* ============================================================
   DROPDOWN
   ============================================================ */
function initDropdowns() {
  document.querySelectorAll('.dropdown').forEach(dd => {
    const trigger = dd.querySelector('[data-dropdown-trigger]');
    const menu = dd.querySelector('.dropdown-menu');
    if (!trigger || !menu) return;

    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = dd.classList.contains('open');
      document.querySelectorAll('.dropdown.open').forEach(d => d.classList.remove('open'));
      if (!isOpen) dd.classList.add('open');
      trigger.setAttribute('aria-expanded', !isOpen);
    });

    // Keyboard navigation
    trigger.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); trigger.click(); }
      if (e.key === 'Escape') dd.classList.remove('open');
    });

    // Focus trap in menu
    menu.addEventListener('keydown', (e) => {
      const items = [...menu.querySelectorAll('.dropdown-item')];
      const idx = items.indexOf(document.activeElement);
      if (e.key === 'ArrowDown') { e.preventDefault(); items[(idx + 1) % items.length]?.focus(); }
      if (e.key === 'ArrowUp')   { e.preventDefault(); items[(idx - 1 + items.length) % items.length]?.focus(); }
      if (e.key === 'Escape')    { dd.classList.remove('open'); trigger.focus(); }
    });
  });

  document.addEventListener('click', () => {
    document.querySelectorAll('.dropdown.open').forEach(d => d.classList.remove('open'));
  });
}

/* ============================================================
   TOAST NOTIFICATIONS
   ============================================================ */
const Toast = {
  icons: {
    success: `<svg width="18" height="18" fill="none" stroke="#22C55E" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>`,
    warning: `<svg width="18" height="18" fill="none" stroke="#F59E0B" stroke-width="2.5" viewBox="0 0 24 24"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
    danger:  `<svg width="18" height="18" fill="none" stroke="#EF4444" stroke-width="2.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
    info:    `<svg width="18" height="18" fill="none" stroke="#3B82F6" stroke-width="2.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`
  },
  show(message, type = 'info', duration = 4000) {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      container.setAttribute('role', 'region');
      container.setAttribute('aria-live', 'polite');
      container.setAttribute('aria-label', 'Notifications');
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.setAttribute('role', 'alert');
    toast.innerHTML = `
      ${this.icons[type] || this.icons.info}
      <span style="flex:1;font-size:0.875rem;color:var(--text-primary)">${message}</span>
      <button onclick="this.parentElement.remove()" style="border:none;background:none;color:var(--text-muted);cursor:pointer;padding:0;display:flex"
        aria-label="Dismiss notification">
        <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    `;
    container.appendChild(toast);

    if (duration > 0) setTimeout(() => toast.remove(), duration);
    return toast;
  }
};

/* ============================================================
   NOTIFICATION PANEL
   ============================================================ */
function initNotifications() {
  const bell = document.getElementById('notifBell');
  const panel = document.getElementById('notifPanel');
  if (!bell || !panel) return;

  bell.addEventListener('click', (e) => {
    e.stopPropagation();
    const open = panel.classList.toggle('open');
    bell.setAttribute('aria-expanded', open);
    if (open) bell.querySelector('svg')?.classList.add('bell-animate');
  });

  document.addEventListener('click', (e) => {
    if (!panel.contains(e.target) && e.target !== bell) {
      panel.classList.remove('open');
      bell.setAttribute('aria-expanded', 'false');
    }
  });

  // Mark all read
  const markAllRead = document.getElementById('markAllRead');
  if (markAllRead) {
    markAllRead.addEventListener('click', () => {
      document.querySelectorAll('.notif-item.unread').forEach(el => el.classList.remove('unread'));
      const count = document.querySelector('.notif-count');
      if (count) count.remove();
      Toast.show('All notifications marked as read', 'success');
    });
  }
}

/* ============================================================
   PROGRESS BARS — Animate on visibility
   ============================================================ */
function initProgressBars() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const target = bar.dataset.progress || '0';
        bar.style.width = target + '%';
        observer.unobserve(bar);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.progress-fill[data-progress]').forEach(bar => {
    bar.style.width = '0%';
    observer.observe(bar);
  });
}

/* ============================================================
   MODAL
   ============================================================ */
function openModal(id) {
  const overlay = document.getElementById(id);
  if (!overlay) return;
  overlay.classList.add('open');
  overlay.setAttribute('aria-hidden', 'false');
  const firstFocusable = overlay.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
  firstFocusable?.focus();

  // Trap focus
  overlay.addEventListener('keydown', trapFocus);
  overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(id); });
}

function closeModal(id) {
  const overlay = document.getElementById(id);
  if (!overlay) return;
  overlay.classList.remove('open');
  overlay.setAttribute('aria-hidden', 'true');
  overlay.removeEventListener('keydown', trapFocus);
}

function trapFocus(e) {
  if (e.key !== 'Tab') {
    if (e.key === 'Escape') closeModal(e.currentTarget.id);
    return;
  }
  const focusable = [...e.currentTarget.querySelectorAll(
    'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
  )];
  const first = focusable[0], last = focusable[focusable.length - 1];
  if (e.shiftKey ? document.activeElement === first : document.activeElement === last) {
    e.preventDefault();
    (e.shiftKey ? last : first).focus();
  }
}

/* ============================================================
   TABS
   ============================================================ */
function initTabs() {
  document.querySelectorAll('[data-tabs]').forEach(container => {
    const tabs = container.querySelectorAll('[data-tab]');
    const panels = document.querySelectorAll('[data-tab-panel]');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected', 'false'); });
        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');

        const target = tab.dataset.tab;
        panels.forEach(p => {
          const visible = p.dataset.tabPanel === target;
          p.hidden = !visible;
          if (visible) p.classList.add('animate-fadeIn');
        });
      });

      // Arrow key navigation
      tab.addEventListener('keydown', (e) => {
        const tabsList = [...tabs];
        const idx = tabsList.indexOf(tab);
        if (e.key === 'ArrowRight') { e.preventDefault(); tabsList[(idx + 1) % tabsList.length].click(); }
        if (e.key === 'ArrowLeft')  { e.preventDefault(); tabsList[(idx - 1 + tabsList.length) % tabsList.length].click(); }
      });
    });
  });
}

/* ============================================================
   COURSE CARD MOUSE GLOW
   ============================================================ */
function initCardGlow() {
  document.querySelectorAll('.course-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width * 100).toFixed(1);
      const y = ((e.clientY - rect.top) / rect.height * 100).toFixed(1);
      card.style.setProperty('--mouse-x', x + '%');
      card.style.setProperty('--mouse-y', y + '%');
    });
  });
}

/* ============================================================
   SIDEBAR SEARCH FILTER
   ============================================================ */
function initSidebarSearch() {
  const input = document.getElementById('sidebarSearch');
  if (!input) return;
  input.addEventListener('input', () => {
    const q = input.value.toLowerCase();
    document.querySelectorAll('.nav-item[data-page]').forEach(item => {
      const label = item.querySelector('.nav-label')?.textContent?.toLowerCase() || '';
      item.style.display = !q || label.includes(q) ? '' : 'none';
    });
  });
}

/* ============================================================
   ACCESSIBLE BUTTON RIPPLE
   ============================================================ */
function initRipple() {
  document.querySelectorAll('.btn-primary, .btn-secondary').forEach(btn => {
    btn.addEventListener('click', function(e) {
      const rect = btn.getBoundingClientRect();
      const ripple = document.createElement('span');
      ripple.className = 'ripple-effect';
      const size = Math.max(rect.width, rect.height);
      ripple.style.cssText = `
        width:${size}px; height:${size}px;
        left:${e.clientX - rect.left - size/2}px;
        top:${e.clientY - rect.top - size/2}px;
      `;
      btn.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
  });
}

/* ============================================================
   SYSTEM STATUS CHECK
   ============================================================ */
function initSystemStatus() {
  const statusEl = document.getElementById('systemStatus');
  if (!statusEl) return;

  function update() {
    const online = navigator.onLine;
    statusEl.className = `system-status ${online ? '' : 'offline'}`;
    statusEl.innerHTML = online
      ? `<span class="status-dot online"></span> All systems operational`
      : `<span class="status-dot offline"></span> Offline — reconnecting...`;
  }

  update();
  window.addEventListener('online', update);
  window.addEventListener('offline', update);
}

/* ============================================================
   COUNTDOWN TIMERS
   ============================================================ */
function initCountdowns() {
  document.querySelectorAll('[data-countdown]').forEach(el => {
    const deadline = new Date(el.dataset.countdown);

    function update() {
      const diff = deadline - Date.now();
      if (diff <= 0) { el.textContent = 'Past due'; el.classList.add('text-danger'); return; }
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      if (d > 0)      el.textContent = `${d}d ${h}h`;
      else if (h > 0) el.textContent = `${h}h ${m}m`;
      else            el.textContent = `${m}m`;

      if (diff < 86400000) el.classList.add('text-danger', 'deadline-urgent');
      else if (diff < 259200000) el.classList.add('text-warning');
    }

    update();
    setInterval(update, 60000);
  });
}

/* ============================================================
   SEARCH (global)
   ============================================================ */
function initSearch() {
  const input = document.getElementById('globalSearch');
  if (!input) return;
  // Keyboard shortcut Ctrl+K / Cmd+K
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      input.focus();
      input.select();
    }
  });
}

/* ============================================================
   INIT ALL
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  ThemeManager.init();
  Sidebar.init();
  RoleManager.init();
  setActiveNav();
  initDropdowns();
  initNotifications();
  initProgressBars();
  initTabs();
  initCardGlow();
  initSidebarSearch();
  initRipple();
  initSystemStatus();
  initCountdowns();
  initSearch();

  // Theme toggle button
  const themeBtn = document.getElementById('themeToggle');
  if (themeBtn) themeBtn.addEventListener('click', () => ThemeManager.toggle());
});

// Expose globals for inline usage
window.Toast = Toast;
window.openModal = openModal;
window.closeModal = closeModal;
window.ThemeManager = ThemeManager;
window.RoleManager = RoleManager;
