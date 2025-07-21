import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

import Header from '../components/Header'

export const Route = createRootRoute({
  component: () => (
    <main className='container mx-auto'>
      <Header />
      <Outlet />
      <TanStackRouterDevtools />
    </main>
  ),
})
