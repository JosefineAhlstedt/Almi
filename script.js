let menu = document.querySelector('#hamburger');
let btn = document.querySelector(".navbar-toggler");
btn.addEventListener('click', e => {
    if (menu.classList.contains('show')) {
        menu.classList.remove("show");
    } else {
        menu.classList.add("show");
    }
});