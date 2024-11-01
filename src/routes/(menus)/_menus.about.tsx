import { createFileRoute } from '@tanstack/react-router'
import TextBox from '../../components/text-box'
import '../../styles/about.css'
import { useState } from 'react';
import DialogBox from '../../components/dialog-box';

export const Route = createFileRoute('/(menus)/_menus/about')({
  component: About
})

function About() {
  const [done, setDone] = useState<boolean>(false);

  return (
    <DialogBox scope='about'>
      <div className="about-image"></div>
      <TextBox title='Message'>
        <p className='about-text' onAnimationEnd={() => setDone(done => !done)}>
          Hello, I'm Eduardo. This is a website made to explore all of my capabilities in web design and development, something I've
          been doing for about a year and a half at this point.
        </p>
        <button disabled={!done} aria-disabled={!done} style={{ display: done ? 'block' : 'none' }} className='skip-button'></button>
      </TextBox>
    </DialogBox>
  )
}