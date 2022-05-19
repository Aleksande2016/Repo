import React from 'react';
import PT from 'prop-types';

import Header from './Header';

const Layout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <footer>Footer</footer>
  </>
);

Layout.propTypes = {
  children: PT.node.isRequired,
};

export default Layout;
