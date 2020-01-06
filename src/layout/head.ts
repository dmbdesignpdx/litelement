interface Tag {
  type: string,
  [prop: string]: any,
}

export const Head = (tags: Array<Tag>): void => {

  tags.forEach(tag => {
    const el: HTMLElement = document.createElement(tag.type)

    Object.keys(tag).forEach(key => {
      if (key !== `type`) {
        let value = tag[key]

        if (value) {
          value = ""
          el.setAttribute(key, value)
        }
      }
    })

    document.head.appendChild(el)
  })
}
