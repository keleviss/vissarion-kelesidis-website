const themeSwitch = document.getElementById('theme-switch')

themeSwitch.addEventListener('click', () => {
  const checkball = document.getElementById('checkball');
  const check = checkball.classList.value.split(' ');
  const github = document.querySelector('i');

  github.classList.toggle('fa-sun');
  github.classList.toggle('fa-moon');

  document.body.classList.toggle('dark-theme');
  // document.getElementById('checkball').classList.toggle('dark');

  if (check.includes('checked')) {
    checkball.style.transform = 'translateX(0)';
    checkball.style.left = 0;
    checkball.classList.toggle('checked');
  } else {
    checkball.style.transform = 'translateX(100%)';
    checkball.style.right = 0;
    checkball.classList.toggle('checked');
  }

  // const c = checkball.classList.value;
  // console.log(c);
})

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

document.addEventListener('DOMContentLoaded', function() {
  const langDropdown = document.getElementById('lang-dropdown');
  const dropdownMenu = document.getElementById('dropdown-menu');
  const selectedLang = document.getElementById('selected-lang');
  const dropdownItems = document.querySelectorAll('.dropdown-item');

  langDropdown.addEventListener('click', function() {
    dropdownMenu.classList.toggle('hidden');
  });

  dropdownItems.forEach(item => {
    item.addEventListener('click', function() {
      selectedLang.textContent = this.getAttribute('data-lang');
      dropdownMenu.classList.add('hidden');
    });
  });

  // Close the dropdown if clicked outside
  document.addEventListener('click', function(event) {
    if (!langDropdown.contains(event.target)) {
      dropdownMenu.classList.add('hidden');
    }
  });
});

// Off Canvas Menu
const mobileNavMenu =  document.getElementById('mobile-nav-menu');
const offCanvasMenu = document.getElementById('offcanvas-menu');
const offCanvasCloseIcon = document.getElementById('offcanvas-close-icon'); 

mobileNavMenu.addEventListener('click', event => {
  // offCanvasMenu.style.visibility = 'visible';
  offCanvasMenu.style.transform = 'translateX(0)';
  document.body.style.overflowY = 'hidden';
  offCanvasMenu.style.position = 'fixed';
})

offCanvasCloseIcon.addEventListener('click', event => {
  offCanvasMenu.style.transform = 'translateY(-100%)';
  document.body.style.overflowY = 'unset';
})