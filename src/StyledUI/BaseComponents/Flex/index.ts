import styled from 'styled-components'
import flexProcessor, { FlexProps } from '../../processors/flex'
import adaptive, { Adaptive } from '../../higherLevelProcessors/adaptive'
import combine from '../../higherLevelProcessors/combine'
import fragmentProcessor, { FragmentProps } from '../../processors/fragment'

const Flex = styled.div<Adaptive<FlexProps & FragmentProps>>`
  ${props =>
    adaptive(combine<FlexProps & FragmentProps>([flexProcessor, fragmentProcessor]))(
      props,
    )}
`
export default Flex
