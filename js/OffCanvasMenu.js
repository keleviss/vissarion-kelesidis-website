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