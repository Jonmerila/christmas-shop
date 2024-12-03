//One way to get the data we need to send to the frontend

export class ItemsModel {
  constructor(
    id,
    name,
    type,
    description,
    imageUrl,
    price,
    dimensions,
    diameter,
    height,
    length,
    quantity
  ) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.description = description;
    this.imageUrl = imageUrl;
    this.price = price;
    this.dimensions = dimensions;
    this.diameter = diameter;
    this.height = height;
    this.length = length;
    this.quantity = quantity;
  }
}
// id: string,
// name: string,
// type: string;
// description: string;
// imageUrl: string;
// price: number;
// dimensions?: string;
// diameter?:string;
// height?: string;
// length?: string;
// quantity?:number;

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
    super(id, title);
  }
}
