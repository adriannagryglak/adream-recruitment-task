import React, { Suspense } from "react";
import Header from "./Header";
import { useMediaPredicate } from "react-media-hook";

const Offices = React.lazy(() => import("./Offices"));
const Offer = React.lazy(() => import("./Offer"));
const Details = React.lazy(() => import("./Details"));
const News = React.lazy(() => import("./News"));
const Gallery = React.lazy(() => import("./Gallery"));
const Footer = React.lazy(() => import("./Footer"));

function App() {
  const sizes = {
    isDesktop: useMediaPredicate("(min-width: 992px)"),
    isMedium: useMediaPredicate("(max-width: 768px)"),
    isMobile: useMediaPredicate("(max-width: 576px)"),
  };

  return (
    <>
      <Header sizes={sizes} />
      <Suspense fallback={<div>Wczytywanie...</div>}>
        <Offices sizes={sizes} />
        <Offer sizes={sizes} />
        <Details sizes={sizes} />
        <News sizes={sizes} />
        <Gallery sizes={sizes} />
        <Footer sizes={sizes} />
      </Suspense>
    </>
  );
}

export default App;
