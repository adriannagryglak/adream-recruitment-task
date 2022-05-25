import "../styles/Offer.scss";
import arrow from "../assets/offer/arrow.png";
import dreamjob from "../assets/offer/dreamjob.png";
import wallet from "../assets/offer/wallet.png";
import coffe from "../assets/offer/coffe.png";
import cabinet from "../assets/offer/cabinet.png";
import desk from "../assets/offer/desk.png";
import house from "../assets/offer/house.png";
import people from "../assets/offer/people.png";

export default function Offer({sizes}) {

  const data =[{title: 'Lorem ipsum', img: wallet, alt: 'ikona portfela'},
  {title: `Lorem ipsum \ndolor sit amet conse`, img: coffe, alt: "ikona dzbanek z kawą"},
  {title: 'Lorem ipsum \ndolor sit amet,', img: cabinet, alt: 'ikona szafka'},
  {title: 'Lorem ipsum \ndolor sit amet,', img: dreamjob, alt: 'ikona osoby pracującej na komputerze'},
  {title: 'Lorem ipsum dolor sit amet, conse lorem ipsum lorem', img: desk, alt: 'ikona biurka'},
  {title: 'Lorem ipsum dolor sit amet, conse lorem ipsum lorem', img: house, alt: 'ikona sieci domowej'},
  {title: 'Lorem ipsum dolor sit amet, conse lorem ipsum', img: people, alt: 'ikona ludzi'},];

  const elements = data.map((el, i)=>{
    return (
      <div className={sizes.isMedium ? "offer__container col-10 col-sm-5" : "offer__container" } key={i}>
          <div className="offer__container__image-container">
            <img src={el.img} alt={el.alt} className="offer__container__img"></img>
          </div>
          <p className="offer__container__caption">{el.title}</p>
        </div>
    );
  });

  return (
    <section className={sizes.isDesktop ? "offer" : "offer justify-content-center p-5 mb-5 row"} id="offer_section">

      <div className={sizes.isMedium ? "offer__container col-10 col-sm-5" : "offer__container" }>
        <h2 className="offer__title">Lorem ipsum dolor sit amet, conse</h2>
      </div>
      {elements}
      <button className={sizes.isMedium ? "offer__button mb-5 col-10" : "offer__button" }>
        dowiedz się wiecej
        {!sizes.isMobile && <img src={arrow} className="offer__button--img" alt="" />}
      </button>
    </section>
  );
}