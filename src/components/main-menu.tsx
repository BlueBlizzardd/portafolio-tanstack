import { Link } from "@tanstack/react-router";
import "../styles/main-menu.css"
import MenuItem from "./menu-item";

type MenuProps = {
    dialogRef: React.Ref<HTMLDialogElement>;
};

const options = ["garage", "about", "options"];

export default function MainMenu({ dialogRef }: MenuProps) {
    return (
        <dialog ref={dialogRef}>
            {options.map((option, index) => (
                <Link to={option} key={index}>
                    <MenuItem>{option}</MenuItem>
                </Link>
            ))}
        </dialog>
    );
}
