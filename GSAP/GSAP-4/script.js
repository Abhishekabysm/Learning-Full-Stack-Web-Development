let main = document.querySelector(".main");
let cursor = document.querySelector(".cursor");
let cursorFollower = document.querySelector(".cursor-follower");
let overlay = document.querySelector(".overlay");
main.addEventListener("mousemove", (e) => {
  gsap.to(cursor, {
    x: e.x,
    y: e.y,
    duration: 0.5,
    ease: "power2.out",
  });
});

overlay.addEventListener("mouseenter", () => {
  cursor.innerHTML = "View More";
  gsap.to(cursor, {
    scale: 2,
    duration: 0.5,
    ease: "power2.out",
    backgroundColor: "#e0dddd24",
  });
});

overlay.addEventListener("mouseleave", () => {
  cursor.innerHTML = "";
  gsap.to(cursor, {
    scale: 1,
    duration: 0.5,
    ease: "power2.out",
    backgroundColor: "#fff",
  });
});
