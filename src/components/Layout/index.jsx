import React from 'react'

import '../../app.scss';
import Header from '../Header';
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="container main">
        {children}
      </main>
      <footer>
        Footer
      </footer>
    </>
  )
}
export default Layout;