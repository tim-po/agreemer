import positionProcessor, { PositionProps } from './position'
import dimensionProcessor, { DimensionProps } from './dimentions'
import visualisationProcessor, { VisualisationProps } from './visualisation'
import flexProcessor, { FlexProps } from './flex'
import { css } from 'styled-components'
import { Processor } from '../types'
import fragmentProcessor, { FragmentProps } from './fragment'
import combine from '../higherLevelProcessors/combine'
import { generateMaterialProcessor, MaterialProps } from './material'
import transitionProcessor, { TransitionProps } from './transition'

export type RectangleProps = {
  flex?: boolean
} & PositionProps &
  TransitionProps &
  DimensionProps &
  VisualisationProps &
  FragmentProps &
  FlexProps &
  MaterialProps

const rectangleProcessor: Processor<RectangleProps> = combine<RectangleProps>([
  fragmentProcessor,
  generateMaterialProcessor({ materialPart: undefined }),
  visualisationProcessor,
  positionProcessor,
  dimensionProcessor,
  transitionProcessor,
  (props: RectangleProps) => {
    return props.flex !== undefined ? flexProcessor(props) : css``
  },
])

export default rectangleProcessor
