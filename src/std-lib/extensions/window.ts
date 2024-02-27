import React, { useEffect, useState } from 'react'

export const createStickyBlock = (order: number) => {
  const id = Math.round(Math.random() * 1000)
  if (order === -1) {
    return { 'data-custom-sticky': `${id}-hidden` }
  }
  return { 'data-custom-sticky': `${id}-${order}` }
}

export const updateStickyBlocks = () => {
  const customStickyBlocks: NodeListOf<HTMLDivElement> =
    window.document.querySelectorAll('[data-custom-sticky]')

  const blocksWithProps: any[] = []

  customStickyBlocks.forEach(block => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const attribute = block.attributes['data-custom-sticky'].nodeValue.split('-')
    if (attribute[1] === 'hidden') {
      block.style.position = 'sticky'
      block.style.top = `${-420}px`
    } else {
      const props = { id: +attribute[0], order: attribute[1] }
      blocksWithProps.push({ element: block, ...props })
    }
  })

  const blocksGroupedByOrder: { [key: number]: any[] } = {}

  blocksWithProps.forEach(block => {
    blocksGroupedByOrder[block.order] = [
      ...(blocksGroupedByOrder[block.order] || []),
      block,
    ]
  })

  let top = 0
  Object.values(blocksGroupedByOrder)
    .sort()
    .forEach((group, index) => {
      group.forEach(block => {
        block.element.style.position = 'sticky'
        block.element.style.top = `${top}px`

        block.element.classList.add(`sticky-header-${index}`)
        block.element.classList.add(`sticky-header`)

        const observer = new IntersectionObserver(
          ([e]) => e.target.classList.toggle('isSticky', e.intersectionRatio < 1),
          { threshold: [0.8], rootMargin: `${-top - 2}px 0px 0px 0px` },
        )

        observer.observe(block.element)
      })
      top += group[0].element.clientHeight
    })
}

export const calculateTotalStickyHeight = (group?: number) => {
  const customStickyBlocks: NodeListOf<HTMLDivElement> =
    window.document.querySelectorAll('[data-custom-sticky]')

  let top = 0
  customStickyBlocks.forEach(element => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const attribute = element.attributes['data-custom-sticky'].nodeValue.split('-')
    if (attribute[1] !== 'hidden') {
      if (group) {
        if (group <= attribute[0]) {
          top += element.offsetHeight
        }
      } else {
        top += element.offsetHeight
      }
    }
  })

  return top
}

export function scrollToElement(hash = '') {
  const scrollToContent = document.getElementById(hash)
  // scrollToContent?.scrollIntoView({block: "start", behavior: "smooth"});
  if (scrollToContent) {
    const stickyTop = calculateTotalStickyHeight()
    window?.scrollTo({
      top: scrollToContent?.offsetTop - stickyTop,
      behavior: 'smooth',
    })
  }
}

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window
  return {
    width,
    height,
  }
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowDimensions
}

export function useOnClickOutside(ref: any, handler: (event: any) => void) {
  useEffect(() => {
    const listener = (event: any) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return
      }

      handler(event)
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, handler])
}
