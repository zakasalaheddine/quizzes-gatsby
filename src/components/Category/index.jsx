import React from 'react'
import { Link } from 'gatsby';
import Img from 'gatsby-image'

const Category = ({ item }) => {
  return (
    <div className="column is-one-quarter">
      <Link to={`/category/${item.slug}`}>
        <article className="category">
          <figure className="image">
            <Img fluid={item.image.childImageSharp.fluid} alt={item.name} />
          </figure>
        </article>
      </Link>
    </div>

  )
}
export default Category;