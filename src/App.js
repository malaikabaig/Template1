import * as React from 'react';

import Nav from './components/navbar';
import Welcome from './components/welcome';
import Menu from './components/menu';
import Experience from './components/experience';
import Slider from './components/slider';
import Blog from './components/blog';
import Reviews from './components/customer';
import TopDest from './components/topdest';
import Footer from './components/footer';
function MyApp(props) {
  return (
    <>
      <Nav />
      <Menu />
      <Welcome />
      <Experience />
      <Slider />
      <Blog />
      <Reviews />
      <TopDest />
      <Footer />
    </>
  );
}

export default MyApp;
