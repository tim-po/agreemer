import { CssFrom, UnitValue } from '../TypedCss'
import { css } from 'styled-components'
import { Processor } from '../types'
import { getSize, StandardSizes } from '../theme/types'
import { FastUIDefaultTheme } from '../theme'

type Side = 'top' | 'left' | 'right' | 'bottom'

function RadiusCss(radius: UnitValue, sides?: boolean | Side | Side[]) {
  const cssFromRadius = CssFrom(radius)
  if (!sides) {
    if (radius) {
      return `${cssFromRadius}`
    }
    return undefined
  }
  if (sides === true) {
    return `${cssFromRadius}`
  }

  const cssUnits = ['0', '0', '0', '0']

  switch (Array.isArray(sides) ? sides.join('-') : sides) {
    case 'top':
      cssUnits[0] = cssFromRadius
      cssUnits[1] = cssFromRadius
      break
    case 'right':
      cssUnits[1] = cssFromRadius
      cssUnits[2] = cssFromRadius
      break
    case 'bottom':
      cssUnits[2] = cssFromRadius
      cssUnits[3] = cssFromRadius
      break
    case 'left':
      cssUnits[3] = cssFromRadius
      cssUnits[0] = cssFromRadius
      break
    case 'top-left':
      cssUnits[0] = cssFromRadius
      break
    case 'top-right':
      cssUnits[1] = cssFromRadius
      break
    case 'bottom-right':
      cssUnits[2] = cssFromRadius
      break
    case 'bottom-left':
      cssUnits[3] = cssFromRadius
      break
    default:
      break
  }

  return cssUnits.join(' ')
}

export type VisualisationProps = StandardSizes & {
  rounded?: boolean | Side | Side[]
  skeleton?: boolean
  borderRadius?: UnitValue
  border?: string
  opacity?: number
  background?: string
  boxShadow?: string
}

const skeletonFragment = css`
  position: relative;
  z-index: 9;
  border-radius: 4px;
  color: rgba(255, 255, 255, 0.01) !important;
  background-image: linear-gradient(-45deg, var(--skeleton-base-color) 0, var(--skeleton-base-color) 45%, var(--skeleton-shine-color) 50%, var(--skeleton-base-color) 55%, var(--skeleton-base-color) 100%) !important;
  content: "";
  animation: skeleton-shine 2s infinite;
  background-size: 400% 400% !important;
  backdrop-filter: blur(30px);
  border: none !important;
  pointer-events: none;
  //color: transparent !important;

  &::placeholder {
    opacity: 0;
  }

  &::before {
    opacity: 0;
  }

  &::after {
    opacity: 0;
  }

  div, span, img, video, p, source {
    opacity: 0;
  }


  @keyframes skeleton-shine {
    from {
      background-position: right;
    }

    to {
      background-position: left;
    }
  }


`

const visualisationProcessor: Processor<VisualisationProps> = (
  props: VisualisationProps,
) => {
  // eslint-disable-next-line prefer-const
  let { border, flush, skeleton, opacity, boxShadow, rounded, background, borderRadius } =
    props

  const size = getSize(props)
  if (size) {
    if (borderRadius === undefined) {
      borderRadius = FastUIDefaultTheme.roundness[size]
    }
    if (flush) {
      borderRadius = 0
    }
  }

  return css`
    ${border ? css`border: ${border};` : ''};
    ${background ? css`background: ${background};` : ''};
    ${boxShadow ? css`box-shadow: ${boxShadow};` : ''};
    ${opacity !== undefined ? css`opacity: ${opacity};` : ''};
    ${skeleton ? skeletonFragment : ''}
    ${
      borderRadius !== undefined
        ? css`border-radius: ${RadiusCss(borderRadius, rounded)};`
        : ''
    };
  `
}

export default visualisationProcessor
