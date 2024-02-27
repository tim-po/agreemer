import styled from 'styled-components'
import dimensionProcessor, { DimensionProps } from '../../processors/dimentions'
import adaptive, { Adaptive } from '../../higherLevelProcessors/adaptive'

const Br = styled.div<Adaptive<DimensionProps>>`
  ${props => adaptive(dimensionProcessor)(props)}
`

export default Br
