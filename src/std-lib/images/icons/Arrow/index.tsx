import React from 'react'
import {IconType, RotateType} from '../types';


const Arrow = (props: IconType & RotateType) => {
  const {
    width = 21,
    height = 14,
    rotate = 0,
    primaryColor = 'white',
    viewBox = '0 0 21 14',
  } = props
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <path
        d="M10.8228 7.47451e-07C8.10081 0.00373265 0 14 0 14L21 13.9683C21 13.9683 13.5449 -0.00373115 10.8228 7.47451e-07Z"
        fill={primaryColor}
      />
    </svg>
  )
}

export default Arrow
