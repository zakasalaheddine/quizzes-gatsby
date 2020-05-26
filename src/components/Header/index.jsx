import React from 'react'
import { Link } from 'gatsby'
import './styles.scss'

const Header = ({ categories, logo, tagline }) => {


  return (
    <div className="navigation-bar">
      <header className="container ">
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <Link to='/'>
              <img src={logo}
                alt={tagline} />
            </Link>
          </div>
        </nav>
        <div className="nav-filters is-hidden-mobile">
          <ul className="items">
            {
              categories && categories.nodes.map(category => (
                <Link to={`/category/${category.slug}`} key={category.id}><li className="item">{category.name}</li></Link>
              ))
            }
            <Link to="/categories"><li className="item">Other Categories</li></Link>
          </ul>
        </div>
      </header>
    </div>
  )
}
export default Header;