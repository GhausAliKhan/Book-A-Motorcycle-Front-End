import React from 'react';
import Title from './navComponents/Title';
import Menu from './navComponents/Menu';
import Footer from './navComponents/Footer';
import '../styles/Navbar.css';

const Navbar = () => (
  <>
    <nav className="navContainer controlVisibility">
      <Title />
      <Menu />
      <Footer />
    </nav>
  </>
);

export default Navbar;
