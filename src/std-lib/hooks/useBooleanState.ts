import {Dispatch, SetStateAction, useState} from 'react'

export function useBooleanState(
  defaultValue: boolean,
): [boolean, Dispatch<SetStateAction<boolean>>, () => void] {
  const [state, setState] = useState(defaultValue)

  function switchState() {
    setState(!state)
  }

  return [state, setState, switchState]
}
