import { createFileRoute } from '@tanstack/react-router'
import TextBox from '../../components/text-box'

export const Route = createFileRoute('/(menus)/_menus/about')({
  component: () => <div>Hello /(menus)/_menus/about!</div>,
})

function About() {
  return (
    <div className="about">
      <img src="" alt="" />
      <TextBox title='Message'>
        <p className='about-text'>
          Hello, I'm Eduardo. This is a website made to explore all of my capabilities in web design and development, something I've
          been doing for about a year and a half at this point.
        </p>
      </TextBox>
    </div>
  )
}