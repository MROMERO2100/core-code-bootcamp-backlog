"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HorrorMovie = void 0;
const Movie_1 = require("./Movie");
class HorrorMovie extends Movie_1.Movie {
    constructor(name, saga, director, language, running_time, year, jump_scares_count, ghost, visions) {
        super(name, saga, director, language, running_time, year);
        this.jump_scares_count = jump_scares_count;
        this.ghosts = ghost;
        this.visions = visions;
    }
    incrementJumpscares() {
        this.jump_scares_count += 1;
    }
    expectGhosts() {
        if (this.ghosts)
            return '👻';
        return '🙅🏻‍♂️';
    }
    expectVisions() {
        if (this.visions)
            return '🔮';
        return '🙅🏻‍♂️';
    }
    printHorrorMovie() {
        console.log(`
    -- <<<</////>>>>----------------------------<<<</////>>>>
      Name: ${this.name}
      Year: ${this.year}
      Saga: ${this.saga}
      Director: ${this.director}
      Language: ${this.language}
      Running Time: ${this.running_time}
      Jump Scares Count: ${this.jump_scares_count}
      Ghosts: ${this.expectGhosts()}
      Visions: ${this.expectVisions()}
      -- <<<</////>>>>----------------------------<<<</////>>>>
    `);
    }
}
exports.HorrorMovie = HorrorMovie;
