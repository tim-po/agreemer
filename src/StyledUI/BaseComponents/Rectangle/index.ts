import styled from 'styled-components'
import rectangleProcessor, { RectangleProps } from '../../processors/rectangle'
import adaptive, { Adaptive } from '../../higherLevelProcessors/adaptive'
import { FragmentProps } from '../../processors/fragment'

const Rectangle = styled.div<Adaptive<RectangleProps & FragmentProps>>`
  ${props => adaptive(rectangleProcessor)(props)}
`

export default Rectangle
