document.addEventListener('DOMContentLoaded', () => {

  // ============ Theme Switch ============
  const themeSwitch = document.querySelectorAll('.theme-switch');
  const checkBalls = document.querySelectorAll('.checkball');
  const SunMoonIcons = document.querySelectorAll('.fa-sun, .fa-moon');

  document.body.setAttribute('data-loading-theme', 'true');

  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'dark') {
    document.body.classList.toggle('dark-theme');
    toggleSunMoonIcons();
    transformCheckBalls();
  } else {
    const theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
  }

  setTimeout(() => {
    document.body.removeAttribute('data-loading-theme');
  }, 1);

  function toggleSunMoonIcons() {
    SunMoonIcons.forEach(sunMoonIcon => {
      sunMoonIcon.classList.toggle('fa-sun');
      sunMoonIcon.classList.toggle('fa-moon');
    })
  }

  function transformCheckBalls() {
    checkBalls.forEach(checkBall => {
      checkBall.classList.toggle('checked');
    })
  }

  themeSwitch.forEach(swtch => {

    swtch.addEventListener('click', () => {

      // Toggle .dark-theme class in the body element
      document.body.classList.toggle('dark-theme');
      const theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
      localStorage.setItem('theme', theme);


      // Toggle the .fa-sun and .fa-moon classes in the icon elements
      toggleSunMoonIcons();

      // Toggle the .checked class in the checkball element
      transformCheckBalls();
    })

  })

  // ============ Off Canvas Menu ============
  const offCanvasBarsIcon = document.getElementById('offcanvas-bars-icon');
  const offCanvasCloseIcon = document.getElementById('offcanvas-close-icon');
  const offCanvasMenu = document.getElementById('offcanvas-menu');
  const navContainer = document.querySelector('nav.container-fixed');

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
    navContainer.style.borderBottom = '1px solid var(--color-border)';
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
    navContainer.style.borderBottom = '';
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

  // ============ Language Dropdown ============
  const langDropdown = document.getElementById('lang-dropdown');
  const dropdownMenu = document.getElementById('dropdown-menu');
  const selectedLang = document.getElementById('selected-lang');
  const dropdownItems = document.querySelectorAll('.dropdown-item');

  langDropdown.addEventListener('click', function () {
    dropdownMenu.classList.toggle('hidden');
  });

  dropdownItems.forEach(item => {
    item.addEventListener('click', function () {
      selectedLang.textContent = this.getAttribute('data-lang');
      dropdownMenu.classList.add('hidden');
    });
  });

  // Close the dropdown if clicked outside
  document.addEventListener('click', function (event) {
    if (!langDropdown.contains(event.target)) {
      dropdownMenu.classList.add('hidden');
    }
  });

});