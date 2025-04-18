import Register from '@/page/Register/Register'
import RegisterLayout from '@/layout/RegisterLayout/RegisterLayout'
import Login from '@/page/Login'
import ProductList from '@/page/ProductList'
import { useRoutes } from 'react-router-dom'
import MainLayout from '@/layout/MainLayout'

export default function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: '/',
      element: (
        <MainLayout>
          <ProductList />
        </MainLayout>
      )
    },
    {
      path: '/login',
      element: (
        <RegisterLayout>
          <Login />
        </RegisterLayout>
      )
    },
    {
      path: '/register',
      element: (
        <RegisterLayout>
          <Register />
        </RegisterLayout>
      )
    }
  ])
  return routeElements
}
