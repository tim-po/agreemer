import { css } from 'styled-components'
import { Processor } from '../types'
import { generateTransition, transitionConfig } from '../animations/transition'

export type TransitionProps = {
  transition?: string | transitionConfig
}

const transitionProcessor: Processor<TransitionProps> = (props: TransitionProps) => {
  if (typeof props.transition === 'string') {
    return css`
      ${props.transition ? css`transition: ${props.transition};` : ''};
    `
  }
  if (!props.transition) {
    return css``
  }
  return css`
    ${generateTransition(props.transition)}
  `
}

export default transitionProcessor
