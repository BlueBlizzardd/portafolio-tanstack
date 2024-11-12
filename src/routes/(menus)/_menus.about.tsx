import { createFileRoute, useNavigate } from '@tanstack/react-router'
import TextBox from '../../components/text-box'
import '../../styles/about.css'
import DialogBox from '../../components/dialog-box';
import Typewriter from '../../components/typewriter';

export const Route = createFileRoute('/(menus)/_menus/about')({
  component: About
})

function About() {
  const navigate = useNavigate();
  const sentences = ["Hello, I'm Eduardo.", "This is a website made to explore all of my capabilities in web design and development",
    "something I've been doing for about a year and a half at this point."];

  return (
    <DialogBox scope='about'>
      <div className="about-image"></div>
      <TextBox title='Message'>
        <Typewriter sentences={sentences} onComplete={() => navigate({ to: '/' })}></Typewriter>
      </TextBox>
    </DialogBox>
  )
}