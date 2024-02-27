import React from 'react'
import { App } from './App'
import { createRoot } from 'react-dom/client'
import * as Sentry from '@sentry/react'
import { createRoutesFromChildren, matchRoutes, useLocation, useNavigationType } from 'react-router-dom'
import { ENVIRONMENT } from 'constants'

Sentry.init({
  dsn: 'https://f9eb5a8703064e23a3a2753218a12d6e@o4504910296383488.ingest.sentry.io/4504910298218496',
  environment: ENVIRONMENT,
  integrations: [
    new Sentry.BrowserTracing({
      routingInstrumentation: Sentry.reactRouterV6Instrumentation(
        React.useEffect,
        useLocation,
        useNavigationType,
        createRoutesFromChildren,
        matchRoutes,
      ),
    }),
  ],
  tracesSampleRate: 1.0,
})

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(<App />)
