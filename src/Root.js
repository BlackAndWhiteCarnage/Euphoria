import { GlobalStyle } from 'components/GlobalStyles/GlobalStyles';
import Home from 'views/Home/Home';
import WhyMe from 'views/WhyMe/WhyMe';
import Contact from 'views/AreWeBuying/AreWeBuying';
import { ISlideConfig, PageSlides, SlideParallaxType } from 'react-page-slides';
import { Switch, Route } from 'react-router-dom';
import HamburgerMenu from 'assets/icons/HamburgerMenu.svg';
import SectionsWrapper from 'components/SectionsWrapper/SectionsWrapper';
import styled from 'styled-components';

const Root = () => {
  const slides: ISlideConfig[] = [
    {
      content: <Home />,
      style: {
        background: 'linear-gradient(#505050, #000000, #1d1d1d)',
      },
    },
    {
      content: <WhyMe />,
      style: {
        background: 'linear-gradient(#1d1d1d, #000000, #505050)',
      },
    },
    {
      content: <Contact />,
      style: {
        background: 'linear-gradient(#505050, #000000, #1d1d1d)',
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
              offset: 0.5,
              type: SlideParallaxType.cover,
            }}
          />
          <Hamburger src={HamburgerMenu} />
          <SectionsWrapper />
        </Route>
      </Switch>
    </>
  );
};

const Hamburger = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);
  margin-bottom: 2rem;
  @media screen and (min-width: 680px) {
    display: none;
  }
`;

export default Root;
