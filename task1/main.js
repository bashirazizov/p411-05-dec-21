let openNav = document.querySelector("#open-nav");
let closeNav = document.querySelector("#close");
let navbar = document.querySelector("#sidenav");

openNav.addEventListener("click", function () {
    navbar.classList.remove("closed");
});
closeNav.addEventListener("click", function () {
    navbar.classList.add("closed");
});