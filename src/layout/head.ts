interface Props {
  readonly type: string;
  [key: string]: any;
}

export const Head:
Function = (tags: Array<Props>): void => {

  tags.forEach((tag): void => {
    const el: HTMLElement = document.createElement(tag.type);

    Object.keys(tag).forEach((key): void => {
      if (key !== `type`) {
        let value: string = tag[key];

        if (value) el.setAttribute(key, value);
      }
    });

    document.head.appendChild(el);
  })
}
