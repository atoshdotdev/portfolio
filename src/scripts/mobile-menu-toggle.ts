const menuButton = document.querySelector<HTMLButtonElement>(
  "#mobile-menu-toggle",
);
const mobileMenu = document.querySelector<HTMLDivElement>("#mobile-menu");
const menuBackdrop =
  document.querySelector<HTMLButtonElement>("#menu-backdrop");

if (menuButton && mobileMenu && menuBackdrop) {
  const setMenuOpen = (isOpen: boolean) => {
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu",
    );

    mobileMenu.hidden = !isOpen;
    menuBackdrop.hidden = !isOpen;

    document.body.classList.toggle("menu-open", isOpen);
  };

  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    setMenuOpen(!isOpen);
  });

  menuBackdrop.addEventListener("click", () => setMenuOpen(false));

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuOpen(false));
  });

  document.addEventListener("click", (event) => {
    if (
      menuButton.getAttribute("aria-expanded") !== "true" ||
      !(event.target instanceof Node) ||
      menuButton.contains(event.target) ||
      mobileMenu.contains(event.target) ||
      menuBackdrop.contains(event.target)
    ) {
      return;
    }

    setMenuOpen(false);
  });

  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      menuButton.getAttribute("aria-expanded") === "true"
    ) {
      setMenuOpen(false);
      menuButton.focus();
    }
  });

  window
    .matchMedia("(min-width: 769px)")
    .addEventListener("change", (event) => {
      if (event.matches) setMenuOpen(false);
    });
}
