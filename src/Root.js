import React, { useState } from 'react';
import styled from 'styled-components';
import Hamburger from 'components/Hamburger/Hamburger';
import SectionsWrapper from 'components/SectionsWrapper/SectionsWrapper';
import Home from 'views/Home/Home';
import WhyMe from 'views/WhyMe/WhyMe';
import AreWeBuying from 'views/AreWeBuying/AreWeBuying';
import Contact from 'views/Contact/Contact';
import Shop from 'views/Shop/Shop';
import { GlobalStyle } from 'components/GlobalStyles/GlobalStyles';
import { ISlideConfig, PageSlides, SlideParallaxType } from 'react-page-slides';
import { Switch, Route } from 'react-router-dom';

const Root = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [slide, setSlide] = useState(0);
  const [URL, setURL] = useState();

  const slides: ISlideConfig[] = [
    {
      content: <Home darkMode={darkMode} setDarkMode={setDarkMode} setSlide={setSlide} />,
      style: {
        background: darkMode ? 'linear-gradient(#E0E0E0, #B8B8B8, #E0E0E0)' : 'linear-gradient(#505050, #000000, #1d1d1d)',
      },
    },
    {
      content: <WhyMe darkMode={darkMode} setSlide={setSlide} />,
      style: {
        background: darkMode ? 'linear-gradient(#E7E7E7, #ffffff, #B9B9B9)' : 'linear-gradient(#000000, #1d1d1d, #505050)',
      },
    },
    {
      content: <AreWeBuying darkMode={darkMode} setSlide={setSlide} />,
      style: {
        background: darkMode ? 'linear-gradient(#D3D3D3, #ECECEC, #F3F3F3)' : 'linear-gradient(#1d1d1d, #000000, #505050)',
      },
    },
    {
      content: <Contact darkMode={darkMode} setSlide={setSlide} />,
      style: {
        background: darkMode ? 'linear-gradient(#CDCDCD, #B7B7B7, #FFFFFF)' : 'linear-gradient(#000000, #1d1d1d, #505050)',
      },
    },
  ];
  return (
    <>
      <GlobalStyle darkMode={darkMode} />
      <Switch>
        <Route path="/" exact>
          <SectionsWrapper darkMode={darkMode} setDarkMode={setDarkMode} slide={slide} setSlide={setSlide} setURL={setURL} />
          <Hamburger darkMode={darkMode} />
          <PageSlides
            // Fix bug cause firefox blocking scrolling after first scroll only on desktop browser
            enableAutoScroll={
              navigator.userAgent.toLowerCase().indexOf('firefox') > -1 && window.matchMedia('(min-width: 680px)').matches ? false : true
            }
            transitionSpeed={1000}
            slides={slides}
            currentSlideIndex={slide}
            parallax={{
              offset: 1,
              type: SlideParallaxType.cover,
            }}
          />
        </Route>
        <>
          <SectionsWrapper darkMode={darkMode} setDarkMode={setDarkMode} path="shop" setURL={setURL} />
          <Route path="/sklep">
            <Shop darkMode={darkMode} URL={URL} setURL={setURL} />
          </Route>
        </>
      </Switch>
    </>
  );
};

export default Root;
