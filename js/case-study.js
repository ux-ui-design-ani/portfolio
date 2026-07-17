const menuBtn = document.querySelector(".menu-toggle");
const nav = document.querySelector(".header nav");

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("active");
    menuBtn.classList.toggle("active");

});
document.querySelectorAll(".header nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");
        menuBtn.classList.remove("active");

    });

});