import { Tile } from './Tile';
export class Main {
  start() {
    const A = new Tile('A', 10);
    A.printTile(); // Example of a reader-friendly format above
    /*
      ==================
        Letter: A
        Value: 10
      ==================
    */
    const W = new Tile('W', '50'); // This should show and error
  }
}
