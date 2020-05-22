import React from 'react'
import { Link } from 'gatsby';

const Category = ({ item }) => {
  return (
    <div className="column is-one-third">
      <Link to={`/category/${item.slug}`}>
        <article className="category">
          <figure className="image">
            <img src={item.image.publicURL} alt={item.name} />
          </figure>
          <h2 className="title">{item.name}</h2>
        </article>
      </Link>
    </div>

  )
}
export default Category;