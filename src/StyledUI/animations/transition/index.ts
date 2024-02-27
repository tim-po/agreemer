import { css } from 'styled-components'

export type transitionConfig = {
  part: 'all' | string
  time: number
  timingFunction: 'ease' | 'linear' | 'ease-in' | 'ease-out' | 'ease-in-out' | string
  delay?: number
}

export const generateTransition = (config: transitionConfig) => {
  return css`
    transition: ${config.part} ${config.time}s ${config.timingFunction} ${
    config.delay ? `${config.delay}s` : ''
  };
  `
}
