import styled from 'styled-components'
import { typographyProcessor, TypographyProps } from '../../processors/typography'
import adaptive, { Adaptive } from '../../higherLevelProcessors/adaptive'
import fragmentProcessor, { FragmentProps } from '../../processors/fragment'
import combine from '../../higherLevelProcessors/combine'

const Text = styled.span<Adaptive<TypographyProps & FragmentProps>>`
  ${props =>
    adaptive(
      combine<TypographyProps & FragmentProps>([typographyProcessor, fragmentProcessor]),
    )(props)}
`

export default Text
