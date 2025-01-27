import React from 'react';
import Navbar from './navbar';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <main className="content">{children}</main>
    </div>
  );
};

export default Layout;
