import { css, FlattenSimpleInterpolation } from 'styled-components'
import { ColorScheme, OrderModifier } from './types'

export type MaterialPart = 'background' | 'fill' | 'text' | 'separator'
type ThicknessModifier = 'opaque' | 'thick' | 'regular' | 'thin' | 'ultraThin'
export type MaterialConfig = {
  separator: FlattenSimpleInterpolation
  fill: Record<OrderModifier, FlattenSimpleInterpolation>
  text: Record<OrderModifier, FlattenSimpleInterpolation>
  background: Record<ThicknessModifier, FlattenSimpleInterpolation>
}

export type ThicknessProps = {
  defaultMaterialThickness?: ThicknessModifier
  opaqueMaterial?: boolean
  thickMaterial?: boolean
  regularMaterial?: boolean
  thinMaterial?: boolean
  ultraThinMaterial?: boolean
}

export const getThickness = (props: ThicknessProps) => {
  if (props.opaqueMaterial) {
    return 'opaque'
  }
  if (props.thickMaterial) {
    return 'thick'
  }
  if (props.regularMaterial) {
    return 'regular'
  }
  if (props.thinMaterial) {
    return 'thin'
  }
  if (props.ultraThinMaterial) {
    return 'ultraThin'
  }
  if (props.defaultMaterialThickness) {
    return props.defaultMaterialThickness
  }
  return undefined
}

const fillAndTextMaterialFragments = {
  dark: {
    fill: {
      primary: css`
        background: linear-gradient(0deg, #C2C2C2 0%, #C2C2C2 100%), rgba(127, 127, 127, 0.50);
        background-blend-mode: overlay, luminosity;
        backdrop-filter: blur(25px);
      `,
      secondary: css`
        background: linear-gradient(0deg, rgba(194, 194, 194, 0.50) 0%, rgba(194, 194, 194, 0.50) 100%), rgba(127, 127, 127, 0.40);
        background-blend-mode: overlay, luminosity;
        backdrop-filter: blur(25px);
      `,
      tertiary: css`
        background: linear-gradient(0deg, rgba(194, 194, 194, 0.50) 0%, rgba(194, 194, 194, 0.50) 100%), rgba(127, 127, 127, 0.20);
        background-blend-mode: overlay, luminosity;
        backdrop-filter: blur(25px);
      `,
      quarternary: css`
        background: linear-gradient(0deg, rgba(194, 194, 194, 0.50) 0%, rgba(194, 194, 194, 0.50) 100%), rgba(127, 127, 127, 0.20);
        background-blend-mode: overlay, luminosity;
        backdrop-filter: blur(25px);
      `,
    },
    text: {
      primary: css`
        color: #FFF;
      `,
      secondary: css`
        color: rgba(194, 194, 194, 0.70);
      `,
      tertiary: css`
        color: rgba(194, 194, 194, 0.35);
      `,
      quarternary: css`
        color: rgba(194, 194, 194, 0.22);
      `,
    },
  },
  light: {
    fill: {
      primary: css`
        background: linear-gradient(0deg, #3D3D3D 0%, #3D3D3D 100%), rgba(127, 127, 127, 0.50);
        background-blend-mode: overlay, luminosity;
        backdrop-filter: blur(0px);
      `,
      secondary: css`
        background: linear-gradient(0deg, rgba(61, 61, 61, 0.50) 0%, rgba(61, 61, 61, 0.50) 100%), rgba(127, 127, 127, 0.40);
        background-blend-mode: overlay, luminosity;
        backdrop-filter: blur(0px);
      `,
      tertiary: css`
        background: linear-gradient(0deg, rgba(61, 61, 61, 0.50) 0%, rgba(61, 61, 61, 0.50) 100%), rgba(127, 127, 127, 0.20);
        background-blend-mode: overlay, luminosity;
        backdrop-filter: blur(0px);
      `,
      quarternary: css`
        background: linear-gradient(0deg, rgba(61, 61, 61, 0.50) 0%, rgba(61, 61, 61, 0.50) 100%), rgba(127, 127, 127, 0.20);
        background-blend-mode: overlay, luminosity;
        backdrop-filter: blur(0px);
      `,
    },
    text: {
      primary: css`
        color: #000;
      `,
      secondary: css`
        color: rgba(61, 61, 61, 0.50);
      `,
      tertiary: css`
        color: rgba(61, 61, 61, 0.35);
      `,
      quarternary: css`
        color: rgba(61, 61, 61, 0.20);
      `,
    },
  },
}

export const strokeMaterials = {
  dark: '#999',
  light:
    'linear-gradient(0deg, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.15) 100%), rgba(128, 128, 128, 0.30)',
}

export const materialFragments: Record<ColorScheme, MaterialConfig> = {
  dark: {
    separator: css`
      background: ${strokeMaterials.light};
      background-blend-mode: hard-light, overlay;
      backdrop-filter: blur(0px);
    `,
    fill: fillAndTextMaterialFragments.light.fill,
    text: fillAndTextMaterialFragments.light.text,
    background: {
      opaque: css`
        background: rgb(0, 0, 0);
      `,
      thick: css`
        background-color: rgba(37, 37, 37, 0.9);
        background-image: linear-gradient(0deg, rgba(156, 156, 156, 0.25) 0%, rgba(156, 156, 156, 0.25) 100%);
        background-blend-mode: overlay;
        backdrop-filter: blur(25px);`,
      regular: css`
        background-color: rgba(37, 37, 37, 0.82);
        background-image: linear-gradient(0deg, rgba(156, 156, 156, 0.2) 0%, rgba(156, 156, 156, 0.2) 100%);
        background-blend-mode: overlay;
        backdrop-filter: blur(25px);
      `,
      thin: css`
        background-color: rgba(37, 37, 37, 0.70);
        background-image: linear-gradient(0deg, rgba(156, 156, 156, 0.2) 0%, rgba(156, 156, 156, 0.2) 100%);
        background-blend-mode: overlay;
        backdrop-filter: blur(25px);
      `,
      ultraThin: css`
        background-color: rgba(37, 37, 37, 0.55);
        background-image: linear-gradient(0deg, rgba(156, 156, 156, 0.2) 0%, rgba(156, 156, 156, 0.2) 100%);
        background-blend-mode: overlay;

        backdrop-filter: blur(14px);
      `,
    },
  },
  light: {
    separator: css`
      background: ${strokeMaterials.light};
      background-blend-mode: luminosity, color-burn;
      backdrop-filter: blur(0px);
    `,
    fill: fillAndTextMaterialFragments.light.fill,
    text: fillAndTextMaterialFragments.light.text,
    background: {
      opaque: css`
        background: rgb(255, 255, 255);
      `,
      thick: css`
        background: rgba(153, 153, 153, 0.97);
        background-blend-mode: color-dodge, normal;
        backdrop-filter: blur(25px);
      `,
      regular: css`
        background: rgba(179, 179, 179, 0.82);
        background-blend-mode: color-dodge, normal;
        backdrop-filter: blur(25px);
      `,
      thin: css`
        background: rgba(166, 166, 166, 0.70);
        background-blend-mode: color-dodge, normal;
        backdrop-filter: blur(25px);`,
      ultraThin: css`
        background: rgba(191, 191, 191, 0.44);
        background-blend-mode: color-dodge, normal;
        backdrop-filter: blur(25px);
      `,
    },
  },
}
