import { Processor } from '../types'
import { css } from 'styled-components'

const MOBILE_MAX_WIDTH = 1000

export type Adaptive<ComponentPropType> = ComponentPropType & {
  mobileBreakpoint?: number
  mobile?: ComponentPropType
  desktop?: ComponentPropType
}

const adaptive = <ComponentProps>(processor: Processor<ComponentProps>) => {
  return (props: Adaptive<ComponentProps>) => {
    return css`
      ${processor(props)};

      @media (max-width: ${props.mobileBreakpoint || MOBILE_MAX_WIDTH}px) {
        ${props.mobile && processor(Object.assign({ ...props }, props.mobile))};
      }

      @media (min-width: ${props.mobileBreakpoint || MOBILE_MAX_WIDTH}px) {
        ${props.desktop && processor(Object.assign({ ...props }, props.desktop))};
      }
    `
  }
}

export default adaptive
