"use strict";
/*
The menu should have the following food:
#Soup
    Wonton Soup (Chicken).... $2.25
    Chicken Corn Soup.... $1.95
    Vegetable Corn Soup... $2.25
#Chef's Specials
    Orange Beef.... $8.95
    Kung Pao Shrimp.... $8.50
#Chicken
    Lemon Chicken.... $9.95
    Sesame Chicken.... $9.95
    Hunan Chicken.... $10.50
#Beef
    Pepper Steak.... $9.95
    Manchurian Beef... $11.95
#Beverages
    Piña Colada.... $3.00
    Spanish Coffee.... $5.50
*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
/*CLASS MENU:
Menu, this class would be the main class for the menu, it should have the following attributes
    soupMenu (Choice[])
    chefSpecialsMenu (Choice[])
    chickenMenu (Choice[])
    beefMenu (Choice[])
    beveragesMenu (Choice[])
    soupOptions (MenuElement[])
    chefSpecialsOptions (MenuElement[])
    chickenOptions (MenuElement[])
    beefOptions (MenuElement[])
    beveragesOptions (MenuElement[])
*/
const MenuElement_1 = require("./MenuElement");
const Input_1 = require("./Input");
class Menu {
    /*This class would have an empty constructor, so no arguments are passed to the creation of an instance of the menu.*/
    constructor() {
        this.mainMenu = [];
        this.soupMenu = [];
        this.chefSpecialsMenu = [];
        this.chickenMenu = [];
        this.beefMenu = [];
        this.beveragesMenu = [];
        this.soupOptions = [];
        this.chefSpecialsOptions = [];
        this.chickenOptions = [];
        this.beefOptions = [];
        this.beveragesOptions = [];
        this.fillMainMenu();
        this.fillOptions();
        this.fillSubMenus();
    }
    /*
    Method that you need in the Menu class, you need to define the following
        fillMainMenu
        fillOptions
        fillSubMenus
        showMainMenu
        showSubMenu
    */
    /*fillMainMenu: This method would not return anything, this would only fill the main options in the menu,
    remember that each option should be of type SelectChoice.*/
    fillMainMenu() {
        this.mainMenu = [
            { option: 1, message: 'Soup' },
            { option: 2, message: `Chef's Specials` },
            { option: 3, message: 'Chicken' },
            { option: 4, message: 'Beef' },
            { option: 5, message: 'Beverages' },
            { option: 6, message: 'Exit' },
        ];
    }
    /*fillOptions: This method would not return anything and would be the method in charge of add the different
    options for each sub menu, (fill the attributes of type Choice[]) with the correct information, so for example,
    for the soupOptions attribute, you should add 3 MenuElement instances (Wonton soup, Chicken Corn soup and Vegetable Corn soup).
    */
    fillOptions() {
        this.soupOptions = [
            new MenuElement_1.MenuElement('Wonton Soup (Chicken)', 2.25, '🍲'),
            new MenuElement_1.MenuElement('Chicken Corn Soup', 1.95, '🌽'),
            new MenuElement_1.MenuElement('Vegetable Corn Soup', 2.25, '🥕'),
        ];
        this.chefSpecialsOptions = [
            new MenuElement_1.MenuElement('Orange Beef', 8.95, '🍊'),
            new MenuElement_1.MenuElement('Kung Pao Shrimp', 8.5, '🦐'),
        ];
        this.chickenOptions = [
            new MenuElement_1.MenuElement('Lemon Chicken', 9.95, '🍋'),
            new MenuElement_1.MenuElement('Sesame Chicken', 9.95, '🐔'),
            new MenuElement_1.MenuElement('Hunan Chicken', 10.5, '🐣'),
        ];
        this.beefOptions = [
            new MenuElement_1.MenuElement('Pepper Steak', 9.95, '🫑'),
            new MenuElement_1.MenuElement('Manchurian Beef', 11.95, '🐄'),
        ];
        this.beveragesOptions = [
            new MenuElement_1.MenuElement('Piña Colada', 3.0, '🍍'),
            new MenuElement_1.MenuElement('Spanish Coffee', 5.5, '☕'),
        ];
    }
    fillSubMenus() {
        this.soupMenu = this.soupOptions.map((e) => ({
            name: e.id,
            message: e.printOption(),
        }));
        this.chefSpecialsMenu = this.chefSpecialsOptions.map((e) => ({
            name: e.id,
            message: e.printOption(),
        }));
        this.chickenMenu = this.chickenOptions.map((e) => ({
            name: e.id,
            message: e.printOption(),
        }));
        this.beefMenu = this.beefOptions.map((e) => ({
            name: e.id,
            message: e.printOption(),
        }));
        this.beveragesMenu = this.beveragesOptions.map((e) => ({
            name: e.id,
            message: e.printOption(),
        }));
    }
    showMainMenu() {
        return __awaiter(this, void 0, void 0, function* () {
            let option = -1;
            let input;
            while (option !== 6) {
                input = yield Input_1.Input.getSelect('Select a menu option', this.mainMenu);
                option = input.data;
                switch (option) {
                    case 1:
                        yield this.showSubMenuOption('Select your Soup', this.soupMenu, this.soupOptions);
                        break;
                    case 2:
                        yield this.showSubMenuOption(`Select your Chef's Specials`, this.chefSpecialsMenu, this.chefSpecialsOptions);
                        break;
                    case 3:
                        yield this.showSubMenuOption('Select your Chicken', this.chickenMenu, this.chickenOptions);
                        break;
                    case 4:
                        yield this.showSubMenuOption('Select your Beef', this.beefMenu, this.beefOptions);
                        break;
                    case 5:
                        yield this.showSubMenuOption('Select your Beverages', this.beveragesMenu, this.beveragesOptions);
                        break;
                    case 6:
                        console.log(`\n
              *******************************************************
              ===========================================
                    Enjoy your meal! 🙋🏻‍♂️
              ===========================================
              *******************************************************\n`);
                        break;
                }
            }
        });
    }
    showSubMenuOption(message, subMenu, subMenuOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            const input = yield Input_1.Input.getSelectById(message, subMenu);
            const option = subMenuOptions.find((e) => input.data === e.id);
            console.log(`\n
        ===============================================================
            Here is your: ${option === null || option === void 0 ? void 0 : option.emoji} at a $${option === null || option === void 0 ? void 0 : option.price} cost
        ===============================================================\n`);
        });
    }
}
exports.Menu = Menu;
