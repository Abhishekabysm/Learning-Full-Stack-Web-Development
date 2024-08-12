function cardGenerator(image, title, text, capsule1, capsule2) {
  let newCard = document.createElement("div");
  newCard.className = "container";
  newCard.innerHTML = `
      <div class="box">
        <img src="${image}" alt="${title}" />
        <div class="span_container">
          <span>${capsule1}</span>
          <span>${capsule2}</span>
        </div>
        <div class="main_content">
          <h1>${title}</h1>
          <p class="content">${text}</p>
        </div>
      </div>
    `;

  document.querySelector(".hero").appendChild(newCard);
}

// Example usage:
cardGenerator(
  "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-souvenirpixels-417074.jpg&fm=jpg",
  "New Lake Image",
  "A <strong>Lake</strong> is a large, natural or artificial body of water surrounded by land. It can vary in size from small ponds to vast expanses. Lakes provide habitats for diverse aquatic life and often serve as recreational destinations for fishing, boating, and relaxation.",
  "Nature",
  "Lake"
);

cardGenerator(
  "https://static.sadhguru.org/d/46272/1633199491-1633199490440.jpg",
  "Nature's Temple",
  "Amidst ancient groves, sunlight filters through emerald leaves, Silent hymns whispered by rustling branches, Stone cliffs stand as pillars, moss-clad and wise, Where earth and sky converge—a sacred sanctuary.",
  "Nature",
  "Lake"
);

cardGenerator(
  "https://akshitphotography.com/wp-content/uploads/2021/08/Nature-Photography-105.jpg",
  "Nature Photograph",
  "Amidst ancient groves, sunlight filters through emerald leaves, Silent hymns whispered by rustling branches, Stone cliffs stand as pillars, moss-clad and wise, Where earth and sky converge—a sacred sanctuary.",
  "Nature",
  "Lake"
);
