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

})