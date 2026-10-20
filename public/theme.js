(function () {
  var STORAGE_KEY = "theme";
  var root = document.documentElement;

  function read() {
    try {
      var stored = localStorage.getItem(STORAGE_KEY);
      return stored === "light" || stored === "dark" ? stored : "system";
    } catch {
      return "system";
    }
  }

  function apply(choice) {
    if (choice === "system") {
      delete root.dataset.theme;
    } else {
      root.dataset.theme = choice;
    }
    try {
      if (choice === "system") {
        localStorage.removeItem(STORAGE_KEY);
      } else {
        localStorage.setItem(STORAGE_KEY, choice);
      }
    } catch {
      /* Without storage the choice only lasts for this visit. */
    }
  }

  var initial = read();
  if (initial !== "system") root.dataset.theme = initial;

  document.addEventListener("DOMContentLoaded", function () {
    var wrapper = document.querySelector("[data-theme-switch]");
    if (!wrapper) return;
    var buttons = wrapper.querySelectorAll("[data-theme-value]");

    function mark() {
      var current = root.dataset.theme || "system";
      buttons.forEach(function (button) {
        button.setAttribute("aria-pressed", String(button.dataset.themeValue === current));
      });
    }

    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        apply(button.dataset.themeValue);
        mark();
      });
    });
    wrapper.hidden = false;
    mark();
  });
})();
