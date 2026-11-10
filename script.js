(function () {
  "use strict";

  var header = document.getElementById("site-header");
  var menuToggle = document.querySelector(".menu-toggle");
  var navLinks = document.querySelectorAll(".site-nav a");

  /* Mobile navigation */
  function closeMenu() {
    if (!header || !menuToggle) return;
    header.classList.remove("nav-open");
    document.body.classList.remove("nav-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open menu");
  }

  if (menuToggle) {
    menuToggle.addEventListener("click", function () {
      var isOpen = header.classList.toggle("nav-open");
      document.body.classList.toggle("nav-open", isOpen);
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    });

    navLinks.forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") closeMenu();
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 760) closeMenu();
    });
  }

  /* Header state on scroll */
  function updateHeader() {
    if (!header) return;
    header.classList.toggle("scrolled", window.scrollY > 8);
  }

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  /* Current year */
  var year = new Date().getFullYear();
  document.querySelectorAll("#year, .year").forEach(function (item) {
    item.textContent = year;
  });
})();
