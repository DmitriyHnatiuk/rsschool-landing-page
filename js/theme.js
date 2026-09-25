document.addEventListener('DOMContentLoaded', () => {
  const themeCheckbox = document.getElementById('theme-toggle');
  const documentElement = document.documentElement;

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