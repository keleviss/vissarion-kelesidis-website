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