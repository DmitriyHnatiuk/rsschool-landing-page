document.addEventListener('DOMContentLoaded', () => {
  const themeCheckbox = document.getElementById('theme-toggle');
  const documentElement = document.documentElement;

  const mobile_menu_bth = document.getElementById('mobile-menu-bth');

  mobile_menu_bth.addEventListener('change', (e) => e.target.checked ?
    document.documentElement.style.overflow = 'hidden' :
    document.documentElement.style.overflow = '');

  const savedTheme = localStorage.getItem('site-theme');

  if (savedTheme === 'dark') {
    documentElement.classList.add('dark-theme');
    themeCheckbox.checked = true;
  }

  themeCheckbox.addEventListener('change', () => {
    documentElement.classList.toggle('dark-theme');

    themeCheckbox.checked ? localStorage.setItem('site-theme', 'dark') : localStorage.setItem('site-theme', 'light');
  });
});