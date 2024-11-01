import '../styles/dialog-box.css'

type DialogBoxProps = {
    scope?: string,
    backgroundColor?: { '--dialog-bg': string },
    children: React.ReactNode
}

export default function DialogBox({ scope, backgroundColor, children }: DialogBoxProps) {
    return (
        <div className={scope ? `container ${scope}` : 'container'}>
            <div className="dialog-box" style={backgroundColor as React.CSSProperties ?? undefined}>
                {children}
            </div>
        </div>
    )
}