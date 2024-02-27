import { css } from 'styled-components'
import { Processor } from '../types'
import { getOrder, OrderModifiersAsArray, StandardOrder } from '../theme/types'
import {
  getThickness,
  materialFragments,
  MaterialPart,
  ThicknessProps,
} from '../theme/materials'
import { getColorScheme } from '../higherLevelProcessors/colorScheme'

export type MaterialProps = StandardOrder &
  ThicknessProps & {
    materialPart?: MaterialPart
    vibrant?: boolean
    disabled?: boolean
    noText?: boolean
  }

const materialProcessor: Processor<MaterialProps> = (props: MaterialProps) => {
  const thickness = getThickness(props)
  const order = getOrder(props)
  let textOrder = order
  const orderIndex = OrderModifiersAsArray.indexOf(order)
  const materialFragmentsForColorScheme = getColorScheme(materialFragments)
  if (!materialFragmentsForColorScheme) {
    return css`
    `
  }

  if (props.disabled) {
    textOrder = OrderModifiersAsArray[OrderModifiersAsArray.length - 1]
  }

  if (props.materialPart === undefined) {
    return css``
  }

  if (props.materialPart === 'text') {
    return css`
      ${materialFragmentsForColorScheme.text[textOrder]}
    `
  }

  if (props.materialPart === 'separator') {
    return css`
      ${materialFragmentsForColorScheme.separator}
    `
  }

  if (props.materialPart === 'fill') {
    return css`
      ${materialFragmentsForColorScheme.fill[order]}
      ${!props.noText ? materialFragmentsForColorScheme.text[textOrder] : ''}
    `
  }

  if (!thickness) {
    return css``
  }

  return css`
    ${materialFragmentsForColorScheme.background[thickness]}
    ${!props.noText ? materialFragmentsForColorScheme.text[textOrder] : ''}
  `
}

export const generateMaterialProcessor = (
  defaultProps: MaterialProps,
): Processor<MaterialProps> => {
  return (props: MaterialProps) => {
    return materialProcessor({ ...defaultProps, ...props })
  }
}

export default materialProcessor
