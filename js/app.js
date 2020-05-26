/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

const sections = document.querySelectorAll("section");
const navbar = document.getElementById("navbar__list");

sections.forEach((section) => {
  let navList = document.createElement("li");
  navList.className = `menu__link ${section.className}`;
  let a = document.createElement("a");
  a.innerText = section.dataset.nav;
  a.href = `#${section.id}`;
  navList.setAttribute("data-link", section.id);
  navList.appendChild(a);
  navbar.appendChild(navList);
});

// Add class 'active' to section when near top of viewport
const int = (entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    const navList = document.querySelector(
      `.menu__link[data-link='${entry.target.id}']`
    );
    const section = document.getElementById(entry.target.id);
    console.log(navList);

    entry && entry.isIntersecting
      ? (navList.classList.add("active"), section.classList.add("active"))
      : (navList.classList.remove("active"),
        section.classList.remove("active"));
  });
};
const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.7,
};

const observer = new IntersectionObserver(int, options);
sections.forEach((section) => {
  observer.observe(document.getElementById(section.id));
});

// Scroll to anchor ID using scrollTO event

// Build menu

// Scroll to section on link click

// Set sections as active
