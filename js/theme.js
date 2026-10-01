document.addEventListener('DOMContentLoaded', () => {
  const themeCheckbox = document.getElementById('theme-toggle');
  const documentElement = document.documentElement;

  const mobile_menu_bth = document.getElementById('mobile-menu-bth');
  const navigation = document.getElementById('navigation');


  const handleEsc = (e) => {
    if (e.key === 'Escape') closeMenu(e);
  };

  function openMenu() {
    document.documentElement.style.overflow = 'hidden';
    window.addEventListener('keydown', handleEsc);
  }

  function closeMenu(e) {
    if ((!e?.key && (!e?.target.hash || !mobile_menu_bth.checked))) return;

    mobile_menu_bth.checked = false;
    document.documentElement.style.overflow = ''
    window.removeEventListener('keydown', handleEsc);
  }

  mobile_menu_bth.addEventListener('change', (e) =>
    e.target.checked ? openMenu() : closeMenu()
  );


  navigation.addEventListener("click", closeMenu);

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