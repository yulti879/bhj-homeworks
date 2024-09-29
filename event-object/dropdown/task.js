const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  dropdown.onclick = function() {
    list.classList.toggle('dropdown__list_active');
  }
  
  const value = dropdown.querySelector('.dropdown__value');
  const list = dropdown.querySelector('.dropdown__list');
  const links = dropdown.querySelectorAll('.dropdown__link');

  links.forEach(link => {
    link.onclick = function() {
      value.textContent = link.textContent;
      return false;
    }
  });
});
