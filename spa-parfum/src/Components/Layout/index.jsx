import React from 'react';
import PT from 'prop-types';

import Header from './Header';
import Footer from './Footer';

import './styles.css';

const Layout = ({ children }) => (
  <>
    <Header />
    <main className="main">{children}</main>
    <Footer />
  </>
);

Layout.propTypes = {
  children: PT.node.isRequired,
};

export default Layout;
