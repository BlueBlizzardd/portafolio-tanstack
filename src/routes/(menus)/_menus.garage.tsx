import { createFileRoute, Link } from '@tanstack/react-router'
import '../../styles/garage.css'
import { pageNames, Pages, PageURLs } from '../../types/pages';
import MenuItem from '../../components/menu-item';
import TextBox from '../../components/text-box';
import DialogBox from '../../components/dialog-box';

export const Route = createFileRoute('/(menus)/_menus/garage')({
    validateSearch: (search: Record<string, unknown>): { page: Pages } => {
        return {
            page: search?.page as Pages ?? 'cafe'
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
        salon: "https://peaceful-chaja-823c96.netlify.app",
        pronto: "https://prontopizzacantaclaro.netlify.app/home"
    }

    const pageID = pageNames.indexOf(page);

    const img: string = `/${page}.png`;

    return (
        <DialogBox scope='garage' backgroundColor={{ '--dialog-bg': 'darkslategrey' }}>
            <div className="d-flex garage-options">
                <div className='garage-links'>
                    <a href={`${pages[page]}`}>
                        <MenuItem>O.K</MenuItem>
                    </a>
                    <Link to='/'>
                        <MenuItem>Exit</MenuItem>
                    </Link>
                </div>
                <div className="d-flex garage-navigation">
                    <Link
                        to='.'
                        search={{ page: pageNames.at(pageID - 1) }}
                        onKeyUp={event => {
                            event.preventDefault();
                            if (event.key === 'ArrowLeft')
                                event.currentTarget.click();
                        }}
                        className='arrow'>
                    </Link>
                    <div className="divider"></div>
                    <Link
                        to='.'
                        search={{ page: pageNames.at(pageID + 1) }}
                        onKeyUp={(event) => {
                            event.preventDefault();
                            if (event.key === 'ArrowRight')
                                event.currentTarget.click();
                        }}
                        className='arrow'>
                    </Link>
                </div>
            </div>
            <img src={img} />
            <TextBox title='Car data'>
                <table className="title img-info">
                    <tbody>
                        <tr>
                            <td data-label="Maker name">Eduardo [VE]</td>
                            <td data-label="Car name">{page.toUpperCase()}</td>
                            <td data-label="Stage">01</td>
                        </tr>
                        <tr>
                            <td data-label="Team name">None</td>
                            <td data-label="Max speed">{`10${pageID}`} mPH</td>
                            <td data-label="Type">Drift</td>
                        </tr>
                    </tbody>
                </table>
            </TextBox>
        </DialogBox>
    )
}