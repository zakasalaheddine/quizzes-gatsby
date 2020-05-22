import React from 'react'
import { Link } from 'gatsby';

const Category = ({ item }) => {
  return (
    <div className="column is-one-quarter">
      <Link to={`/category/${item.slug}`}>
        <article className="category">
          <figure className="image">
            <img src={item.image.publicURL} alt={item.name} />
          </figure>
        </article>
      </Link>
    </div>

  )
}
export default Category;