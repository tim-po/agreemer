import { MaterialConfig, materialFragments, strokeMaterials } from './materials'
import {
  ColorScheme,
  SizeModifier,
  SpacingType,
  TypographyStandardElements,
} from './types'
import { darken, hasBadContrast, lighten } from 'color2k'

const defaultSpacings: Record<SpacingType, Record<SizeModifier, number>> &
  Record<SizeModifier, number> = {
  Margin: {
    tiny: 2,
    small: 8,
    medium: 16,
    big: 32,
    huge: 64,
  },
  Padding: {
    tiny: 2,
    small: 8,
    medium: 12,
    big: 24,
    huge: 48,
  },
  tiny: 2,
  small: 8,
  medium: 24,
  big: 64,
  huge: 128,
}

const defaultRoundness: Record<SizeModifier, number> = {
  tiny: 2,
  small: 8,
  medium: 10,
  big: 20,
  huge: 40,
}

const defaultFontSizes: Record<TypographyStandardElements, Record<SizeModifier, number>> &
  Record<SizeModifier, number> = {
  Body: {
    tiny: 6,
    small: 12,
    medium: 16,
    big: 20,
    huge: 24,
  },
  Heading: {
    tiny: 18,
    small: 24,
    medium: 32,
    big: 40,
    huge: 60,
  },
  Label: {
    tiny: 12,
    small: 16,
    medium: 18,
    big: 20,
    huge: 24,
  },
  tiny: 12,
  small: 16,
  medium: 24,
  big: 64,
  huge: 128,
}

const primaryColorRgb = 'rgba(12, 193, 139, 1)'
const primaryColorContrastOnWhite = hasBadContrast(
  'rgba(127, 127, 127, 0.40)',
  'aaa',
  primaryColorRgb,
)
const primaryColorContrastOnBlack = hasBadContrast(
  'rgba(194, 194, 194, 0.35)',
  'aaa',
  primaryColorRgb,
)

const defaultColors: Record<'dark' | 'light', Record<'primary' | string, string>> = {
  dark: {
    primary: primaryColorContrastOnBlack
      ? primaryColorRgb
      : lighten(primaryColorRgb, 0.2),
  },
  light: {
    primary: primaryColorContrastOnWhite ? primaryColorRgb : darken(primaryColorRgb, 0.1),
  },
}

export type FastThemeType = {
  spacings: Record<SpacingType, Record<SizeModifier, number>> &
    Record<SizeModifier, number>
  typography: Record<TypographyStandardElements, Record<SizeModifier, number>> &
    Record<SizeModifier, number>
  roundness: Record<SizeModifier, number>
  colors: Record<'dark' | 'light', Record<'primary', string>>
  materialFragments: Record<ColorScheme, MaterialConfig>
  strokeMaterials: Record<ColorScheme, string>
}

export const FastUIDefaultTheme: FastThemeType = {
  spacings: defaultSpacings,
  roundness: defaultRoundness,
  typography: defaultFontSizes,
  colors: defaultColors,

  materialFragments: materialFragments,
  strokeMaterials: strokeMaterials,
}
