class Image {
  constructor(name, views, stars){
    this.name = name;
    this.views = views;
    this.stars = stars;
  }
}


const nana = new Image("media", 1832, 8);

console.log(nana.views + 1);
