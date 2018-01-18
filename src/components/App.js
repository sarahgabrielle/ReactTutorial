import React from 'react';

import Menu from './Navigations/Menu';
import Header from './Header';

import filters from '../mocks/filters';


import About from './About';
import Footer from './Footer';
import NavBar from './Navigations/Menus/NavBar';
import Books from './Books';

class App extends React.Component {
  constructor () {
    super();
    
    this.toggleMenu = this.toggleMenu.bind(this);
    this.state = {
      filters,
      menu: { open: false }
    };
  }

  toggleMenu () {
    this.setState({ menu: { open: !this.state.menu.open } });
  }



  render() {
    const { menu } = this.state;

    return (
      <div id="page-wrap">
        <Menu
          pageWrapId="page-wrap"
          isOpen={ menu.open }
          toggleMenu={ this.toggleMenu }
        />
        <NavBar
          toggleMenu={ this.toggleMenu }
        />
        <Header title="Library" />
        <Books/>
        <About />
        <Footer />
      </div>
    );
  }
}

export default App;
