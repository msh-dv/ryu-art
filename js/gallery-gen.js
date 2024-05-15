class Image {
  constructor(name, views, rate) {
    this.name = name;
    this.views = views;
    this.rate = rate;
  }
}

const imageObjAray = [];

const galleryContainer = document.querySelector(".gallery");

const random = (num) => Math.floor(Math.random() * (num + 1));

const images = [];

for (let i = 1; i < 27; i++) {
  images[i] = `media_${i}.png`;
}

let isImageWin = false;

const imageWin = document.querySelector(".imageWin");
const closeBtn = document.getElementById("closeBtn");

closeBtn.addEventListener("click", () => {
  imageWin.style.visibility = "hidden";
  imageWin.style.opacity = "0";
  imageWin.removeChild(imageWin.lastChild);
});

images.forEach((image) => {
  const imageDiv = document.createElement("div");
  const infoDiv = document.createElement("div");
  const views = document.createElement("span");
  const rate = document.createElement("span");

  const img = document.createElement("img");
  img.loading = "lazy";
  img.src = "images/" + image;
  img.alt = "img";

  imageDiv.classList.add("image-container");
  infoDiv.classList.add("info");
  views.classList.add("views");
  rate.classList.add("rate");

  const viewsNum = views.textContent = random(1000);
  const rateNum = rate.textContent = random(10);

  infoDiv.appendChild(views);
  infoDiv.appendChild(rate);

  imageDiv.id = "imageDiv";
  imageDiv.appendChild(img);
  imageDiv.appendChild(infoDiv);

  galleryContainer.appendChild(imageDiv);

  const imageCont = new Image(image, viewsNum, rateNum);
  imageObjAray.push(imageCont);

  imageDiv.addEventListener("click", () => {
    const innerImage = document.createElement("img");

    innerImage.src = "images/" + imageCont.name;

    imageWin.appendChild(innerImage);

    imageWin.style.visibility = "visible";
    imageWin.style.opacity = "1";
  });
});
