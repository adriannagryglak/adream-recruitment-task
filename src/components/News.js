import "../styles/News.scss";

export default function News(props) {

const elements = props.data.map((el, i)=>{
  return (
    <div className="news__article" key={i}>
            <div className="news__article__container__img">
              <img className="news__article__img" alt={el.alt} src={el.img}></img>
            </div>
            <p className="news__article__date">{el.date}</p>
            <h3 className="news__article__title">{el.title}</h3>
            <a className="news__article__link" href="example-href">Więcej</a>
          </div>);
  });

  return (
    <section className={props.sizes.isMedium ? "news ml-auto ps-5 pe-5" : "news"}>
      <h1 className="news__title">Aktualności</h1>
      <div className="news__container">
        {elements}
      </div>
    </section>
  );
}
