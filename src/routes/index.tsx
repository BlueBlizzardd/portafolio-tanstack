import { createFileRoute } from '@tanstack/react-router'
import { useRef } from 'react';
import '../styles/title-screen.css'
import '../styles/start-button.css'
import MainMenu from '../components/main-menu';

export const Route = createFileRoute('/')({
    component: TitleScreen,
})

function TitleScreen() {
    const ref = useRef<HTMLDialogElement>(null);

    const handleInput = (event: React.SyntheticEvent) => {
        event.stopPropagation();
        ref.current?.showModal();
    };

    return (
        <div className="d-flex flex-column title-screen primary-bg">
            <div className="main title">Ridge Racer Type 4</div>
            <div className="content">
                <button
                    onClick={handleInput}
                    onKeyUp={(e) => {
                        if (e.key === "Enter") handleInput(e);
                    }}
                    type="button"
                    className="btn-start title"
                    autoFocus
                >
                    Press Enter Button
                </button>
                <div className="title page-rights">&copy; 2024 Eduardo Juliao</div>
            </div>
            <MainMenu dialogRef={ref} />
        </div>
    );
}