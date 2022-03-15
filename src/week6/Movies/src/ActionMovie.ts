import { Movie } from './Movie';

export class ActionMovie extends Movie {
  explosions_count: number;
  guns: boolean;
  martial_arts: boolean;

  constructor(
    name: string,
    saga: string,
    director: string,
    language: string,
    running_time: number,
    year: number,
    explosions_count: number,
    guns: boolean,
    martial_arts: boolean
  ) {
    super(name, director, language, running_time, year);
    this.explosions_count = explosions_count;
    this.guns = guns;
    this.martial_arts = martial_arts;
  }

  incrementExplosions() {
    this.explosions_count += 1;
  }

  expectGuns(): string {
    if (this.guns) return '🔫';
    return '🙅🏻‍♂️';
  }

  expectMartialArts(): string {
    if (this.martial_arts) return '🥷🏻';
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