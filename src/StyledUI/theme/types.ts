import { UnitValue } from '../TypedCss'

export type SizeModifier = 'tiny' | 'small' | 'medium' | 'big' | 'huge'

export type SpacingType = 'Margin' | 'Padding'

export type ColorScheme = 'dark' | 'light'

export type FastFont = {
  fontFamily: string
  fontWeight: number
  fontSize: UnitValue
  renderedAs: string
}

export type TypographyStandardElements = 'Heading' | 'Body' | 'Label'

export type TypographyVariant<CustomElements extends string> =
  `${TypographyStandardElements}${CustomElements}`

export type Typographic<CustomElements extends string = ''> = Record<
  TypographyVariant<CustomElements>,
  FastFont
>

export type RoundnessVariants = Record<SizeModifier, UnitValue>

export type OrderModifier = 'primary' | 'secondary' | 'tertiary' | 'quarternary'

export const OrderModifiersAsArray: OrderModifier[] = [
  'primary',
  'secondary',
  'tertiary',
  'quarternary',
]

export interface StandardOrder {
  defaultOrder?: OrderModifier
  primary?: boolean
  secondary?: boolean
  tertiary?: boolean
  quarternary?: boolean
}

export const getOrder = (props: StandardOrder) => {
  if (props.primary) {
    return 'primary'
  }
  if (props.secondary) {
    return 'secondary'
  }
  if (props.tertiary) {
    return 'tertiary'
  }
  if (props.quarternary) {
    return 'quarternary'
  }
  if (props.defaultOrder) {
    return props.defaultOrder
  }
  return 'primary'
}

export interface StandardSizes {
  flush?: boolean
  defaultSize?: SizeModifier
  medium?: boolean
  tiny?: boolean
  small?: boolean
  big?: boolean
  huge?: boolean
}

export function getSize(props: StandardSizes) {
  if (props.tiny) {
    return 'tiny'
  }
  if (props.small) {
    return 'small'
  }
  if (props.medium) {
    return 'medium'
  }
  if (props.big) {
    return 'big'
  }
  if (props.huge) {
    return 'huge'
  }
  if (props.defaultSize) {
    return props.defaultSize
  }
  return undefined
}
