import React, { ReactNode, useEffect, useRef, useState } from 'react'
import ModalContext from 'std-lib/context/Modal'
import { useOutlet } from 'react-router'
import GenericModal from '../GenericModal'
import { OptionalGenericModalProps } from '../../std-lib/types'

type layoutPropType = {
  children?: unknown
}

const ModalContextProvider = ({ children }: layoutPropType) => {
  const [modalComponents, setModalComponents] = useState<
    {
      component: ReactNode | undefined
      props?: OptionalGenericModalProps
      isModalVisible: boolean
      id: number
    }[]
  >([])

  const displayModal = (
    component?: React.ReactNode,
    genericProps?: OptionalGenericModalProps,
  ) => {
    setModalComponents(prevState => [
      ...prevState,
      {
        component: component,
        props: genericProps,
        isModalVisible: true,
        id: Math.random(),
      },
    ])
  }

  const visualCloseLastModal = () => {
    setModalComponents(prev => {
      const newModalComponents = [...prev]
      const lastModalIndex = newModalComponents.length - 1

      if (lastModalIndex >= 0) {
        newModalComponents[lastModalIndex] = {
          ...newModalComponents[lastModalIndex],
          isModalVisible: false,
        }
        return newModalComponents
      } else {
        return prev
      }
    })
  }

  const closeModal = () => {
    visualCloseLastModal()
    setTimeout(() => {
      setModalComponents(prev => [...prev.slice(0, prev.length - 1)])
    }, 300)
  }

  const swapModal = (
    component?: React.ReactNode,
    genericProps?: OptionalGenericModalProps,
  ) => {
    if (modalComponents.length > 0) {
      visualCloseLastModal()
      displayModal(component, genericProps)
      setTimeout(() => {
        setModalComponents(prevState => prevState.filter(modal => modal.isModalVisible))
      }, 300)
    } else {
      displayModal(component, genericProps)
    }
  }

  useEffect(() => {
    if (modalComponents.length > 0) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [modalComponents])

  const outlet = useOutlet()

  const [lastElementHeight, setLastElementHeight] = useState<number | null>(null)
  const lastElement = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setLastElementHeight(lastElement.current?.clientHeight ?? null)
  }, [modalComponents])

  return (
    <ModalContext.Provider
      value={{
        displayModal,
        closeModal,
        swapModal,
        lastModalHeight: lastElementHeight,
        modals: modalComponents,
      }}
    >
      <>
        {children ? children : outlet}
        {modalComponents.map((item, index, arr) => (
          <GenericModal
            key={item.id}
            ref={index === arr.length - 1 ? lastElement : undefined}
            modalCount={modalComponents.length}
            modalIndex={index}
            colorCloseWhite={false}
            onModalClose={closeModal}
            isModalVisible={item.isModalVisible}
            {...item.props}
          >
            {item.component}
          </GenericModal>
        ))}
      </>
    </ModalContext.Provider>
  )
}

export default ModalContextProvider
