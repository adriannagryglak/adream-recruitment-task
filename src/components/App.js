import React, { Suspense } from "react";
import Header from "./Header";
import { useMediaPredicate } from "react-media-hook";
import Article from "./Article";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import { LazyLoadComponent } from "react-lazy-load-image-component";

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
    <ScrollToTop>
      <Routes>
        <Route path="/:id" element={<Article />} />
        <Route
          index
          element={
            <>
              <Header sizes={sizes} />
              <Suspense fallback={<div>Wczytywanie...</div>}>
                <Offices sizes={sizes} />
                <Offer sizes={sizes} />
                <Details sizes={sizes} />
                <LazyLoadComponent>
                  <News sizes={sizes} />
                </LazyLoadComponent>
                <Gallery sizes={sizes} />
                <Footer sizes={sizes} />
              </Suspense>
            </>
          }
        />
      </Routes>
    </ScrollToTop>
  );
}

export default App;
