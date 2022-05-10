import '../styles/Gallery.scss';
import {ReactComponent as Arrow} from '../assets/gallery/arrow-r.svg';
import { useState } from 'react';
import img1 from '../assets/gallery/gallery1.png';
import img2 from '../assets/gallery/gallery2.png';
import img3 from '../assets/gallery/gallery3.png';
import img4 from '../assets/gallery/gallery4.png';
import img5 from '../assets/gallery/gallery5.png';
import img6 from '../assets/gallery/gallery6.png';


export default function Gallery() {

    const [isLeft, setIsLeft] = useState(true);

    function handleClick(side){
    setIsLeft(side === 'right' ? false : true);
    }

    return (
        <section className="gallery" id="gallery_section">
           <div className='gallery__container' 
                style={isLeft ? {transform: 'translateX(0)'} : {transform: 'translateX(calc(100vw - 100%)'}}>
            <h1  className='gallery__title'>Galeria</h1>
            <div className='gallery__image__container img1'>
                <img className="gallery__img" src={img1} alt='niebieskie fotele, ściana z roślin'/>
            </div>
            <div className='gallery__image__container img2'>
                <img className="gallery__img" src={img2} alt='recepcja w biurze, stojący rower'/>
            </div>
            <div className='gallery__image__container img3'>
                <img className="gallery__img" src={img3} alt='przestrzeń biurowa'/>
            </div>
            <div className='gallery__image__container img4'>
                <img className="gallery__img" src={img4} alt='stołówka'/>
            </div>
            <div className='gallery__image__container img5'>
                <img className="gallery__img" src={img5} alt='przestrzeń biurowa w stylu loftowym'/>
            </div>
            <div className='gallery__image__container img6'>
                <img className="gallery__img" src={img6} alt='mężczyzna przy laptopie'/>
            </div>
           </div>
           <button onClick={()=>handleClick('left')}className='gallery__button gallery__button--l' ><Arrow className='gallery__button__arrow--l'/></button>
           <button onClick={()=>handleClick('right')}className='gallery__button gallery__button--r' ><Arrow className='gallery__button__arrow--r'/></button>
        </section>
    );
}