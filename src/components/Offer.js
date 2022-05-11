import "../styles/Offer.scss";
import arrow from "../assets/offer/arrow.png";

export default function Offer(props) {

  const elements = props.data.map((el, i)=>{
    return (
      <div className={props.sizes.isMedium ? "offer__container col-10 col-sm-5" : "offer__container" } key={i}>
          <div className="offer__container__image-container">
            <img src={el.img} alt={el.alt} className="offer__container__img"></img>
          </div>
          <p className="offer__container__caption">{el.title}</p>
        </div>
    );
  });

  return (
    <section className={props.sizes.isDesktop ? "offer" : "offer justify-content-center p-5 mb-5 row"} id="offer_section">

      <div className={props.sizes.isMedium ? "offer__container col-10 col-sm-5" : "offer__container" }>
        <h2 className="offer__title">Lorem ipsum dolor sit amet, conse</h2>
      </div>
      {elements}
      <button className={props.sizes.isMedium ? "offer__button mb-5 col-10" : "offer__button" }>
        dowiedz się wiecej
        {!props.sizes.isMobile && <img src={arrow} className="offer__button--img" alt="" />}
      </button>
    </section>
  );
}