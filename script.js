// define variables and dom elements
let barsText = document.querySelector(".barsText")
let closeNav = document.querySelector(".close-nav")
let menu = document.querySelector(".menu")
let mouseDown = document.querySelector(".mouse-down")

let links = document.querySelectorAll(".menu li a")
for (const link of links) {
    link.addEventListener("click", clickHandler);
}


// define eventlisteners
barsText.addEventListener("click", function () {
    menu.classList.add("active")

})
closeNav.addEventListener("click", function () {
    menu.classList.remove("active")

})

function clickHandler(e) {

    menu.classList.remove("active");
    const href = this.getAttribute("href");
    if (href.split("")[0] === "#") {
        e.preventDefault();
        const offsetTop = document.querySelector(href).offsetTop;

        scroll({
            top: offsetTop,
            behavior: "smooth",
        });
    }

}