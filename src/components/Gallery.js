import "../styles/Gallery.scss";
import { ReactComponent as Arrow } from "../assets/gallery/arrow-r.svg";
import { useState } from "react";
import img1 from "../assets/gallery/gallery1.png";
import img2 from "../assets/gallery/gallery2.png";
import img3 from "../assets/gallery/gallery3.png";
import img4 from "../assets/gallery/gallery4.png";
import img5 from "../assets/gallery/gallery5.png";
import img6 from "../assets/gallery/gallery6.png";
import Lightbox from "./Lightbox.js";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Gallery(props) {
  const [isLeft, setIsLeft] = useState(true);
  const [isLightbox, setIsLightbox] = useState(false);
  const images = [{src: img1, alt: "niebieskie fotele, na tle ściany z roślin", height: 888, width: 625},
                {src: img2, alt: "jasna recepcja biura, rower", height: 547, width: 770},
                {src: img3, alt: "przestrzeń biurowa, stoliki kawowe", height: 321, width: 770},
                {src: img4, alt: "kafeteria biurowa", height: 578, width: 800},
                {src: img5, alt: "przestrzeń biurowa, drewniane biurka", height: 288, width: 800},
                {src: img6, alt: "mężczyzna pracująćy na laptopie", height: 578, width: 438}];

  const elements = images.map((el, i) => {
    return (
      <div
        key={i}
        className={`gallery__image__container img${i + 1}`}
        onClick={() => {
          handleLightboxOn(el);
        }}
      >
        <LazyLoadImage
          className="gallery__img"
          alt={el.alt}
          height={el.height}
          src={el.src}
          width={el.width}
        />
      </div>
    );
  });

  function handleGallerySwipe(side) {
    setIsLeft(side === "right" ? false : true);
  }

  function handleLightboxOn(img) {
    setIsLightbox(img);
  }

  function handleLightboxOff() {
    setIsLightbox(false);
  }

  function handleNextLightbox() {
    setIsLightbox((prev) => {
      let index = images.indexOf(prev) + 1;
      return images[index % images.length];
    });
  }

  function handlePreviousLightbox() {
    setIsLightbox((prev) => {
      let index =
        images.indexOf(prev) === 0
          ? images.length - 1
          : images.indexOf(prev) - 1;
      return images[index];
    });
  }

  const galleryContainer = (
    <div
      className="gallery__container"
      style={
        isLeft
          ? { transform: "translateX(0)" }
          : { transform: "translateX(calc(100vw - 100%)" }
      }
    >
      <h1 className="gallery__title">Galeria</h1>
      {elements}
    </div>
  );

  return (
    <section className="gallery" id="gallery_section">
      <Lightbox isLightbox={isLightbox} handleLightboxOff={handleLightboxOff} />
      {galleryContainer}
      {(props.sizes.isDesktop ||
        !props.sizes.isMobile ||
        (props.sizes.isMobile && isLightbox)) && (
        <>
          <button
            onClick={
              isLightbox
                ? () => handlePreviousLightbox()
                : () => handleGallerySwipe("left")
            }
            className={
              isLightbox
                ? "gallery__button gallery__button--l position-fixed"
                : "gallery__button gallery__button--l"
            }
          >
            <Arrow className="gallery__button__arrow--l" />
          </button>
          <button
            onClick={
              isLightbox
                ? () => handleNextLightbox()
                : () => handleGallerySwipe("right")
            }
            className={
              isLightbox
                ? "gallery__button gallery__button--r position-fixed"
                : "gallery__button gallery__button--r"
            }
          >
            <Arrow className="gallery__button__arrow--r" />
          </button>
        </>
      )}
    </section>
  );
}
