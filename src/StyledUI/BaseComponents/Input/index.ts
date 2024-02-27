import styled from 'styled-components'
import combine from '../../higherLevelProcessors/combine'
import rectangleProcessor, { RectangleProps } from '../../processors/rectangle'
import { typographyProcessor, TypographyProps } from '../../processors/typography'

export type InputProps = {
  disabled?: boolean
} & RectangleProps &
  TypographyProps

const inputProcessor = combine<InputProps>([rectangleProcessor, typographyProcessor])

const Input = styled.input<InputProps>`
  ${props => inputProcessor(props)}
`

export default Input
