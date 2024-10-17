import "../styles/main-menu.css"
import MenuItem from "./menu-item";

type MenuProps = {
    dialogRef: React.Ref<HTMLDialogElement>;
};

const options = ["Portafolio", "Garage", "Save and Load", "Options"];

export default function MainMenu({ dialogRef }: MenuProps) {
    return (
        <dialog ref={dialogRef}>
            {options.map((option, index) => (
                <MenuItem key={index}>{option}</MenuItem>
            ))}
        </dialog>
    );
}
