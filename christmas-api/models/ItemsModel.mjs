//One way to get the data we need to send to the frontend

export class ItemsModel {
  constructor(id, name, type, diameter, imageUrl, price, description) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.diameter = diameter;
    this.imageUrl = imageUrl;
    this.price = price;
    this.description = description;
  }
}

// export class DetailsModel extends ItemsModel {
//   constructor(
//     id,
//     title,
//     genres,
//     episodes,
//     runtime,
//     releaseDate,
//     backgroundImage
//   ) {
//     super(id, title, releaseDate);
//     this.backgroundImage = backgroundImage;
//     this.genres = genres;
//     this.episodes = episodes;
//     this.runtime = runtime;
//   }
// }
