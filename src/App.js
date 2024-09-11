import * as React from 'react';

import Nav from './components/navbar';
import Welcome from './components/welcome';
import Menu from './components/menu';
import Experience from './components/experience';
import Slider from './components/slider';
import Blog from './components/blog';

function MyApp(props) {
  return (
    <>
      <Nav />
      <Menu />
      <Welcome />
      <Experience />
      <Slider />
      <Blog />
    </>
  );
}

export default MyApp;
