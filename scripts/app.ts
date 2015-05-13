/// <reference path="typings/jquery.d.ts"/>

import $ = require("jquery");
import I = require("./interfaces");
import GalleryModule = require("./gallery");
import Gallery = GalleryModule.Gallery;

/**
 * Painters gallery app.
 */
export class App {
  private gallery: I.IGallery;
  private painters: I.IPainter[];

  private elements: I.IAppElements;

  constructor(elements: I.IAppElements) {
    this.elements = elements;
    this.gallery = new Gallery(elements);
    this.painters = [];

    // Attach event listeners

    var paintersEl = this.elements.paintersEl;
    paintersEl.onchange = () => {
      this.show(+elements.paintersEl.value);
    };
  }

  loadData(source: string) {
    $.getJSON(source, (data) => {
      var famousPainters: any[] = data.famousPainters;
      famousPainters.forEach((famousPainter) => {
        var painter = <I.IPainter>({
          name: famousPainter.name,
          style: famousPainter.style,
          birthday: famousPainter.birthday,
          birthplace: famousPainter.birthplace,
          paintings: famousPainter.examples
        });

        this.painters.push(painter);
      });

      this.render();
    });
  }

  private render() {
    var paintersEl = this.elements.paintersEl;
    this.painters.forEach((element, index) => {
      var opt = document.createElement('option');
      opt.value = index.toString();
      opt.innerHTML = element.name;
      paintersEl.appendChild(opt);
    });
  }

  private show(item: number) {
    var painter = this.painters[item];

    this.elements.styleEl.innerHTML = painter.style;
    this.elements.birthdayEl.innerHTML = painter.birthday;
    this.elements.birthplaceEl.innerHTML = painter.birthplace;

    this.gallery.paintings = painter.paintings;
    this.gallery.render();
  }
}

$(document).ready(() => {
  var elements = <I.IAppElements>{
    // app elements
    paintersEl  : document.getElementById('paintersList'),
    styleEl     : document.getElementById('painterStyle'),
    birthdayEl  : document.getElementById('painterBirthday'),
    birthplaceEl: document.getElementById('painterBirthplace'),
    // gallery elements
    nameEl      : document.getElementById('galleryName'),
    imageEl     : document.getElementById('galleryImg'),
    prevBtnEl   : document.getElementById('galleryPrev'),
    nextBtnEl   : document.getElementById('galleryNext')
  };

  var app = new App(elements);

  var source = 'JSON/famousPainters.json';
  app.loadData(source);
});
