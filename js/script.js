document.addEventListener('DOMContentLoaded', () => {

  // ============ Theme Switch ============
  const themeSwitch = document.querySelectorAll('.theme-switch');

  // Remove data-loading-theme to re-enable theme transitions
  document.documentElement.removeAttribute('data-loading-theme');

  // Function to udpate theme
  function updateTheme(theme) {
    document.documentElement.classList.toggle('dark-theme', theme === 'dark');
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }

  themeSwitch.forEach(swtch => {
    swtch.addEventListener('click', () => {
      const currentTheme = document.documentElement.classList.contains('dark-theme') ? 'dark' : 'light';
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      updateTheme(newTheme);
    })
  })

  // ============ Off Canvas Menu ============
  const offCanvasBarsIcon = document.getElementById('offcanvas-bars-icon');
  const offCanvasCloseIcon = document.getElementById('offcanvas-close-icon');
  const offCanvasMenu = document.getElementById('offcanvas-menu');
  const navContainer = document.querySelector('nav.container-full');

  let offCanvasShown = false;

  function showOffCanvasMenu() {
    // Show the off canvas menu
    offCanvasMenu.style.transform = 'translateX(0)';
    offCanvasShown = true;

    // Disable body scrolling
    document.body.style.overflowY = 'hidden';

    // Hide the Bars Icon and show the Close Icon
    offCanvasBarsIcon.style.display = 'none';
    offCanvasCloseIcon.style.display = 'block';

    // Add bottom border on the navContainer
    // navContainer.style.borderBottom = '1px solid var(--color-border)';
  }

  function hideOffCanvasMenu() {
    // Hide the off canvas menu
    offCanvasMenu.style.transform = 'translateY(-100%)';
    offCanvasShown = false;

    // Enable scrolling once again
    document.body.style.overflowY = 'unset';

    // Hide the Close icon and show the Bars icon
    offCanvasCloseIcon.style.display = 'none';
    offCanvasBarsIcon.style.display = '';

    // Remove bottom border from the navContainer
    // navContainer.style.borderBottom = '';
  }

  offCanvasBarsIcon.addEventListener('click', showOffCanvasMenu)

  offCanvasCloseIcon.addEventListener('click', hideOffCanvasMenu)

  window.addEventListener('resize', () => {
    const width = window.innerWidth;

    if (offCanvasShown === true && width >= 720) {
      hideOffCanvasMenu();
    }
  })

  // ============ Icon Hover Effect ============
  document.querySelectorAll('.icon').forEach((icon) => {

    icon.addEventListener('mouseover', (event) => {
      const previousIcon = event.currentTarget.previousElementSibling;
      const nextIcon = event.currentTarget.nextElementSibling;
      if (previousIcon && previousIcon.classList.contains('icon')) {
        previousIcon.classList.toggle('hovered');
      }
      if (nextIcon && nextIcon.classList.contains('icon')) {
        nextIcon.classList.toggle('hovered');
      }
    })

    icon.addEventListener('mouseout', (event) => {
      const previousIcon = event.currentTarget.previousElementSibling;
      const nextIcon = event.currentTarget.nextElementSibling;
      if (previousIcon && previousIcon.classList.contains('icon')) {
        previousIcon.classList.toggle('hovered');
      }
      if (nextIcon && nextIcon.classList.contains('icon')) {
        nextIcon.classList.toggle('hovered');
      }
    })

  })

});