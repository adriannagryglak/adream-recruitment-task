import "../styles/Article.scss";
import { useLocation } from "react-router-dom";
const DOMPurify = require("dompurify")(window);

export default function Article({ post }) {
  const months = [
    "stycznia",
    "lutego",
    "marca",
    "kwietnia",
    "maja",
    "czerwca",
    "lipca",
    "sierpnia",
    "września",
    "października",
    "listopada",
    "grudnia",
  ];

  const location = useLocation();
  const data = location.state;
  let date = data.date.slice(0, -9).split("-");
  date[1] = months[parseInt(date[1]) - 1];
  date = date.reverse().join(" ");
  const author = data._embedded.author[0].name;

  return (
    <article className="article container">
      <h1 className="article__title w-100 p-4 pt-5 pb-5">
        {data.title.rendered}
      </h1>
      <p className="ms-4 mt-4 mb-0 article__details">Opublikowano {date} r.</p>
      <p className="ms-4 mt-2 mb-4 article__details">przez {author}</p>
      <div
        className="p-4"
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(data.content.rendered),
        }}
      ></div>
    </article>
  );
}
