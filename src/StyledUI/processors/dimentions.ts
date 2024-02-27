import { CssFrom, MarginPaddingValue, WidthHeightValue } from '../TypedCss'
import { css } from 'styled-components'
import { Processor } from '../types'
import { FastUIDefaultTheme } from '../theme'
import { getSize, StandardSizes } from '../theme/types'

export type DimensionProps = StandardSizes & {
  overflow?: 'visible' | 'hidden' | 'auto' | 'scroll' | 'inherit'
  width?:
    | [
        value: WidthHeightValue,
        modifyers?: { max?: WidthHeightValue; min?: WidthHeightValue },
      ]
    | WidthHeightValue
  height?:
    | [
        value: WidthHeightValue,
        modifyers?: { max?: WidthHeightValue; min?: WidthHeightValue },
      ]
    | WidthHeightValue
  padding?: MarginPaddingValue
  margin?: MarginPaddingValue
  grow?: number
  shrink?: number
}

const dimensionProcessor: Processor<DimensionProps> = (props: DimensionProps) => {
  // eslint-disable-next-line prefer-const
  let { width, height, overflow, flush, padding, margin, shrink, grow } = props

  const size = getSize(props)
  if (size) {
    if (padding === undefined) {
      padding = FastUIDefaultTheme.spacings.Padding[size]
    }
    if (margin === undefined) {
      margin = FastUIDefaultTheme.spacings.Margin[size]
    }
    if (flush) {
      margin = 0
      padding = 0
    }
  }

  let maxWidth: WidthHeightValue | undefined = undefined
  let minWidth: WidthHeightValue | undefined = undefined

  let maxHeight: WidthHeightValue | undefined = undefined
  let minHeight: WidthHeightValue | undefined = undefined

  if (width !== undefined && width instanceof Array) {
    const [value, modifyers] = width
    width = value
    maxWidth = modifyers?.max
    minWidth = modifyers?.min
    console.log(maxWidth)
  }

  if (height !== undefined && height instanceof Array) {
    const [value, modifyers] = height
    height = value
    maxHeight = modifyers?.max
    minHeight = modifyers?.min
  }

  return css`
    ${width !== undefined ? css`width: ${CssFrom(width)};` : ''}
    ${maxWidth !== undefined ? css`max-width: ${CssFrom(maxWidth)};` : ''}
    ${minWidth !== undefined ? css`min-width: ${CssFrom(minWidth)};` : ''}

    ${height !== undefined ? css`height: ${CssFrom(height)};` : ''}
    ${maxHeight !== undefined ? css`max-height: ${CssFrom(maxHeight)};` : ''}
    ${minHeight !== undefined ? css`min-height: ${CssFrom(minHeight)};` : ''}

    ${padding !== undefined ? css`padding: ${CssFrom(padding)};` : ''}
    ${margin !== undefined ? css`margin: ${CssFrom(margin)};` : ''}
    ${grow !== undefined ? css`flex-grow: ${grow};` : ''}
    ${shrink !== undefined ? css`flex-shrink: ${shrink};` : ''}
    ${overflow ? css`overflow: ${overflow};` : ''}
  `
}

export default dimensionProcessor
