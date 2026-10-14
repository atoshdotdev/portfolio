const sectionLinks = document.querySelectorAll<HTMLAnchorElement>(
  "[data-section-link]",
);

if (sectionLinks.length > 0) {
  const sections = new Map<string, HTMLAnchorElement[]>();

  sectionLinks.forEach((link) => {
    const sectionId = link.dataset.sectionLink;

    if (!sectionId) return;

    const links = sections.get(sectionId) ?? [];
    links.push(link);
    sections.set(sectionId, links);
  });

  const options = {
    rootMargin: "-96px 0px -50% 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const links = sections.get(entry.target.id);

      if (!links) return;

      links.forEach((link) => {
        link.classList.toggle("active", entry.isIntersecting);

        if (entry.isIntersecting) {
          link.setAttribute("aria-current", "location");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    });
  }, options);

  sections.forEach((_, sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) observer.observe(section);
  });
}
