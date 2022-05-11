import "../styles/Offices.scss";
import { ReactComponent as Arrow } from "../assets/offices/arrow.svg";
import { useMediaPredicate } from "react-media-hook";

export default function Offices(props) {
  const isMedium = useMediaPredicate("(max-width: 768px");

  const elements = props.data.map((el, i) => {
    return (
      <div className="category__container" key={i}>
        <div className={props.isMedium ? "category__container__header m-3 m-sm-4 w-50" : "category__container__header"}>
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
    <section className={isMedium ? "offices container w-md-75 w-100" : "offices" } id="offices_section">
      {elements}
    </section>
  );
}
