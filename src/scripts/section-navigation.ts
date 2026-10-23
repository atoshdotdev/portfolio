const sectionLinks = document.querySelectorAll<HTMLAnchorElement>(
  "[data-section-link]",
);

if (sectionLinks.length > 0) {
  const linksBySection = new Map<string, HTMLAnchorElement[]>();
  const observedSections = new Map<Element, boolean>();

  let manuallySelectedSection: string | null = null;
  let scrollTimeout: ReturnType<typeof setTimeout> | undefined;

  sectionLinks.forEach((link) => {
    const sectionId = link.dataset.sectionLink;
    if (!sectionId) return;

    const links = linksBySection.get(sectionId) ?? [];
    links.push(link);
    linksBySection.set(sectionId, links);
  });

  const setActiveSection = (activeSectionId: string | null) => {
    linksBySection.forEach((links, sectionId) => {
      const isActive = sectionId === activeSectionId;

      links.forEach((link) => {
        link.classList.toggle("active", isActive);

        if (isActive) {
          link.setAttribute("aria-current", "location");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    });
  };

  const clearManualSelection = () => {
    manuallySelectedSection = null;

    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
      scrollTimeout = undefined;
    }
  };

  const selectSectionTemporarily = (sectionId: string) => {
    manuallySelectedSection = sectionId;
    setActiveSection(sectionId);

    if (scrollTimeout) clearTimeout(scrollTimeout);

    scrollTimeout = setTimeout(() => {
      clearManualSelection();
    }, 1000);
  };

  sectionLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const sectionId = link.dataset.sectionLink;
      if (!sectionId) return;

      selectSectionTemporarily(sectionId);
    });
  });

  window.addEventListener("wheel", clearManualSelection, {
    passive: true,
  });

  window.addEventListener("touchstart", clearManualSelection, {
    passive: true,
  });

  window.addEventListener("keydown", (event) => {
    if (
      [
        "ArrowUp",
        "ArrowDown",
        "PageUp",
        "PageDown",
        "Home",
        "End",
        " ",
      ].includes(event.key)
    ) {
      clearManualSelection();
    }
  });

  const activationLine = 96;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        observedSections.set(entry.target, entry.isIntersecting);
      });

      if (manuallySelectedSection !== null) return;

      const intersectingSections = [...observedSections.entries()]
        .filter(([, isIntersecting]) => isIntersecting)
        .map(([section]) => section as HTMLElement)
        .map((section) => ({
          section,
          top: section.getBoundingClientRect().top,
        }));

      if (intersectingSections.length === 0) {
        setActiveSection(null);
        return;
      }

      const sectionsAboveLine = intersectingSections
        .filter(({ top }) => top <= activationLine)
        .sort((a, b) => b.top - a.top);

      const activeSection =
        sectionsAboveLine[0]?.section ??
        intersectingSections.reduce((closest, current) =>
          Math.abs(current.top - activationLine) <
          Math.abs(closest.top - activationLine)
            ? current
            : closest,
        ).section;

      setActiveSection(activeSection.id);
    },
    {
      rootMargin: "-96px 0px -50% 0px",
    },
  );

  linksBySection.forEach((_, sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      observedSections.set(section, false);
      observer.observe(section);
    }
  });
}
