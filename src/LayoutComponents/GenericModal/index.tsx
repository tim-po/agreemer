import React, { forwardRef, useContext, useState } from 'react'
import './index.scss'
import { useWindowDimensions } from '../../std-lib/extensions/window'
import { GenericModalOwnProps } from '../../std-lib/types'
import styled, { keyframes } from 'styled-components'
import ModalContext from '../../std-lib/context/Modal'
import Close from '../../std-lib/images/icons/close'

const cover = keyframes`
  from {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(0);
    opacity: 0;
  }
`

const uncover = keyframes`
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`

const ModalContainer = styled.div<{ isVisible: boolean }>`
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(30px);
  z-index: 11000;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  transition: all .3s;
  animation: appear .3s;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  @keyframes appear {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`

const CloseOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`

const SwipeBlock = styled.div`
  position: absolute;
  min-height: 20px;
  right: 0;
  top: 0;
  left: 0;
  z-index: 1000;
`

const CloseButton = styled.button`
  position: absolute;
  padding: 20px 16px 0;
  top: 0;
  right: 0;
`

const ModalWrapper = styled.div<{
  shiftHeight: number | null
  isVisible: boolean
  from?: number
}>`
  transition: all .3s;
  border-radius: 16px;
  position: absolute;
  overflow: hidden;

  @media screen and (min-width: 1000px) {
    max-height: 70vh;
    overflow: hidden;
    animation-name: ${({ isVisible }) => (isVisible ? uncover : cover)};
    animation-fill-mode: forwards;
    animation-duration: .3s;
    animation-timing-function: ease;
  }

  @media screen and (max-width: 1000px) {
    border-radius: 16px 16px 0 0;
    width: 100vw;
    position: absolute;
    bottom: 0;

    max-height: calc(100% - 80px);
    min-height: 10px;
    transform: scale(1) translateY(0);

    animation-name: ${({ isVisible }) => (isVisible ? 'slideIn' : 'slideOut')};
    animation-iteration-count: 1;
    animation-duration: .32s;
    animation-timing-function: ease;

    ${({ shiftHeight, isVisible }) =>
      shiftHeight &&
      isVisible &&
      `
    min-height: ${shiftHeight}px;
    max-height: ${shiftHeight}px;
    transform: ${shiftHeight ? 'scaleX(0.96)' : ''};
  `}
  }

  @keyframes slideOut {
    from {
      transform: translateY(${({ from }) => from ?? 0}px);

    }
    to {
      transform: translateY(100%);
    }
  }

  @keyframes slideIn {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }
`

const GenericModal = forwardRef<HTMLDivElement, GenericModalOwnProps>((props, ref) => {
  const { onModalClose, children, isModalVisible, colorCloseWhite } = props
  const { lastModalHeight } = useContext(ModalContext)
  const { width } = useWindowDimensions()

  const [cardTranslate, setCardTranslate] = useState<number>(0)
  const [touchStartLocation, setTouchStartLocation] = useState(0)

  const onTouchMove = (e: React.TouchEvent) => {
    // e.preventDefault()
    if (touchStartLocation === 0) {
      setTouchStartLocation(e.touches[0].clientY)
    } else {
      const deltaY = touchStartLocation - e.touches[0].clientY
      setCardTranslate(Math.min(deltaY, 0))
    }
  }

  const onTouchEnd = (e: React.TouchEvent) => {
    setTouchStartLocation(0)
    if (cardTranslate <= -200) {
      setCardTranslate(touchStartLocation - e.changedTouches[0].clientY)
      onModalClose()
    } else {
      setCardTranslate(0)
    }
  }

  return (
    <ModalContainer isVisible={!!isModalVisible}>
      <CloseOverlay onClick={onModalClose} />
      <ModalWrapper
        ref={ref}
        shiftHeight={ref ? null : lastModalHeight && lastModalHeight + 40}
        isVisible={!!isModalVisible}
        from={-cardTranslate}
        style={
          cardTranslate
            ? {
                bottom: `${cardTranslate}px`,
                transition: 'all .05s',
              }
            : undefined
        }
      >
        <SwipeBlock onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
          <CloseButton onClick={onModalClose}>
            <Close
              width={12}
              height={12}
              primaryColor={colorCloseWhite ? 'white' : undefined}
            />
          </CloseButton>
        </SwipeBlock>
        {children}
      </ModalWrapper>
    </ModalContainer>
  )
})

GenericModal.displayName = 'GenericModal'

export default GenericModal
