import Header from "./Header";
import Offices from "./Offices";
import Offer from "./Offer";
import Details from "./Details";
import News from "./News";
import Gallery from "./Gallery";
import Footer from "./Footer";
import { useMediaPredicate } from "react-media-hook";
import newsImg1 from "../assets/news/news1.jpg";
import newsImg2 from "../assets/news/news2.jpg";
import newsImg3 from "../assets/news/news3.png";
import dreamjob from "../assets/offer/dreamjob.png";
import wallet from "../assets/offer/wallet.png";
import coffe from "../assets/offer/coffe.png";
import cabinet from "../assets/offer/cabinet.png";
import desk from "../assets/offer/desk.png";
import house from "../assets/offer/house.png";
import people from "../assets/offer/people.png";


function App() {

  const officesData = [
    { title: "Biuro", price: "od 1000 zł/msc" },
    { title: "Lorem ipsum", price: "od 500 zł/msc" },
    { title: "Biuro lorem", price: "od 100 zł/h" },
    { title: "Biuro lorem ipsum Lorem", price: "od 100 zł/h" },
  ];

  const newsData = [
    {date: "01.01.2021", title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", img: newsImg1, alt: 'recepcjonistka'},
    {date: "01.01.2021", title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", img: newsImg2, alt: 'biuro'},
    {date: "01.01.2021", title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", img: newsImg3, alt: 'stołówka'},];

  const offerData =[{title: 'Lorem ipsum', img: wallet, alt: 'ikona portfela'},
  {title: `Lorem ipsum \ndolor sit amet conse`, img: coffe, alt: "ikona dzbanek z kawą"},
  {title: 'Lorem ipsum \ndolor sit amet,', img: cabinet, alt: 'ikona szafka'},
  {title: 'Lorem ipsum \ndolor sit amet,', img: dreamjob, alt: 'ikona osoby pracującej na komputerze'},
  {title: 'Lorem ipsum dolor sit amet, conse lorem ipsum lorem', img: desk, alt: 'ikona biurka'},
  {title: 'Lorem ipsum dolor sit amet, conse lorem ipsum lorem', img: house, alt: 'ikona sieci domowej'},
  {title: 'Lorem ipsum dolor sit amet, conse lorem ipsum', img: people, alt: 'ikona ludzi'},];

  
  const sizes = {isDesktop: useMediaPredicate("(min-width: 992px)"),
                 isMedium: useMediaPredicate("(max-width: 768px)"),
                 isMobile:  useMediaPredicate("(max-width: 576px)")};

  return (
    <>
      <Header sizes={sizes}/>
      <Offices data={officesData} sizes={sizes} />
      <Offer data={offerData} sizes={sizes}/>
      <Details sizes={sizes}/>
      <News data={newsData} sizes={sizes}/>
      <Gallery sizes={sizes} />
      <Footer sizes={sizes}/>
    </>
  );
}

export default App;
