import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

import { Footer } from '@/components/footer'
import Header from '../components/Header'

export const Route = createRootRoute({
  head() {
    return {
      meta: [
        {
          title: 'Postivus',
        },
        {
          name: 'description',
          content: 'Postivus - Your partner in digital transformation',
        },
        {
          name: 'keywords',
          content: 'postivus, digital transformation, web development, software solutions',
        },
      ],
    }
  },
  component: () => (
    <main className='container mx-auto'>
      <Header />
      <Outlet />
      <Footer />
      <TanStackRouterDevtools />
    </main>
  ),
})
