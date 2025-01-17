import type { RouteObject } from 'react-router'

import { Outlet } from 'react-router'
import { lazy, Suspense } from 'react'
import { MainLayout } from '@/layouts/MainLayout'

import { paths } from '../paths'

// ----------------------------------------------------------------------

const IndexPage = lazy(() => import('@/pages/home'))

// ----------------------------------------------------------------------

const AppLayout = () => (
  <Suspense fallback={<>...</>}>
    <Outlet />
  </Suspense>
)

export const appRoutes: RouteObject[] = [
  {
    path: paths.home,
    element: AppLayout(),
    children: [
      {
        element: (
          <MainLayout>
            <IndexPage />
          </MainLayout>
        ),
        index: true,
      },
    ],
  },
]
