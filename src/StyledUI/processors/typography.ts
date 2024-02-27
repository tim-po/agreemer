import { css } from 'styled-components'
import { CssFrom, UnitValue } from '../TypedCss'
import { Processor } from '../types'
import { getSize, StandardSizes } from '../theme/types'
import { FastUIDefaultTheme } from '../theme'
import materialProcessor, { MaterialProps } from './material'

type FontWeight = number | 'bold' | 'bolder' | 'lighter' | 'normal'

export type TypographyProps = StandardSizes &
  MaterialProps & {
    body?: boolean
    heading?: boolean
    label?: boolean
    size?: UnitValue
    color?: string
    bold?: boolean
    align?: 'left' | 'center' | 'right'
    weight?: FontWeight
    lineHeight?: number
    font?: string
  }

function getTextType(props: TypographyProps) {
  if (props.body) return 'Body'
  if (props.heading) return 'Heading'
  if (props.label) return 'Label'
  return undefined
}

export const typographyProcessor: Processor<TypographyProps> = (
  props: TypographyProps,
) => {
  let fontSize = props.size

  const size = getSize(props)
  const textType = getTextType(props)
  if (size) {
    if (textType) {
      if (fontSize === undefined) {
        fontSize = FastUIDefaultTheme.typography[textType][size]
      }
    } else {
      if (fontSize === undefined) {
        fontSize = FastUIDefaultTheme.typography[size]
      }
    }
  } else if (textType) {
    if (fontSize === undefined) {
      fontSize = FastUIDefaultTheme.typography[textType].medium
    }
  }

  return css`
    ${materialProcessor({ materialPart: 'text' })}
    ${fontSize !== undefined ? css` font-size: ${CssFrom(fontSize)};` : ''}
    ${props.color ? css` color: ${props.color};` : ''}
    ${props.align ? css` text-align: ${props.align};` : ''}
    ${
      props.weight || props.bold
        ? css` font-weight: ${props.bold ? 'bold' : props.weight};`
        : ''
    }
    ${
      props.lineHeight !== undefined
        ? css` line-height: ${CssFrom(props.lineHeight)};`
        : ''
    }
    ${props.font ? css` font-family: ${props.font};` : ''}

  `
}
