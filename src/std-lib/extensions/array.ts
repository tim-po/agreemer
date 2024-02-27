export const makeEmptyArray = (length: number) => {
  const array = []
  for (let i = 0; i < length; i++) {
    array.push(1)
  }
  return array
}
