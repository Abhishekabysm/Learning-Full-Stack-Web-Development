function breakTheText() {
  let h1 = document.querySelector("h1");
  let h1Text = h1.textContent;

  // console.log(h1Text);

  let splittedText = h1Text.split("");
  let halfValue = Math.floor(splittedText.length / 2);
  let clutter = "";

  splittedText.forEach((element, index) => {
    if (index < halfValue) {
      clutter += `<span class="left-part">${element}</span>`;
    } else {
      clutter += `<span class="right-part">${element}</span>`;
    }
  });

  h1.innerHTML = clutter;
}

breakTheText();

gsap.from("h1 .left-part", {
  y: 80,
  duration: 0.7,
  opacity: 0,
  stagger: 0.15,
});

gsap.from("h1 .right-part", {
  y: 80,
  duration: 0.7,
  opacity: 0,
  stagger: -0.15,
});
