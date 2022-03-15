"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionMovie = void 0;
const Movie_1 = require("./Movie");
class ActionMovie extends Movie_1.Movie {
    constructor(name, saga, director, language, running_time, year, explosions_count, guns, martial_arts) {
        super(name, director, language, running_time, year);
        this.explosions_count = explosions_count;
        this.guns = guns;
        this.martial_arts = martial_arts;
    }
    incrementExplosions() {
        this.explosions_count += 1;
    }
    expectGuns() {
        if (this.guns)
            return '🔫';
        return '🙅🏻‍♂️';
    }
    expectMartialArts() {
        if (this.martial_arts)
            return '🥷🏻';
        return '🙅🏻‍♂️';
    }
    printActionMovie() {
        console.log(`
    -- <<<</////>>>>----------------------------<<<</////>>>>
      Name: ${this.name}
      Year: ${this.year}
      Director: ${this.director}
      Language: ${this.language}
      Running Time: ${this.running_time}
      Jump Scares Count: ${this.explosions_count}
      Guns: ${this.expectGuns()}
      Martial Arts: ${this.expectMartialArts()}
    -- <<<</////>>>>----------------------------<<<</////>>>>
    `);
    }
}
exports.ActionMovie = ActionMovie;
