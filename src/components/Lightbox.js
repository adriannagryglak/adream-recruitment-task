import '../styles/Lightbox.scss';
import { GrClose } from 'react-icons/gr';

export default function Lightbox(props) {

    return props.isLightbox ? 
        <div  className='gallery__lightbox h-100 w-100 fixed-top' >
            <GrClose onClick={props.handleLightboxOff} className="gallery__lightbox__close--icon m-4 position-absolute top-0 end-0" size="2em"/>
            <img className='gallery__lightbox__image' src={props.isLightbox} alt="" />
        </div> : null;
}