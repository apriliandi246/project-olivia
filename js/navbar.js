document.querySelector('.toggle-menu').addEventListener('click', () => {
   document.querySelector('.navbar__items').classList.toggle('navbar--slide');
});

document.querySelector('.toggle-menu').removeEventListener('click', () => {
   document.querySelector('.navbar__items').classList.toggle('navbar--slide');
});
