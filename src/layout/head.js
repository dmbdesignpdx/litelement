/**
 * Creates head elements
 * @param {Object[]} tags - array of objects
 * @returns {undefined} 
 */
export const Head = (tags) => {

  tags.forEach(tag => {
    const el = document.createElement(tag.type)

    Object.keys(tag).forEach(key => {
      if (key !== `type`) {
        let value = tag[key]

        if (value) el.setAttribute(key, value)
      }
    })

    document.head.appendChild(el)
  })
}
