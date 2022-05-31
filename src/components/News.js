import "../styles/News.scss";
import newsImg1 from "../assets/news/news1.jpg";
import newsImg2 from "../assets/news/news2.jpg";
import newsImg3 from "../assets/news/news3.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function News({ sizes }) {
  const images = [newsImg1, newsImg2, newsImg3];
  const [posts, setPosts] = useState([]);
  const [fallbackMessage, setFallbackMessage] = useState(null);


  const elements = posts.map((post, i) => {
    const date = post.date.slice(0, 10).split("-").reverse().join(".");
    
    return (
      <div className="news__article" key={i}>
        <div className="news__article__container__img">
          <img
            className="news__article__img"
            alt="zdjęcie-okładka artykułu"
            src={images[i]}
          ></img>
        </div>
        <p className="news__article__date">{date}</p>
        <h3 className="news__article__title">{post.title.rendered}</h3>
        <Link
          to={`/article-${i}`}
          className="news__article__link"
          alt="link do pełnej wersji artykułu"
          state={post}
        >
          Więcej
        </Link>
      </div>
    );
  });
  
  useEffect(() => {
    async function loadPosts() {
      const response = await fetch(
        "http://127.0.0.1/wordpress//wp-json/wp/v2/posts?_embed"
      );
      if (!response.ok) {
        setFallbackMessage("Przepraszamy niestety, coś poszło nie tak.");
        return;
      }
      const posts = await response.json();
      setPosts(posts);
    }
    loadPosts();
  }, []);

  return (
    <section className={sizes.isMedium ? "news ml-auto ps-5 pe-5" : "news"}>
      <h1 className="news__title">Aktualności</h1>
      <div className="news__container">
        <p>{fallbackMessage}</p>
        {elements}
      </div>
    </section>
  );
}
