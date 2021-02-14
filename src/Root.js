import { GlobalStyle } from 'components/styles/GlobalStyles';
import Home from 'views/Home';
import { ISlideConfig, PageSlides, SlideParallaxType } from 'react-page-slides';
import { Switch, Route } from 'react-router-dom';

const Root = () => {
  const slides: ISlideConfig[] = [
    {
      content: <Home />,
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
        </Route>
      </Switch>
    </>
  );
};

export default Root;
