// Off Canvas Menu
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

  if (offCanvasShown === true && width >= 950) {
    hideOffCanvasMenu();
  }
})