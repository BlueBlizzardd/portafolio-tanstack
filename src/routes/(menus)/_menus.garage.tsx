import { createFileRoute, Link } from '@tanstack/react-router'
import '../../styles/garage.css'
import { Pages } from '../../types/pages';
import MenuItem from '../../components/menu-item';

type PageURLs = Record<Pages, string>

export const Route = createFileRoute('/(menus)/_menus/garage')({
    validateSearch: (search: Record<string, unknown>): { page: Pages } => {
        try {
            return {
                page: search?.page as Pages ?? 'cafe'
            }
        }
        catch {
            return {
                page: 'cafe'
            }
        }
    },
    component: Garage
})

function Garage() {
    const { page }: { page: Pages } = Route.useSearch();

    const pages: PageURLs = {
        cafe: "https://kaleidoscopic-taffy-300230.netlify.app",
        cloth: "https://gregarious-semolina-4e434b.netlify.app",
        game: "https://whimsical-pika-d83faa.netlify.app",
        mac: "https://github.com/BlueBlizzardd/Landing-Page-1-Multimedia",
        ow: "https://github.com/BlueBlizzardd/Website--1-Multimedia",
        pets: "https://curious-concha-d8e4c1.netlify.app",
        salon: "https://peaceful-chaja-823c96.netlify.app"
    }

    const img: string = `/${page}.png`;

    return (
        <div className='garage'>
            <div className="d-flex garage-options">
                <div>
                    <a href={`${pages[page]}`}>
                        <MenuItem>O.K</MenuItem>
                    </a>
                    <Link to='/'>
                        <MenuItem>Exit</MenuItem>
                    </Link>
                </div>
            </div>
            <img src={img} />
        </div>
    )
}