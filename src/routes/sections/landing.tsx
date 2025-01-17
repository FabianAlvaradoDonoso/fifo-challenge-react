import type { RouteObject } from 'react-router'

import { Outlet } from 'react-router'
import { lazy, Suspense } from 'react'
import { paths } from '@/routes/paths'

// ----------------------------------------------------------------------

const IndexPage = lazy(() => import('@/views/landing/index'))

// ----------------------------------------------------------------------

const LandingLayout = () => (
  <Suspense fallback={<>...</>}>
    <Outlet />
  </Suspense>
)

export const landingRoutes: RouteObject[] = [
  {
    path: paths.landing,
    element: <>{LandingLayout()}</>,
    children: [{ element: <IndexPage />, index: true }],
  },
]
