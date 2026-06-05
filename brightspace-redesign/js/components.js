/**
 * Shared sidebar/topbar HTML generator — injects into every page
 */
function injectShell() {
  // Update sidebar user info based on role
  const role = localStorage.getItem('bs-role') || 'student';
  const user = MockData.user[role];
  const nameEl = document.getElementById('sidebarName');
  const roleEl = document.getElementById('sidebarRole');
  const avatarEl = document.getElementById('sidebarAvatar');
  if (nameEl)   nameEl.textContent = user.name;
  if (roleEl)   roleEl.textContent = role === 'student' ? `Student · Fall 2024` : user.department;
  if (avatarEl) avatarEl.textContent = user.initials;

  // Update topbar avatar
  document.querySelectorAll('[data-user-avatar]').forEach(el => el.textContent = user.initials);
  document.querySelectorAll('[data-user-name]').forEach(el => el.textContent = user.name);
  document.querySelectorAll('[data-user-email]').forEach(el => el.textContent = user.email);

  // Mobile: show hamburger
  const mob = document.getElementById('mobileSidebarToggle');
  if (mob) mob.style.display = window.innerWidth <= 768 ? 'flex' : 'none';
  window.addEventListener('resize', () => {
    if (mob) mob.style.display = window.innerWidth <= 768 ? 'flex' : 'none';
  });
}

document.addEventListener('DOMContentLoaded', injectShell);
