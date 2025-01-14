import type { RouteObject } from 'react-router'

import { Outlet } from 'react-router'
import { lazy, Suspense } from 'react'
import { MainLayout } from '@/layouts/MainLayout'
import { AuthLayout } from '@/layouts/AuthLayout'

const LandingPage = lazy(() => import('@/views/Landing'))
const LoginPage = lazy(() => import('@/views/Login'))
const RegisterPage = lazy(() => import('@/views/Register'))
const HomePage = lazy(() => import('@/views/Home'))

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
    element: <AuthLayout>{basicLayout()}</AuthLayout>,
    children: [{ element: <LoginPage />, index: true }],
  },
  {
    path: '/register',
    element: <AuthLayout>{basicLayout()}</AuthLayout>,
    children: [{ element: <RegisterPage />, index: true }],
  },
  {
    path: '/home',
    element: <AuthLayout>{basicLayout()}</AuthLayout>,
    children: [{ element: <HomePage />, index: true }],
  },

  // No match
  { path: '*', element: <>404</> },
]
