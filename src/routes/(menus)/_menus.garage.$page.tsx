import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(menus)/_menus/garage/$page')({
  component: () => <div>Hello /(menus)/_menus/garage/$page!</div>,
})
