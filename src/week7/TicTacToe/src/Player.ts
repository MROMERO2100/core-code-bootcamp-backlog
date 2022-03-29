export class Player {
    get name() {
      return this.nikname;
    }
  
    set name(name: string) {
      this.nikname = name;
    }
    constructor(private nikname: string) {}
  }