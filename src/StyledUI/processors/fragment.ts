import { css, FlattenSimpleInterpolation } from 'styled-components'
import { Processor } from '../types'

export type FragmentProps = {
  fragment?: FlattenSimpleInterpolation | undefined
}
const fragmentProcessor: Processor<FragmentProps> = function (props: FragmentProps) {
  return css`
    ${props.fragment}
  `
}

export default fragmentProcessor
