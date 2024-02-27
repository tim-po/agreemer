export const kebabize = (str: string) => {
  return str
    .split('')
    .map((letter, index) => {
      if (index === 0) {
        return letter
      }
      return letter.toUpperCase() === letter &&
        !(!isNaN(+str[index - 1]) && !isNaN(+str[index]))
        ? `-${letter.toLowerCase()}`
        : letter
    })
    .join('')
}
