import { type RouteObject } from 'react-router'

import { appRoutes } from './app'
import { authRoutes } from './auth'
import { landingRoutes } from './landing'

// ----------------------------------------------------------------------

export const routesSection: RouteObject[] = [
  // Landing
  ...landingRoutes,

  // Auth
  ...authRoutes,

  // App
  ...appRoutes,

  // No match
  { path: '*', element: <>404</> },
]
