import type { RouteObject } from 'react-router'

import { Outlet } from 'react-router'
import { lazy, Suspense } from 'react'
import { paths } from '@/routes/paths'

// ----------------------------------------------------------------------

const IndexPage = lazy(() => import('@/views/app/index'))

// ----------------------------------------------------------------------

const AppLayout = () => (
  <Suspense fallback={<>...</>}>
    <Outlet />
  </Suspense>
)

export const appRoutes: RouteObject[] = [
  {
    path: paths.home,
    element: <>{AppLayout()}</>,
    children: [{ element: <IndexPage />, index: true }],
  },
]
