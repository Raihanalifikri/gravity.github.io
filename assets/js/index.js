// navbar toggle button

const toggleButton = document.getElementsByClassName('toggle')[0];
const navbarItem = document.getElementsByClassName('navbar-items');
toggleButton.addEventListener('click', function() {
    for(let i = 0; i < navbarItem.length; i++) {
        navbarItem[i].classList.toggle('active');
    }
} );