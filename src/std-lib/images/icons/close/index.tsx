import React from 'react'
import {IconType} from '../types';
import Cross from '../cross';


const Close = (props: IconType) => {
  const { width = 14, height = 14, primaryColor = '#1F1F22' } = props
  return <Cross width={width} height={height} primaryColor={primaryColor} rotate={0} />
}

export default Close
