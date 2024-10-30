import '../styles/text-box.css'

type TextBoxProps = {
    title: string,
    children: React.ReactNode
}

export default function TextBox({ title, children }: TextBoxProps) {
    return (
        <div className="message">
            <div className="title text-box-title">{title}</div>
            {children}
        </div>
    )

}