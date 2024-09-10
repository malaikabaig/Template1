import * as React from 'react';

import Nav from './components/navbar';
import Welcome from './components/welcome';
import Menu from './components/menu';
import Experience from './components/experience';

function MyApp(props) {
  return (
    <>
      <Nav />
      <Menu />
      <Welcome />
      <Experience />
    </>
  );
}

export default MyApp;
