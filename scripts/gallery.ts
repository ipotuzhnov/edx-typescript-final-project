import I = require("./interfaces");
export class Gallery implements I.IGallery {
  private items: I.IPainting[] = [];
  private current = 0;

  private elements: I.IGalleyElements;

  constructor(elements: I.IGalleyElements) {
    this.elements = elements;

    // Attach event listeners

    var prevBtnEl = this.elements.prevBtnEl;
    prevBtnEl.onclick = () => {
      this.renderPrev();
    }

    var nextBtnEl = this.elements.nextBtnEl;
    nextBtnEl.onclick = () => {
      this.renderNext();
    }
  }

  set paintings(items: I.IPainting[]) {
    this.items = items;
  }

  render(item: number = 0) {
    if (item < 0 || item >= this.items.length) {
      return;
    }

    this.current = item;

    var nameEl = this.elements.nameEl;
    var imageEl = this.elements.imageEl;
    var painting = this.items[item];
    nameEl.innerHTML = painting.name;
    imageEl.src = painting.src;
    imageEl.alt = painting.name;
    imageEl.title = painting.name;
  }

  renderPrev() {
    this.render(this.current - 1);
  }

  renderNext() {
    this.render(this.current + 1);
  }
}
