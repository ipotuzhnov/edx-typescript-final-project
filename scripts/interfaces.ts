export interface IOptionElement {
  name: string;
}

export interface IPainting {
  name: string;
  src: string;
}

export interface IPerson {
  name: string;
  birthDay: string;
  birthPlace: string;
}

export interface IPainter extends IPerson {
  style: string;
  paintings: IPainting[];
}

export interface IGallery {
  paintings;
  render(item?: number);
  renderPrev();
  renderNext();
}
