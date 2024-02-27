import { CssFrom, UnitValue } from '../TypedCss'
import { css } from 'styled-components'
import { Processor } from '../types'
import { getSize, StandardSizes } from '../theme/types'
import { FastUIDefaultTheme } from '../theme'

export type FlexProps = StandardSizes & {
  row?: boolean
  column?: boolean
  reverse?: boolean
  wrap?: boolean
  nowrap?: boolean
  centered?: boolean
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'stretch'
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'
  gap?: UnitValue
}

const flexProcessor: Processor<FlexProps> = (props: FlexProps) => {
  let gap = props.gap
  const { wrap, nowrap, centered, alignItems, justifyContent, row, reverse, column } =
    props

  const size = getSize(props)
  if (size) {
    if (gap === undefined) {
      gap = FastUIDefaultTheme.spacings[size]
    }
  }

  return css`
    ${row ? css`flex-direction: row;` : ''}
    ${column ? css`flex-direction: column;` : ''}
    ${reverse && row ? css`flex-direction: row-reverse;` : ''}
    ${reverse && column ? css`flex-direction: column-reverse;` : ''}

    ${wrap ? css`flex-wrap: wrap;` : ''};
    ${nowrap ? css`flex-wrap: nowrap;` : ''}

    ${
      centered
        ? css`
              justify-content: center;
              align-items: center;
            `
        : ''
    }
    ${justifyContent ? css`justify-content: ${justifyContent};` : ''}
    ${alignItems ? css`align-items: ${alignItems};` : ''}

    ${gap !== undefined ? css`gap: ${CssFrom(gap)};` : ''}
    display: flex;
  `
}

export default flexProcessor
