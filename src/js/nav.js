// The phone menu, and nothing else. The button this drives is hidden unless
// this file runs, so with JavaScript unavailable the links stay on the page
// as an ordinary list and none of the below matters.
(function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  var header = toggle && toggle.closest("header");
  if (!toggle || !nav || !header) return;

  function setOpen(open) {
    nav.classList.toggle("is-open", open);
    // The button carries the state for anyone not looking at the screen.
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  }

  function isOpen() {
    return nav.classList.contains("is-open");
  }

  toggle.addEventListener("click", function (event) {
    // Without this the document listener below would see the same click
    // travel up and close the menu again immediately.
    event.stopPropagation();
    setOpen(!isOpen());
  });

  // Choosing a link closes the menu. The listener sits on the nav rather
  // than on each link, so it keeps working however the list changes.
  nav.addEventListener("click", function (event) {
    if (event.target.closest("a")) setOpen(false);
  });

  // So does a tap anywhere outside the header.
  document.addEventListener("click", function (event) {
    if (isOpen() && !event.target.closest("header")) setOpen(false);
  });

  // Escape closes it and puts focus back on the button, so a keyboard user
  // is left where they started rather than adrift in the page.
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && isOpen()) {
      setOpen(false);
      toggle.focus();
    }
  });
})();
