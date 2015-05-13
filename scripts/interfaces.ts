export interface IPainting {
  name: string;
  src: string;
}

export interface IPerson {
  name: string;
  birthday: string;
  birthplace: string;
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

export interface IGalleyElements {
  nameEl      : HTMLHeadingElement;
  imageEl     : HTMLImageElement;
  prevBtnEl   : HTMLButtonElement;
  nextBtnEl   : HTMLButtonElement;
}

export interface IAppElements extends IGalleyElements {
  paintersEl  : HTMLSelectElement;
  styleEl     : HTMLDivElement;
  birthdayEl  : HTMLDivElement;
  birthplaceEl: HTMLDivElement;
}
