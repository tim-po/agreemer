export enum LocalStorageInteraction {
  save,
  load,
}

export const withLocalStorage = (
  objectToInteractWith: { [key: string]: any },
  actionToDo: LocalStorageInteraction,
) => {
  const returnObject: { [key: string]: any } = {}
  switch (actionToDo) {
    case LocalStorageInteraction.save:
      Object.keys(objectToInteractWith).forEach(key => {
        localStorage.setItem(key, JSON.stringify(objectToInteractWith[key]))
      })
      break
    case LocalStorageInteraction.load:
      Object.keys(objectToInteractWith).forEach(key => {
        const item = localStorage.getItem(key)
        if (item && item !== 'undefined') {
          returnObject[key] = JSON.parse(item)
        } else {
          returnObject[key] = objectToInteractWith[key]
        }
      })
      break
  }
  return returnObject
}
