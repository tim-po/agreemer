import { css } from 'styled-components'
import { Processor } from '../types'

export type Hoverable<ComponentPropType> = ComponentPropType & {
  hover?: ComponentPropType
}

const hoverable = function <ComponentProps>(processor: Processor<ComponentProps>) {
  return (props: Hoverable<ComponentProps>) => {
    return css`
      ${processor(props)}

      ${
        props.hover &&
        css`
            &:hover {
              ${processor(props.hover)}
            }
          `
      }
    `
  }
}

export default hoverable
