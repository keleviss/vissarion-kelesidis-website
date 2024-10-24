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