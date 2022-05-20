import '../styles/Header.scss';
import {ReactComponent as BtnArrowL} from '../assets/header/arrow-l.svg';
import {ReactComponent as BtnArrowR} from '../assets/header/arrow-r.svg';
import { useState, useEffect } from 'react';
import bgImg1 from '../assets/header/bg-img-1.png';
import bgImg2 from '../assets/header/bg-img-2.png';
import bgImg3 from '../assets/header/bg-img-3.png';
import Navigation from './Navigation.js';
import ContactForm from './ContactForm.js';
// import { ProgressBar } from 'react-bootstrap';

export default function Header({sizes}) {

    const images = [bgImg1, bgImg2, bgImg3];
    const [bgImg, setBgImg] = useState(images[0]);

    useEffect(() => {
        const interval = setInterval(() => {
        nextSlide();
        }, 3000);

        return () => clearInterval(interval);
      });

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

    // another way, of animating (less visually-intuitive) slider nav stripe (instead of ProgressBar) but with less code and none imprefect styling commented below 
     let animateClass = images.indexOf(bgImg) === 0 ? 'first' : images.indexOf(bgImg) === 1 ? 'second' : 'third';
    
    return (
        <header className="website-header" id="main_section" style={{backgroundImage: `url(${bgImg})`}}>
            <Navigation sizes={sizes}/> 
            <h1 className={sizes.isDesktop ? "website-header__title" : "website-header__title mt-5 mb-5"}>Firma</h1>
            <p className='website-header__caption w-75'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor</p>
            <ContactForm sizes={sizes}/>
             <div className={sizes.isMedium ? "slider-nav col-12 justify-content-between" : "slider-nav"}>
                <button className="slider-nav__btn" onClick={prevSlide} alt="poprzednie zdjęcie w tle"><BtnArrowL /></button>
                <button className="slider-nav__btn" onClick={nextSlide} alt="następne zdjęcie w tle"><BtnArrowR /></button>
                { !sizes.isMedium && <div className='slider-nav__marker' >
                    <span className='slider-nav__marker--current'>{slideCurrent}</span>
                    {/* <ProgressBar className="slider-nav__progress-bar" now={images.indexOf(bgImg)} max={2} min={-1} label={`indicator to background change, every 3 seconds`} visuallyHidden style={{width: "70%", height: "6px", borderRadius: "0"}}></ProgressBar> */}
                    <div className={`slider-nav__marker--stripe ${animateClass}`}></div>
                    <span className='slider-nav__marker--last'>{slideLast}</span>
                </div>}
            </div>
            
        </header>
  );
}