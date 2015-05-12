import I = require("./interfaces");

export class Renderer {
  static renderOptionElement(selectNode: HTMLSelectElement, elements: I.IOptionElement[]) {
    elements.forEach((element, index) => {
      var opt = document.createElement('option');
      opt.value = index.toString();
      opt.innerHTML = element.name;
      selectNode.appendChild(opt);
    });
  }
}
