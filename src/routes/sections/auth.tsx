import type { RouteObject } from 'react-router'

import { Outlet } from 'react-router'
import { lazy, Suspense } from 'react'
import { paths, ROOTS } from '@/routes/paths'

// ----------------------------------------------------------------------

const LoginPage = lazy(() => import('@/views/auth/login'))
const RegisterPage = lazy(() => import('@/views/auth/register'))

// ----------------------------------------------------------------------

export const authRoutes: RouteObject[] = [
  {
    path: ROOTS.AUTH,
    element: (
      <Suspense fallback={<>...</>}>
        <Outlet />
      </Suspense>
    ),
    children: [
      {
        path: paths.auth.login,
        element: <LoginPage />,
      },
      {
        path: paths.auth.register,
        element: <RegisterPage />,
      },
    ],
  },
]
