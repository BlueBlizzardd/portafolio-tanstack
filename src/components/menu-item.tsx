import '../styles/menu-item.css'

type ItemProps = {
    children: React.ReactNode;
};

export default function MenuItem({ children }: ItemProps) {
    return (
        <li className="d-grid menu-item">
            <span className="title">{children}</span>
            <button type="button" className="d-grid">
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
            </button>
        </li>
    );
}
