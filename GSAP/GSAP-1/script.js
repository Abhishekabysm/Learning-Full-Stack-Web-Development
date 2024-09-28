let tl = gsap.timeline();

tl.from("h4", {
  duration: 1,
  y: -50,
  opacity: 0,
  ease: "bounce.out",
  delay: 0.5,
});

tl.from("li", {
  duration: 1,
  y: -50,
  opacity: 0,
  // ease: "bounce.out",
  delay: 0.5,
  stagger: 0.2,
});

tl.from("h2", {
  duration: 1,
  y: -50,
  opacity: 0,
  delay: 0.5,
  scale: 0.5,
});
