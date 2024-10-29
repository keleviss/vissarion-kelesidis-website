const themeSwitch = document.querySelectorAll('.theme-switch');
const checkBalls = document.querySelectorAll('.checkball');
const SunMoonIcons = document.querySelectorAll('.fa-sun, .fa-moon');

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

    // Toggle the .fa-sun and .fa-moon classes in the icon elements
    toggleSunMoonIcons();

    // Toggle the .checked class in the checkball element
    transformCheckBalls();

  })

})
