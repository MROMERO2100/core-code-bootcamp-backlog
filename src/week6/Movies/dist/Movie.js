"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movie = void 0;
const uuid_1 = require("uuid");
class Movie {
    constructor(name, saga, director, language, running_time, year) {
        this.id = '';
        this.name = name;
        this.saga = saga;
        this.director = director;
        this.language = language;
        this.running_time = running_time;
        this.year = year;
        this.id = (0, uuid_1.v4)();
    }
}
exports.Movie = Movie;
