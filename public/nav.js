document.addEventListener("DOMContentLoaded", function () {
  var links = document.querySelectorAll("[data-nav-link]");
  var targets = [];
  links.forEach(function (link) {
    var section = document.getElementById(link.getAttribute("href").slice(1));
    if (section && targets.indexOf(section) === -1) targets.push(section);
  });
  if (targets.length === 0) return;

  var activeId = null;

  function mark() {
    links.forEach(function (link) {
      if (link.getAttribute("href") === "#" + activeId) {
        link.setAttribute("aria-current", "true");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  /* The band is a thin strip around the middle of the screen, so only one section is in it. */
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) activeId = entry.target.id;
        else if (entry.target.id === activeId) activeId = null;
      });
      mark();
    },
    { rootMargin: "-45% 0px -54% 0px" },
  );
  targets.forEach(function (target) {
    observer.observe(target);
  });
});
