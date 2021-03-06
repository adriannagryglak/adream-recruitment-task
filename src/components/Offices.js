import "../styles/Offices.scss";
import { ReactComponent as Arrow } from "../assets/offices/arrow.svg";

export default function Offices({sizes}) {

  const data = [
    { title: "Biuro", price: "od 1000 zł/msc" },
    { title: "Lorem ipsum", price: "od 500 zł/msc" },
    { title: "Biuro lorem", price: "od 100 zł/h" },
    { title: "Biuro lorem ipsum Lorem", price: "od 100 zł/h" },
  ];

  const elements = data.map((el, i) => {
    return (
      <div className="category__container" key={i}>
        <div className={sizes.isMedium ? "category__container__header m-3 m-sm-4 w-50" : "category__container__header"}>
          <h3 className="category__title">{el.title}</h3>
          <p className="category__caption">{el.price}</p>
        </div>
        <button className="category__container__btn">
          <Arrow className="category__container__btn--arrow" />
        </button>
      </div>
    );
  });

  return (
    <section className={sizes.isMedium ? "offices container w-md-75 w-100" : "offices" } id="offices_section">
      {elements}
    </section>
  );
}
