import "../styles/Offer.scss";
import arrow from "../assets/offer/arrow.png";

export default function Offer(props) {

  const elements = props.data.map((el, i)=>{
    return (
      <div className="offer__container" key={i}>
          <div className="offer__container__image-container">
            <img src={el.img} alt={el.alt} className="offer__container__img"></img>
          </div>
          <p className="offer__container__caption">{el.title}</p>
        </div>
    );
  });

  return (
    <section className="offer" id="offer_section">

      <div className="offer__container">
        <h2 className="offer__title">Lorem ipsum dolor sit amet, conse</h2>
      </div>
      {elements}
      <button className="offer__button">
        dowiedz się wiecej
        <img src={arrow} className="offer__button--img" alt="" />
      </button>
    </section>
  );
}