import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(menus)/_menus/about')({
  component: () => <div>Hello /(menus)/_menus/about!</div>,
})
