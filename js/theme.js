document.addEventListener('DOMContentLoaded', () => {
  const themeCheckbox = document.getElementById('theme-toggle');
  const bodyElement = document.body;

  const savedTheme = localStorage.getItem('site-theme');

  if (savedTheme === 'dark') {
    bodyElement.classList.add('dark-theme');
    themeCheckbox.checked = true;
  }

  themeCheckbox.addEventListener('change', () => {
    bodyElement.classList.toggle('dark-theme');

    themeCheckbox.checked ? localStorage.setItem('site-theme', 'dark') : localStorage.setItem('site-theme', 'light');
  });
  
});