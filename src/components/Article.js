import "../styles/Article.scss";
import { useLocation } from "react-router-dom";

export default function Article() {
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
  //removing paragraph tags from wp content format
  const content = data.content.rendered.slice(4, -5);
  let date = data.date.slice(0, -9).split("-");
  date[1] = months[parseInt(date[1]) - 1];
  date = date.reverse().join(" ");
  const author = data.author === 1 ? "Janina Kowalska" : "autor nieznany";

  return (
    <article className="container pt-5 pb-5">
      <h1>{data.title.rendered}</h1>
      <p className="mt-5 mb-5 w-50">{content}</p>
      <p>Opublikowano {date} r.</p>
      <p>
        przez <span>{author}</span>
      </p>
    </article>
  );
}
