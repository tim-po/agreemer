import { css, FlattenSimpleInterpolation } from 'styled-components'
import { makeEmptyArray } from '../../std-lib/extensions/array'

interface DefaultTransitionProps {
  time?: number
  delay?: number
  appliedForProperties?: string
  easing?: string
}

const defaultTransitionProps = {
  time: 0.3,
  appliedForProperties: 'all',
  easing: 'ease-in-out',
}

interface NumberOfChildrenTransitionProps extends DefaultTransitionProps {
  numberOfChildren: number
  childNumber?: number
  reverse?: boolean
  additiveTimePerChild?: number
}

const numberOfChildrenTransition = ({
  numberOfChildren,
  childNumber = 0,
  reverse = false,
  time = 0.2,
  additiveTimePerChild = 0.05,
  delay = 0.09,
  appliedForProperties,
  easing,
}: NumberOfChildrenTransitionProps) => {
  const delayMultiplier = !reverse ? childNumber : numberOfChildren - childNumber
  return css`
    transition-property: ${appliedForProperties};
    transition-timing-function: ${easing};
    transition-duration: ${additiveTimePerChild * numberOfChildren + time}s;
    transition-delay: ${delayMultiplier * delay}s;
  `
}
numberOfChildrenTransition.defaultProps = defaultTransitionProps

interface NthChildTransitionProps {
  maxIndex: number
  transition: (childIndex: number) => FlattenSimpleInterpolation
}

const nthChildTransition = ({ maxIndex, transition }: NthChildTransitionProps) => {
  const indexes = makeEmptyArray(maxIndex)
  return css`
    ${indexes.map((n, index) => {
      return css`
        &:nth-child(${index}) {
          ${transition(index)}
        }
      `
    })}
  `
}

export const GenerateTransition = {
  basedOnNumberOfChildren: numberOfChildrenTransition,
  basedOnChildIndex: nthChildTransition,
}
