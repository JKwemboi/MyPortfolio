const navLinks = document.querySelectorAll(".site-nav a");
const sections = [...navLinks]
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const setActiveLink = () => {
  let current = null;

  for (const section of sections) {
    const bounds = section.getBoundingClientRect();
    if (bounds.top <= 120) {
      current = section;
    }
  }

  navLinks.forEach((link) => {
    const isActive = current && link.getAttribute("href") === `#${current.id}`;
    link.toggleAttribute("aria-current", Boolean(isActive));
  });
};

setActiveLink();
window.addEventListener("scroll", setActiveLink, { passive: true });
