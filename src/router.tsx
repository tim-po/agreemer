import React from 'react'
import { createBrowserRouter, Outlet, RouteObject } from 'react-router-dom'
import * as Sentry from '@sentry/react'
import ModalContextProvider from './LayoutComponents/modalContextProvider'
import Card from './StyledUI/BuildingBlocks/Card'
import Landing from './Widgets/Landing'

export enum RoutesName {
  ROOT = '/',
}

export const routerConfig: RouteObject[] = [
  {
    path: '/',
    errorElement: <Card>Error</Card>,
    element: (
      <ModalContextProvider>
        <Outlet />
      </ModalContextProvider>
    ),
    children: [
      {
        path: RoutesName.ROOT,
        element: <Landing />,
      },
    ],
  },
]

const sentryCreateBrowserRouter = Sentry.wrapCreateBrowserRouter(createBrowserRouter)

export const router = sentryCreateBrowserRouter(routerConfig)
