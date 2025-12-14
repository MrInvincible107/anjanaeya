document.addEventListener("DOMContentLoaded", () => {
  // AOS (safe to run everywhere)
  if (window.AOS) {
    AOS.init({
      duration: 700,
      once: true,
      offset: 80
    });
  }

  // GSAP (safe to run everywhere)
  if (!window.gsap || !window.ScrollTrigger) return;
  gsap.registerPlugin(ScrollTrigger);

  // Animate any section that has class "journey-section" OR "vision"
  const sections = document.querySelectorAll(".journey-section, .vision");
  if (!sections.length) return;

  sections.forEach((section) => {
    const h2 = section.querySelector("h2");
    const h4 = section.querySelector("h4");
    const btn = section.querySelector(".btn");
    const ps  = section.querySelectorAll("p");

    if (h2) {
      gsap.from(h2, {
        scrollTrigger: { trigger: h2, start: "top 90%", toggleActions: "play none none none" },
        opacity: 0, y: 40, scale: 0.95, duration: 0.7, ease: "power3.out"
      });
    }

    if (h4) {
      gsap.from(h4, {
        scrollTrigger: { trigger: h4, start: "top 95%", toggleActions: "play none none none" },
        opacity: 0, y: 30, duration: 0.6, ease: "power2.out"
      });
    }

    if (ps.length) {
      gsap.from(ps, {
        scrollTrigger: { trigger: section, start: "top 90%", toggleActions: "play none none none" },
        opacity: 0, y: 25, duration: 0.6, stagger: 0.2, ease: "power2.out"
      });
    }

    if (btn) {
      gsap.from(btn, {
        scrollTrigger: { trigger: btn, start: "top 95%", toggleActions: "play none none none" },
        opacity: 0, y: 20, scale: 0.95, duration: 0.5,
        ease: "back.out(1.7)", delay: 0.2
      });
    }
  });
});
