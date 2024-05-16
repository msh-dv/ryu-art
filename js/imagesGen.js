class Image {
  constructor(name, views, rate) {
    this.name = name;
    this.views = views;
    this.rate = rate;
  }
}

const totalImages = 27;

const random = (num) => Math.floor(Math.random() * (num + 1));

//Generar una lista de imagenes

const images = (imgNum) => {
  const imagesArry = [];
  for (let i = 1; i < imgNum; i++) {
    imagesArry[i] = `media_${i}.png`;
  }
  return imagesArry;
};

//Generar una lista de objetos Imagen

const genObjImgList = (imgList) => {
  const objCreate = [];
  imgList.forEach((img) => {
    const newImage = new Image(img, random(1000), random(10));
    objCreate.push(newImage);
  });
  return objCreate;
};

//Ordenar por vistas o calificación o de manera aleatoria

const sortView = (objList) => objList.sort((a, b) => b.views - a.views);

const sortRate = (objList) => objList.sort((a, b) => b.rate - a.rate);

const shuffle = (objList) => {
  for (let i = objList.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [objList[i], objList[j]] = [objList[j], objList[i]];
  }
  return objList;
};

//Crear una lista de imagenes ordenada por: (random, views, rate)

const sortedGallery = (orden = "random", objList) => {
  let gallery;
  if (orden == "views") {
    gallery = sortView(objList);
    console.log(gallery);
  } else if (orden == "rate") {
    gallery = sortRate(objList);
    console.log(gallery);
  } else if (orden == "random") {
    gallery = shuffle(objList);
  }
  return gallery;
};

const galleryContainer = document.querySelector(".gallery");

const createHTML = (sortedList) => {
  sortedList.forEach((image) => {
    const imageDiv = document.createElement("div");
    const infoDiv = document.createElement("div");
    const views = document.createElement("span");
    const rate = document.createElement("span");

    const img = document.createElement("img");
    img.loading = "lazy";
    img.src = "images/" + image.name;
    img.alt = "img";

    imageDiv.classList.add("image-container");
    infoDiv.classList.add("info");
    views.classList.add("views");
    rate.classList.add("rate");

    views.textContent = image.views;
    rate.textContent = image.rate;

    infoDiv.appendChild(views);
    infoDiv.appendChild(rate);

    imageDiv.id = "imageDiv";
    imageDiv.appendChild(img);
    imageDiv.appendChild(infoDiv);

    galleryContainer.appendChild(imageDiv);

    imageDiv.addEventListener("click", () => {
      const innerImage = document.createElement("img");

      innerImage.src = "images/" + image.name;

      imageWin.appendChild(innerImage);

      imageWin.style.visibility = "visible";
      imageWin.style.opacity = "1";
    });
  });
};

let isImageWin = false;

const imageWin = document.querySelector(".imageWin");
const closeBtn = document.getElementById("closeBtn");

closeBtn.addEventListener("click", () => {
  imageWin.style.visibility = "hidden";
  imageWin.style.opacity = "0";
  imageWin.removeChild(imageWin.lastChild);
});

const viewBtn = document.getElementById("views-link");
const rateBtn = document.getElementById("rate-link");
const randomBtn = document.getElementById("random-link");

createHTML(sortedGallery("random", genObjImgList(images(totalImages))));

viewBtn.addEventListener("click", () => {
  galleryContainer.innerHTML = "";
  createHTML(sortedGallery("views", genObjImgList(images(totalImages))));
});

rateBtn.addEventListener("click", () => {
  galleryContainer.innerHTML = "";
  createHTML(sortedGallery("rate", genObjImgList(images(totalImages))));
});

randomBtn.addEventListener("click", () => {
  galleryContainer.innerHTML = "";
  createHTML(sortedGallery("random", genObjImgList(images(totalImages))));
});
