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
        <div className="d-flex options">
          <div className="option title">Directional Buttons: </div>
          <div className="option title">Enter Button: O.K.</div>
          <div className="option title">Esc Button: Cancel</div>
          <div className="option title">Please</div>
        </div>
      </footer>
    </div>
  )
}