document.addEventListener("DOMContentLoaded", function () {
  const galleryContainer = document.querySelector(".gallery");

  const images = [];

  for (let i = 1; i < 25; i++) {
    images[i] = `media_${i}.png`;
  }

  images.forEach((image) => {
    const imageDiv = document.createElement("div");
    imageDiv.classList.add("image-container");

    const img = document.createElement("img");
    img.src = "../images/" + image;
    img.alt = "img";

    imageDiv.appendChild(img);
    galleryContainer.appendChild(imageDiv);
  });
});
