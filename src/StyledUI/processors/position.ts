import { CssFrom, UnitValue } from '../TypedCss'
import { css } from 'styled-components'
import { Processor } from '../types'

export type PositionProps = {
  absolute?: boolean
  fixed?: boolean
  relative?: boolean
  sticky?: boolean
  static?: boolean
  zIndex?: number
  left?: UnitValue
  right?: UnitValue
  top?: UnitValue
  bottom?: UnitValue
}

const positionProcessor: Processor<PositionProps> = (props: PositionProps) => {
  return css`
    ${props.absolute ? css`position: absolute;` : ''};
    ${props.fixed ? css`position: fixed;` : ''};
    ${props.relative ? css`position: relative;` : ''};
    ${
      props.sticky
        ? css`position: sticky;
              z-index: 1`
        : ''
    };
    ${props.static ? css`position: static;` : ''};

    ${props.left !== undefined ? css`left: ${CssFrom(props.left)};` : ''};
    ${props.right !== undefined ? css`right: ${CssFrom(props.right)};` : ''};
    ${props.top !== undefined ? css`top: ${CssFrom(props.top)};` : ''};
    ${props.bottom !== undefined ? css`bottom: ${CssFrom(props.bottom)};` : ''};

    ${props.zIndex ? css`z-index: ${props.zIndex};` : ''}
  `
}

export default positionProcessor
