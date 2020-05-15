import React from 'react'
import { Link } from 'gatsby'
import './styles.scss'

const Header = () => {
  return (
    <header className="container">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link to='/'>
            <img src="https://bulma.io/images/bulma-logo.png"
              alt="Bulma: Free, open source, and modern CSS framework based on Flexbox"/>
          </Link>
        </div>
      </nav>
      <div className="nav-filters">
        <ul className="items">
          <li className="item">Top picks</li>
          <li className="item">New Quizzes</li>
          <li className="item">All Categories</li>
        </ul>
      </div>
    </header>
  )
}
export default Header;