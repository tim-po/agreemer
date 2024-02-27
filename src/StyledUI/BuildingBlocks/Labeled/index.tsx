import { TypographyProps } from '../../processors/typography'
import Text from '../../BaseComponents/Text'
import React, { ReactNode } from 'react'
import Rectangle from '../../BaseComponents/Rectangle'
import { RectangleProps } from '../../processors/rectangle'

type LabeledProps = TypographyProps &
  RectangleProps & {
    title: string
    children: ReactNode | ReactNode[]
  }

const LabeledDefaultProps: Partial<LabeledProps> = {
  flex: true,
  column: true,
  small: true,
}

const Labeled = (props: LabeledProps) => {
  return (
    <Rectangle {...props}>
      <Text label {...props}>
        {props.title}
      </Text>
      {props.children}
    </Rectangle>
  )
}

Labeled.defaultProps = LabeledDefaultProps

export default Labeled
