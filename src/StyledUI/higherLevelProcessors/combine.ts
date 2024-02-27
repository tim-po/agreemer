import { Processor } from '../types'
import { css } from 'styled-components'

const combine = <ComponentProps>(processors: Processor<ComponentProps>[]) => {
  return (props: ComponentProps) => {
    const cssToReturn = css`
      ${processors.map(processor => {
        return processor(props)
      })}
    `
    return cssToReturn
  }
}

export default combine
