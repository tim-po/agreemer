import { FastThemeType } from './StyledUI/theme'

declare module 'styled-components' {
  // eslint-disable-next-line
  export interface DefaultTheme extends FastThemeType {}
}
