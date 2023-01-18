const menuToggle = document.querySelector(".menu-toggleruur input");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

document.addEventListener("scroll", () => {
  const navbar = document.querySelector("nav");

  if (window.scrollY >= 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
