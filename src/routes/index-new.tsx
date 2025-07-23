import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/index-new')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/index-new"!</div>
}
