import { css } from 'styled-components'

export const StyledMainSkeleton = css`
  --skeleton-base-color: #ddd;
  --skeleton-shine-color: #e8e8e8;
  position: relative;
  z-index: 9;
  border-radius: 4px;
  color: rgba(255, 255, 255, 0.1) !important;
  background-image: linear-gradient(-45deg, var(--skeleton-base-color) 0, var(--skeleton-base-color) 45%, var(--skeleton-shine-color) 50%, var(--skeleton-base-color) 55%, var(--skeleton-base-color) 100%) !important;
  content: "";
  animation: skeleton-shine 2s infinite;
  background-size: 400% 400% !important;
  backdrop-filter: blur(30px);
  border: none !important;
  pointer-events: none;

  &::placeholder {
    opacity: 0;
  }

  &::before {
    opacity: 0;
  }

  &::after {
    opacity: 0;
  }

  div, span, img, video, p, source {
    opacity: 0;
  }


  @keyframes skeleton-shine {
    from {
      background-position: right;
    }

    to {
      background-position: left;
    }
  }
`
