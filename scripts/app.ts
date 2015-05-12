/// <reference path="typings/jquery.d.ts"/>

import $ = require("jquery");
import I = require("./interfaces");
import RendererModule = require("./renderer");
import Renderer = RendererModule.Renderer;
import GalleryModule = require("./gallery");
import Gallery = GalleryModule.Gallery;
import PainterModule = require("./painter");
import Painter = PainterModule.Painter;

/**
* Painters gallery app.
*/
export class App {
  private gallery: I.IGallery;
  private painters: I.IPainter[];

  constructor(image: HTMLImageElement, painters: I.IPainter[]) {
    this.gallery = new Gallery(image);
    this.painters = painters;
  }

  render() {
    var selectNode = <HTMLSelectElement>document.getElementById('paintersList');
    Renderer.renderOptionElement(selectNode, this.painters);
  }

  select(item: number) {
    console.log(item);
    this.gallery.paintings = this.painters[item].paintings;
    this.gallery.render();
  }
}

$(document).ready(() => {
  var source = 'JSON/famousPainters.json';
  var painters: I.IPainter[] = [];
  var app: App;
  $.getJSON(source, (data) => {
    var famousPainters: any[] = data.famousPainters;
    famousPainters.forEach((famousPainter) => {
      var painter = new Painter({
        name: famousPainter.name,
        style: famousPainter.style,
        birthDay: famousPainter.birthday,
        birthPlace: famousPainter.birthplace,
        paintings: famousPainter.examples
      });
      painters.push(painter);
    });

    var image = <HTMLImageElement>document.getElementById('paintingImg');
    app = new App(image, painters)
    app.render();
  });

  var paintersList = <HTMLSelectElement>document.getElementById('paintersList');
  paintersList.onchange = (e) => {
    app.select(+paintersList.value);
  };

  //var app = new App(source);

});
