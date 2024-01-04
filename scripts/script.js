function toggleMenu(title) {
    var links = title.nextElementSibling;
    var plusIcon = title.querySelector('.plus-icon');
    links.classList.toggle('show');
    plusIcon.classList.toggle('active');
}

function toggleBurger(){
    let menu = document.getElementById("burgerMenu")
    menu.classList.toggle("active")
}