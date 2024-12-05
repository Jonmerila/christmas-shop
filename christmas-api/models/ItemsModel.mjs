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
    quantity,
    length
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
    this.quantity = quantity;
    this.length = length;
  }
}
