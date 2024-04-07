let hamburger = document.querySelector("#hamburger");
let nav = document.querySelector("#nav-links");
hamburger.addEventListener("click", () => {
    if(nav.style.display === "flex") {
        nav.style.display = "none";
    } else {
        nav.style.display = "flex";
    }
});