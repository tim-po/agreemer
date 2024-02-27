import styled, { css } from 'styled-components'
import rectangleProcessor, { RectangleProps } from '../../processors/rectangle'
import adaptive, { Adaptive } from '../../higherLevelProcessors/adaptive'

export type CardProps = RectangleProps & {
  button?: boolean
  transparent?: boolean
}

export const cardProcessor = (props: CardProps) => {
  return css`
    ${
      props.transparent &&
      css`
          background: transparent;
        `
    }
    ${rectangleProcessor(props)}
  `
}

const Card = styled.div.attrs(props => ({
  // @ts-ignore
  as: props.button ? 'button' : 'div',
}))<Adaptive<CardProps>>`
  ${props => adaptive(cardProcessor)(props)}
`

Card.defaultProps = {
  defaultSize: 'medium',
  defaultMaterialThickness: 'thick',
  materialPart: 'background',
  flex: true,
}

export default Card
