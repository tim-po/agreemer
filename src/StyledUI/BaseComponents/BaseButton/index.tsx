import styled, { css } from 'styled-components'
import adaptive, { Adaptive } from '../../higherLevelProcessors/adaptive'
import hoverable, { Hoverable } from '../../higherLevelProcessors/hover'
import rectangleProcessor, { RectangleProps } from '../../processors/rectangle'
import { typographyProcessor, TypographyProps } from '../../processors/typography'
import fragmentProcessor, { FragmentProps } from '../../processors/fragment'
import combine from '../../higherLevelProcessors/combine'
import { ReactNode } from 'react'

export type ButtonProps = {
  children?: ReactNode | ReactNode[]
  disabled?: boolean
} & RectangleProps &
  TypographyProps &
  FragmentProps

const buttonProcessor = (props: ButtonProps) => {
  return css`
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s;
    ${rectangleProcessor(props)}
    ${typographyProcessor(props)}
  `
}

const BaseButton = styled.button.attrs(props => ({
  // @ts-ignore
  as: props.link ? 'a' : 'button',
}))<Adaptive<Hoverable<ButtonProps>>>`
  ${props =>
    adaptive(hoverable(combine<ButtonProps>([buttonProcessor, fragmentProcessor])))(
      props,
    )}
`

export default BaseButton
