import React from 'react'
import { Link } from 'gatsby';
import Img from 'gatsby-image'
import './styles.scss'

const Footer = ({ categories, pages, logo, tagline, description }) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="columns">
          <div className="column section infos">
            <figure className="image is-128x128">
              <Img fluid={logo.childImageSharp.fluid} alt={tagline} />
            </figure>
            <p>{description}</p>
          </div>
          <div className="column section">
            <h3 className="title">CATEGORIES</h3>
            <ul>
              <Link to="/categories"><li className="item">All Categories</li></Link>
              {
                categories && categories.nodes.map(category => (
                  <Link to={`/category/${category.slug}`} key={category.id}><li className="item">{category.name}</li></Link>
                ))
              }
            </ul>
          </div>
          <div className="column section">
            <h3 className="title">Pages</h3>
            <ul>
              {
                pages && pages.nodes.map(page => (
                  <Link to={`/${page.slug}`} key={page.id}><li className="item">{page.title}</li></Link>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer;