function toCamelCase(str = '') {
  let splittedString = str.split(/_|-/)
  return (
    splittedString[0] +
    splittedString
      .slice(1)
      .map((word) => `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`)
      .join('')
  )
}
