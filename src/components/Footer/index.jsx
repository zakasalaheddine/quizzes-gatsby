import React from 'react'
import './styles.scss'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="columns">
          <div className="column section">
            QUIZV.Com
          </div>
          <div className="column section">
            <h3 className="title">Links</h3>
            <ul>
              <li>Categories</li>
              <li>New Quizzes</li>
              <li>TOP Picks</li>
            </ul>
          </div>
          <div className="column section">
            <h3 className="title">Pages</h3>
            <ul>
              <li>About us</li>
              <li>Privacy Policy</li>
              <li>Terms of use</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer;