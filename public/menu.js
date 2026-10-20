document.addEventListener("click", function (event) {
  var link = event.target.closest("[data-menu] a[href^='#']");
  if (link) link.closest("[popover]").hidePopover();
});
