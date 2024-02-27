import React, { ReactNode } from 'react'
import { OptionalGenericModalProps } from '../types'

type ModalContextType = {
  displayModal: (component?: ReactNode, genericProps?: OptionalGenericModalProps) => void
  swapModal: (component?: ReactNode, genericProps?: OptionalGenericModalProps) => void
  closeModal: () => void
  lastModalHeight: null | number
  modals: {
    component: ReactNode | undefined
    props?: OptionalGenericModalProps
  }[]
}

const ModalContext = React.createContext<ModalContextType>({
  displayModal: () => null,
  swapModal: () => null,
  closeModal: () => null,
  lastModalHeight: null,
  modals: [],
})

export default ModalContext
