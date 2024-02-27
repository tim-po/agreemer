import React from 'react'
import './std-lib/stylesheets/skeleton.scss'
import './std-lib/stylesheets/index.scss'
import { createGlobalStyle, css, DefaultTheme, ThemeProvider } from 'styled-components'
import { RouterProvider } from 'react-router'
import { router } from './router'
import { FastUIDefaultTheme } from 'StyledUI/theme'
import materialProcessor from './StyledUI/processors/material'

const GlobalStyles = createGlobalStyle<{
  style: DefaultTheme
}>`
  ${({ style }) =>
    css`
        body {
          ${materialProcessor({ opaqueMaterial: true })}
        }

        html {
          ${materialProcessor({ opaqueMaterial: true })}
        }
      `}

  ;
`

export const App = () => {
  return (
    <>
      <GlobalStyles style={FastUIDefaultTheme} />
      <ThemeProvider theme={FastUIDefaultTheme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  )
}
