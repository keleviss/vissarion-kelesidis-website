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