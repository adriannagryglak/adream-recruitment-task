import '../styles/Header.scss';
import logo from '../assets/Logo.png';
import {ReactComponent as BtnArrowL} from '../assets/header/arrow-l.svg';
import {ReactComponent as BtnArrowR} from '../assets/header/arrow-r.svg';
import { FaFacebookF } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { useState } from 'react';
import bgImg1 from '../assets/header/bg-img-1.png';
import bgImg2 from '../assets/header/bg-img-2.png';
import bgImg3 from '../assets/header/bg-img-3.png';

export default function Header() {

    const images = [bgImg1, bgImg2, bgImg3];

    const [bgImg, setBgImg] = useState(images[0]);

    function nextSlide(){
        setBgImg((prevBg) => {
            let index = images.indexOf(prevBg) + 1;
            return images[index%images.length];
        });
    }

    function prevSlide(){
        setBgImg((prevBg) => {
            let index = images.indexOf(prevBg) === 0 ? images.length -1 : images.indexOf(prevBg) - 1;
            return images[index];
        });
    }

    let slideCurrent = images.length > 9 ? images.indexOf(bgImg)+1 : `0${images.indexOf(bgImg)+1}`
    let slideLast = images.length > 9 ? images.length : `0${images.length}`;
    let slideStripeGradient = 100 / images.length * (images.indexOf(bgImg) + 1);

  return (
        <header className="website-header" id="main_section" style={{backgroundImage: `url(${bgImg})`}}>
            <nav className="navigation">
                <img className="navigation__logo" src={logo} alt="company logo"></img>
                <ul className="navigation__menu">
                    <li className="navigation__menu--link"><a className='navigation__menu__link--a' href="#offices_section">Poznaj przestrzeń</a></li>
                    <li className="navigation__menu--link"><a className='navigation__menu__link--a' href="#offer_section">Oferta</a></li>
                    <li className="navigation__menu--link"><a className='navigation__menu__link--a' href="#gallery_section">Lokalizacja</a></li>
                    <li className="navigation__menu--link"><a className='navigation__menu__link--a' href="#details_section">Własne biuro</a></li>
                    <li className="navigation__menu--link"><a className='navigation__menu__link--a' href="#footer_section">Kontakt</a></li>
                    <li className="navigation__menu--link navigation__menu--link--icons">
                        <FaFacebookF className='navigation__menu--icon'/>
                        <BsInstagram className='navigation__menu--icon'/>   
                    </li>
                </ul>
            </nav>
            <h1 className="website-header__title">Firma</h1>
            <p className='website-header__caption'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor</p>
            <form className="contact-form">
                <h3 className='contact-form__title'>Lorem ipsum <br/> Lorem ipsum lorem ipsum</h3>
                <p className='contact-form__caption'>consectetur adipiscing elit. Ut auctor arcu</p>
                <fieldset className='contact-form__fieldset'>
                    <legend className='contact-form__legend'>Zostaw kontakt, zadzwonimy do Ciebie</legend>
                    <input className="contact-form__input" id='name' type="text" placeholder='Imię i nazwisko'></input>
                    <label className="contact-form__input--label" htmlFor='name'>Imię i nazwisko</label>
                    <input className="contact-form__input" id ='phone' type="number" placeholder='Telefon'></input>
                    <label className="contact-form__input--label" htmlFor='phone'>Telefon</label>
                    <input className="contact-form__input" id='email' type="email" placeholder='Email'></input>
                    <label className="contact-form__input--label" htmlFor='email'>Email</label>
                    <input className="contact-form__input" id='message' type="text" placeholder='Lorem ipsum lorem ipsum'></input>
                    <label className="contact-form__input--label" htmlFor='message'>Twoja wiadomość</label>
                    <div className='contact-form__agreements'>
                        <input type="checkbox" id="argree"className='contact-form__agreements--check'></input>
                        <label htmlFor='agree' className='contact-form__agreements--caption'>Wyrażam dobrowolną zgodę na przetwarzanie moich danych osobowych więcej...</label>
                    </div>
                    <button type='submit' className='contact-form__submit'>wyślij</button>
                </fieldset>
            </form>
            <div className="slider-nav">
                <button className="slider-nav__btn" onClick={prevSlide}><BtnArrowL /></button>
                <button className="slider-nav__btn " onClick={nextSlide}><BtnArrowR /></button>
                <div className='slider-nav__marker'>
                    <span className='slider-nav__marker--current'>{slideCurrent}</span> 
                    <div className={'slider-nav__marker--stripe'} 
                    style={{backgroundImage: `linear-gradient(
                                                to right, 
                                                #ffffff 0,
                                                #ffffff ${slideStripeGradient}%,
                                                #000000 ${slideStripeGradient}%,
                                                #000000 100%
                                                )`}}></div>
                    <span className='slider-nav__marker--last'>{slideLast}</span>
                </div>
            </div>
        </header>
  );
}
