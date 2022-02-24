"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuElement = void 0;
const uuid_1 = require("uuid");
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
class MenuElement {
    /*pass the name, price, and an emoji*/
    constructor(name, price, emoji) {
        this.name = name;
        this.price = price;
        this.emoji = emoji;
        this.id = uuid_1.v4();
    }
    printOption() {
        return `${this.name}....$${this.price}`;
    }
}
exports.MenuElement = MenuElement;
