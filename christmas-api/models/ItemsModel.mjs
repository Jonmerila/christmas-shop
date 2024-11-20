//One way to get the data we need to send to the frontend

export class ItemsModel {
  constructor(id, title, posterImage, releaseDate) {
    this.id = id;
    this.title = title;
    this.posterImage = posterImage;
    this.releaseDate = releaseDate;
  }
}

export class DetailsModel extends ItemsModel {
  constructor(
    id,
    title,
    genres,
    episodes,
    runtime,
    releaseDate,
    backgroundImage
  ) {
    super(id, title, releaseDate);
    this.backgroundImage = backgroundImage;
    this.genres = genres;
    this.episodes = episodes;
    this.runtime = runtime;
  }
}
