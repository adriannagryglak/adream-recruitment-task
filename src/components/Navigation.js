import '../styles/Navigation.scss';
import logo from '../assets/Logo.png';
import { FaFacebookF } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import {Nav, Navbar} from 'react-bootstrap'

export default function Navigation({sizes}){

    return sizes.isMedium ? (<nav className={sizes.isDesktop ? "navigation" : "navigation row"}>
    <div className='navigation__hamburger col-6 mt-3'>
        <Navbar variant="dark" height="50px" expand="lg"  className="" collapseOnSelect>
            <Navbar.Toggle/>
            <Navbar.Collapse>
            <Nav>
                <Nav.Link className='navigation__menu__link--a' href="#offices_section">Poznaj przestrzeń</Nav.Link>
                <Nav.Link className='navigation__menu__link--a' href="#offer_section">Oferta</Nav.Link>
                <Nav.Link className='navigation__menu__link--a' href="#gallery_section">Lokalizacja</Nav.Link>
                <Nav.Link className='navigation__menu__link--a' href="#details_section">Własne biuro</Nav.Link>
                <Nav.Link className='navigation__menu__link--a' href="#footer_section">Kontakt</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
    <img className={sizes.isDesktop ? "navigation__logo" : "navigation__logo col-6 col-sm-4 m-0 ms-auto mt-3"} src={logo} alt="company logo"></img>
</nav>) : (
    <nav className={sizes.isDesktop ? "navigation" : "navigation row"}>
        <img className={sizes.isDesktop ? "navigation__logo" : "navigation__logo col-2"} src={logo} alt="company logo"></img>
        <ul className={sizes.isDesktop ? "navigation__menu" : "navigation__menu col-6 col-md-12 m-0 mb-5"}>
            <li className="navigation__menu--link"><a className='navigation__menu__link--a' href="#offices_section">Poznaj przestrzeń</a></li>
            <li className="navigation__menu--link" ><a className='navigation__menu__link--a' href="#offer_section">Oferta</a></li>
            <li className="navigation__menu--link"><a className='navigation__menu__link--a' href="#gallery_section">Lokalizacja</a></li>
            <li className="navigation__menu--link"><a className='navigation__menu__link--a' href="#details_section">Własne biuro</a></li>
            <li className="navigation__menu--link"><a className='navigation__menu__link--a' href="#footer_section">Kontakt</a></li>
            <li className="navigation__menu--link navigation__menu--link--icons">
                <FaFacebookF className='navigation__menu--icon'/>
                <BsInstagram className='navigation__menu--icon'/>   
            </li>
        </ul>
    </nav>
);

}