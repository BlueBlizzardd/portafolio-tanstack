import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(menus)/_menus/options')({
  component: () => <div>Hello /(menus)/_menus/options!</div>,
})
