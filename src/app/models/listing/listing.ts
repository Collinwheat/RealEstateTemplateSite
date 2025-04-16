export class Listing {

  id: number;
  name: string;
  price: number;
  imageSource: string;
  status: string;
  listingLink: string;

  constructor(
    id: number = 0,
    name: string = '',
    price: number = 0,
    imageSource: string = '',
    status: string = '',
    listingLink: string = ''
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.imageSource = imageSource;
    this.status = status;
    this.listingLink = listingLink;
  }
}
