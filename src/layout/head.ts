export default ((): void => {

  const tag = (type: string, content: Object): void => {
    const el = document.createElement(type)

    Object.keys(content).forEach(key => {
      const value = content[key]

      el.setAttribute(key, value)
    })

    document.head.appendChild(el)
  }


  /**
   * TAGS
   */
  tag('meta', {
    name: 'description',
    content: 'this is the content.',
  })

  tag('meta', {
    name: 'generator',
    content: 'me.'
  })

})()
