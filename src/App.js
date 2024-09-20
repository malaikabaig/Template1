import * as React from 'react';

import Nav from './components/navbar';
import Welcome from './components/welcome';
import Menu from './components/menu';
import Experience from './components/experience';
import Tour from './components/tour';
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
      <Tour />
      <Blog />
      <Reviews />
      <TopDest />
      <Footer />
    </>
  );
}

export default MyApp;
