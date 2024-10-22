import { createFileRoute } from '@tanstack/react-router'
import '../../styles/options.css'
import MenuItem from '../../components/menu-item'

export const Route = createFileRoute('/(menus)/_menus/options')({
  component: OptionsMenu
})

function OptionsMenu() {
  const options: string[] = ['Animation Speed', 'Quit']

  return (
    <div className='d-grid options'>
      {options.map((option, index) => <MenuItem key={index}>{option}</MenuItem>)}
    </div>
  )
}
