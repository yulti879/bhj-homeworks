const dropdown = document.querySelector('.dropdown');
const value = document.querySelector('.dropdown__value');
const list = document.querySelector('.dropdown__list');
//const items = document.querySelectorAll('.dropdown__item');
const links = document.querySelectorAll('.dropdown__link');

dropdown.onclick = function() {
  list.classList.add('dropdown__list_active')
};

links.forEach(link => {
  link.onclick = function() {  
    list.remove('dropdown__list_active');
    value.textContent = link.textContent;
    return false;
  }
});