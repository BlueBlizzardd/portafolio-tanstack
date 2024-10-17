import { createFileRoute, Outlet, useLocation } from '@tanstack/react-router'
import '../../styles/menus.css'

export const Route = createFileRoute('/(menus)/_menus')({
  component: Menu
})

function Menu() {
  const location = useLocation();

  return (
    <div className="menu primary-bg">
      <div className="heading">
        <span className='mode'>Mode: {location.pathname}</span>
      </div>
      <Outlet />
      <div className="d-flex options">
        <div className="option title">Directional Buttons: </div>
        <div className="option title">Enter Button: O.K.</div>
        <div className="option title">Esc Button: Cancel</div>
        <div className="option title">Please</div>
      </div>
    </div>
  )
}