document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  // Animate heading
  gsap.from(".journey-section h2", {
    scrollTrigger: {
      trigger: ".journey-section h2",
      start: "top 90%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 40,
    scale: 0.95,
    duration: 0.7,
    ease: "power3.out"
  });

  // Animate subheading
  gsap.from(".journey-section h4", {
    scrollTrigger: {
      trigger: ".journey-section h4",
      start: "top 95%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 30,
    duration: 0.6,
    ease: "power2.out"
  });

  // Animate paragraphs and quote (staggered)
  gsap.from(".journey-section p", {
    scrollTrigger: {
      trigger: ".journey-section p",
      start: "top 90%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 25,
    duration: 0.6,
    stagger: 0.2,
    ease: "power2.out"
  });

  // Animate button
  gsap.from(".journey-section .btn", {
    scrollTrigger: {
      trigger: ".journey-section .btn",
      start: "top 95%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 20,
    scale: 0.95,
    duration: 0.5,
    ease: "back.out(1.7)",
    delay: 0.2
  });
});
