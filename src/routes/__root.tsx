import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

import { Footer } from '@/components/footer'
import Header from '../components/Header'

export const Route = createRootRoute({
  component: () => (
    <main className='container mx-auto'>
      <Header />
      <Outlet />
      <Footer />
      <TanStackRouterDevtools />
    </main>
  ),
})
