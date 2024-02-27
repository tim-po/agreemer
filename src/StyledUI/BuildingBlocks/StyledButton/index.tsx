import styled, {
  css,
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps,
} from 'styled-components'
import BaseButton, { ButtonProps } from '../../BaseComponents/BaseButton'
import { Processor } from '../../types'
import { lighten, opacify } from 'color2k'
import { getColorScheme } from '../../higherLevelProcessors/colorScheme'

type StyledButtonProps = {
  primary?: boolean
  secondary?: boolean
  disabled?: boolean
} & ButtonProps

const buttonFragment = css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  color: white;
  min-width: 150px;
  border-radius: 50px;
  cursor: pointer;
  height: 45px;
  outline: none !important;
  border: none;
  transition: all .2s;
  font-weight: 700;
`

const buttonPrimaryFragment: FlattenInterpolation<ThemeProps<DefaultTheme>> = css`
  ${({ theme }) => {
    const themeForColorScheme = getColorScheme(theme.colors)
    if (!themeForColorScheme) {
      return ''
    }
    return css`
      background: ${themeForColorScheme.primary};
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

      &:hover {
        box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.25);
        background: ${lighten(themeForColorScheme.primary, 0.1)};
      }
    `
  }};
`

const buttonSecondaryFragment = css`
  ${({ theme }) => {
    const colors = getColorScheme(theme.colors)
    if (!colors) {
      return ''
    }
    return css`
      border: 2px solid ${colors.primary};
      color: ${colors.primary};
      background: ${opacify(colors.primary, -0.6)};

      &:hover {
        color: ${lighten(colors.primary, 0.2)};
        border: 2px solid ${lighten(colors.primary, 0.2)}
      }
    `
  }};
`

const styledButtonProcessor: Processor<StyledButtonProps> = (
  props: StyledButtonProps,
) => {
  return css`
    ${buttonFragment};
    ${props.primary ? buttonPrimaryFragment : ''};
    ${props.secondary ? buttonSecondaryFragment : ''};
  `
}

const StyledButton = styled(BaseButton)<StyledButtonProps>`
  ${props => styledButtonProcessor(props)}
`

StyledButton.defaultProps = {
  small: true,
}

export default StyledButton
