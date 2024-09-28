let openNav = document.querySelector(".open-nav");
let closeNav = document.querySelector(".close-nav");
let tl = gsap.timeline();

tl.to(".full", {
  right: 0,
  duration: 0.6,
});

tl.from("ul li", {
  x: 150,
  duration: 0.6,
  stagger: 0.2,
  opacity: 0,
});

tl.from(".full i", {
  opacity: 0,
});

tl.pause();

openNav.addEventListener("click", () => {
  tl.play();
});

closeNav.addEventListener("click", () => {
  tl.reverse();
});
