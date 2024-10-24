import { createFileRoute } from '@tanstack/react-router'
import '../../styles/garage.css'

export const Route = createFileRoute('/(menus)/_menus/garage/$page')({
    component: Pages
})

async function Pages() {
    const { page }: { page: "cafe" | "cloth" | "game" | "mac" | "ow" | "pets" | "salon" } = Route.useParams();

    const pages = {
        cafe: "https://kaleidoscopic-taffy-300230.netlify.app",
        cloth: "https://gregarious-semolina-4e434b.netlify.app",
        game: "https://whimsical-pika-d83faa.netlify.app",
        mac: "https://github.com/BlueBlizzardd/Landing-Page-1-Multimedia",
        ow: "https://github.com/BlueBlizzardd/Website--1-Multimedia",
        pets: "https://curious-concha-d8e4c1.netlify.app",
        salon: "https://peaceful-chaja-823c96.netlify.app"
    }

    const img: string = `./${page}.png`;

    return (
        <div className='garage'>
            <a href={`${pages[page]}`}>
                <img src={img} />
            </a>
        </div>
    )
}
