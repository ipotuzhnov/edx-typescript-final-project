import I = require("./interfaces");

export class Painter implements I.IPainter {
  name: string;
  birthDay: string;
  birthPlace: string;
  style: string;
  paintings: I.IPainting[];

  constructor(obj: I.IPainter) {
    this.name = obj.name;
    this.birthDay = obj.birthDay;
    this.birthPlace = obj.birthPlace;
    this.style = obj.style;
    this.paintings = obj.paintings;
  }
}
