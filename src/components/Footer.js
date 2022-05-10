import '../styles/Footer.scss';
import logo from '../assets/Logo.png';
import adreamLogo from '../assets/footer/logo_adream.png';

export default function Footer() {
    return (
        <footer className='footer' id="footer_section">
            <img className='logo footer__logo' src={logo} alt="company logo"></img>
            <div className='footer__lists-container'>
                <ul className='footer__adress'>
                    <li className='footer__adress__detail'>ul. Towarowa 5/6</li>
                    <li className='footer__adress__detail'>31-000 Kraków</li>
                    <li className='footer__adress__detail footer__adress__detail--bold'>+48 999 999 999</li>
                    <li className='footer__adress__detail footer__adress__detail--bold' >email@email.com</li>
                </ul>
                <nav className='footer__menu'>
                    <li className='footer__menu__link'><a className='footer__menu__link--a' href="#main_section">Strona główna</a></li>
                    <li className='footer__menu__link'><a className='footer__menu__link--a' href="#offices_section">Poznaj przestrzeń</a></li>
                    <li className='footer__menu__link'><a className='footer__menu__link--a' href="#offer_section">Oferta</a></li>
                    <li className='footer__menu__link'><a className='footer__menu__link--a' href="#gallery_section">Lokalizacja</a></li>
                    <li className='footer__menu__link'><a className='footer__menu__link--a' href="#details_section">Własne biuro</a></li>
                    <li className='footer__menu__link'><a className='footer__menu__link--a' href="#footer_section">Kontakt</a></li>
                </nav>
            </div>
            <div className='footer__end'>
                <a href='example-href' className='footer__end--policy'>Polityka prywatności</a>
                <div className='footer__end__container'>
                    <span className='footer__end--designer'>Proudly designed by</span>
                    <img alt='ADream logo' src={adreamLogo}></img>
                </div>
            </div>
        </footer>
    );
}