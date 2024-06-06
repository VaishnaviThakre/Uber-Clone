const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const navLink = document.querySelector("#nav-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
  navLink.classList.toggle("active");
});

document.querySelectorAll(".nav-links").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
    navLink.classList.remove("active");
  })
);
