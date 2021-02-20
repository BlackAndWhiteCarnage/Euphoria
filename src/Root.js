import React, { useState } from 'react';
import Hamburger from 'components/Hamburger/Hamburger';
import SectionsWrapper from 'components/SectionsWrapper/SectionsWrapper';
import Home from 'views/Home/Home';
import WhyMe from 'views/WhyMe/WhyMe';
import AreWeBuying from 'views/AreWeBuying/AreWeBuying';
import Contact from 'views/Contact/Contact';
import { GlobalStyle } from 'components/GlobalStyles/GlobalStyles';
import { ISlideConfig, PageSlides, SlideParallaxType } from 'react-page-slides';
import { Switch, Route } from 'react-router-dom';

const Root = () => {
  const [darkMode, setDarkMode] = useState(false);

  const slides: ISlideConfig[] = [
    {
      content: <Home darkMode={darkMode} setDarkMode={setDarkMode} />,
      style: {
        background: darkMode
          ? 'linear-gradient(#E7E7E7, #ffffff, #B9B9B9)'
          : 'linear-gradient(#505050, #000000, #1d1d1d)',
      },
    },
    {
      content: <WhyMe darkMode={darkMode} />,
      style: {
        background: darkMode
          ? 'linear-gradient(#E7E7E7, #ffffff, #B9B9B9)'
          : 'linear-gradient(#000000, #1d1d1d, #505050)',
      },
    },
    {
      content: <AreWeBuying darkMode={darkMode} />,
      style: {
        background: darkMode
          ? 'linear-gradient(#E7E7E7, #ffffff, #B9B9B9)'
          : 'linear-gradient(#1d1d1d, #000000, #505050)',
      },
    },
    {
      content: <Contact darkMode={darkMode} />,
      style: {
        background: darkMode
          ? 'linear-gradient(#E7E7E7, #ffffff, #B9B9B9)'
          : 'linear-gradient(#000000, #1d1d1d, #505050)',
      },
    },
  ];
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact>
          <PageSlides
            enableAutoScroll={true}
            transitionSpeed={1000}
            slides={slides}
            parallax={{
              offset: 1,
              type: SlideParallaxType.cover,
            }}
          />
          <Hamburger darkMode={darkMode} />
          <SectionsWrapper darkMode={darkMode} setDarkMode={setDarkMode} />
        </Route>
      </Switch>
    </>
  );
};

export default Root;
