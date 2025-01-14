import type { RouteObject } from 'react-router'

import { Outlet } from 'react-router'
import { lazy, Suspense } from 'react'
import { MainLayout } from '@/layouts/MainLayout'

const LandingPage = lazy(() => import('@/views/Landing'))
const LoginPage = lazy(() => import('@/views/Login'))
const RegisterPage = lazy(() => import('@/views/Register'))

// ----------------------------------------------------------------------

const basicLayout = () => (
  <MainLayout>
    <Suspense fallback={<>Cargando ...</>}>
      <Outlet />
    </Suspense>
  </MainLayout>
)

export const routesSection: RouteObject[] = [
  {
    path: '/',
    element: basicLayout(),
    children: [{ element: <LandingPage />, index: true }],
  },
  {
    path: '/login',
    element: basicLayout(),
    children: [{ element: <LoginPage />, index: true }],
  },
  {
    path: '/register',
    element: basicLayout(),
    children: [{ element: <RegisterPage />, index: true }],
  },

  // No match
  { path: '*', element: <>404</> },
]
