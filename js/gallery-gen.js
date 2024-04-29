document.addEventListener("DOMContentLoaded", function () {
  const galleryContainer = document.querySelector(".gallery");

  const images = [];

  for (let i = 1; i < 27; i++) {
    images[i] = `media_${i}.png`;
  }

  images.forEach((image) => {
    const imageDiv = document.createElement("div");
    imageDiv.classList.add("image-container");

    const img = document.createElement("img");
    img.loading = "lazy";
    img.src = "images/" + image;
    img.alt = "img";

    imageDiv.appendChild(img);
    galleryContainer.appendChild(imageDiv);
  });
});
