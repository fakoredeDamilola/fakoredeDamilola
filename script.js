// define variables and dom elements
let menuToggle = document.querySelector(".menu-toggle")
let closeNav = document.querySelector(".close-nav")
let menu = document.querySelector(".menu")
let mouseDown = document.querySelector(".mouse-down")

let links = document.querySelectorAll(".menu ul li a")
for (const link of links) {
    link.addEventListener("click", clickHandler);
}


// define eventlisteners
menuToggle.addEventListener("click", function () {
    menu.classList.add("active")

})
closeNav.addEventListener("click", function () {
    menu.classList.remove("active")

})

function clickHandler(e) {
    e.preventDefault();
    menu.classList.remove("active");
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;

    scroll({
        top: offsetTop,
        behavior: "smooth",
    });
}