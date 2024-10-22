import { createFileRoute, Outlet, useLocation } from '@tanstack/react-router'
import '../../styles/menus.css'

export const Route = createFileRoute('/(menus)/_menus')({
  component: Menu
})

function Menu() {
  const location = useLocation();

  return (
    <div className="d-flex flex-column menu primary-bg">
      <header className="heading">
        <span className='mode title'>Mode: {location.pathname}</span>
        <div className="separator"></div>
      </header>
      <Outlet />
      <footer className="footer">
        <div className="separator"></div>
        <div className="d-flex controls">
          <div className="control title">Directional Buttons: </div>
          <div className="control title">Enter Button: O.K.</div>
          <div className="control title">Esc Button: Cancel</div>
          <div className="control title">Please</div>
        </div>
      </footer>
    </div>
  )
}