import { v4 as uuidv4 } from 'uuid';
/*
CLASS MenuElement Attributes:(
    id (string)
    name (string)
    price (number)
    emoji (string)
)

Methods
    printOption
*/
export class MenuElement {
  id: string;
  name: string;
  price: number;
  emoji: string;

  /*pass the name, price, and an emoji*/
  constructor(name: string, price: number, emoji: string) {
    this.name = name;
    this.price = price;
    this.emoji = emoji;
    this.id = uuidv4();
  }

  printOption() {
    return `${this.name}....$${this.price}`;
  }
}