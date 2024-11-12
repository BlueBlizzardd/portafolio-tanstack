import { useRef, useState } from 'react'
import '../styles/typewriter.css'

type TypewriterProps = {
    sentences: Array<string>,
    onComplete?: () => any
}

export default function Typewriter({ sentences, onComplete = () => false }: TypewriterProps) {

    const [sentence, setSentence] = useState<string>(sentences[0]);
    const [writing, setWriting] = useState<boolean>(true);
    const buttonRef = useRef<HTMLButtonElement>();

    function handleInteraction() {
        buttonRef.current?.click();
    }

    function handleClick() {
        if (!writing)
            nextSentence(sentences);

        setWriting(writing => !writing);
    }

    function nextSentence(sentences: Array<string>) {
        const current = sentences.indexOf(sentence);

        if (current === sentences.length - 1)
            return onComplete();

        return setSentence(sentences[current + 1]);
    }

    return (
        <div className='typewriter' onClick={handleInteraction} onKeyUp={(event) => { if (event.key === 'Enter') handleInteraction() }}>
            <div className={writing ? `typewriter-text typewriter-animation` : `typewriter-text`} onAnimationEnd={() => setWriting(false)}>{sentence}</div>
            <button className='next-button' onClick={() => handleClick()} autoFocus>
                <div className="triangle"></div>
            </button>
        </div>
    )
}