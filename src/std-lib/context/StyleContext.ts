import { createContext, Dispatch } from 'react'
import { primaryThemeFragment, ThemeFragment } from '../stylesheets/StyledVars/newVars'

export const StyleContext = createContext<{
  themeFragment: ThemeFragment
  setThemeFragment: Dispatch<React.SetStateAction<ThemeFragment>>
}>({ themeFragment: primaryThemeFragment, setThemeFragment: () => null })
