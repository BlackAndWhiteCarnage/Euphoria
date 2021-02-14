import { GlobalStyle } from 'components/GlobalStyles/GlobalStyles';
import Home from 'views/Home/Home';
import WhyMe from 'views/WhyMe/WhyMe';
import { ISlideConfig, PageSlides, SlideParallaxType } from 'react-page-slides';
import { Switch, Route } from 'react-router-dom';
import Hamburger from 'components/Hamburger/Hamburger';
import Nav from 'components/Nav/Nav';

const Root = () => {
  const slides: ISlideConfig[] = [
    {
      content: <Home />,
    },
    {
      content: <WhyMe />,
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
              offset: 0.6,
              type: SlideParallaxType.reveal,
            }}
          />
          <Hamburger />
          <Nav />
        </Route>
      </Switch>
    </>
  );
};

export default Root;
