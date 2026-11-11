// Rishitha Gangidi portfolio: mobile menu, scroll reveal, footer year.
(function () {
  "use strict";

  // Footer year
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile menu toggle
  var toggle = document.querySelector(".menu-toggle");
  var links = document.querySelector(".nav-links");

  function setMenu(open) {
    if (!toggle || !links) return;
    toggle.classList.toggle("open", open);
    links.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
  }

  if (toggle) {
    toggle.addEventListener("click", function () {
      setMenu(!links.classList.contains("open"));
    });
  }

  if (links) {
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { setMenu(false); });
    });
  }

  // Scroll reveal (falls back to showing everything if IntersectionObserver is missing)
  var items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

    items.forEach(function (el) { observer.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add("visible"); });
  }
})();
