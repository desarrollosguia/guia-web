(function () {
  var STORAGE_KEY = "theme";
  var root = document.documentElement;

  function stored() {
    try {
      var value = localStorage.getItem(STORAGE_KEY);
      return value === "light" || value === "dark" ? value : null;
    } catch {
      return null;
    }
  }

  function systemTheme() {
    return matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function remember(theme) {
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      /* Without storage the choice only lasts for this visit. */
    }
  }

  root.dataset.theme = stored() || systemTheme();

  document.addEventListener("DOMContentLoaded", function () {
    var wrappers = document.querySelectorAll("[data-theme-switch]");
    var buttons = document.querySelectorAll("[data-theme-value]");

    function mark() {
      buttons.forEach(function (button) {
        button.setAttribute(
          "aria-pressed",
          String(button.dataset.themeValue === root.dataset.theme),
        );
      });
    }

    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        root.dataset.theme = button.dataset.themeValue;
        remember(root.dataset.theme);
        mark();
      });
    });
    wrappers.forEach(function (wrapper) {
      wrapper.hidden = false;
    });
    mark();
  });
})();
