import React from 'react'

import '../../app.scss';
import Header from '../Header';
import Footer from '../Footer';
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="container main">
        {children}
      </main>
      <Footer />
    </>
  )
}
export default Layout;