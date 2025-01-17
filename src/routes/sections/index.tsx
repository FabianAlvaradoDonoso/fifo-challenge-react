import { type RouteObject } from 'react-router'

import { appRoutes } from './app'

// ----------------------------------------------------------------------

export const routesSection: RouteObject[] = [
  // App
  ...appRoutes,

  // No match
  { path: '*', element: <>404</> },
]
