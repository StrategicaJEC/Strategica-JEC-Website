import React from 'react'
import { Link } from 'gatsby'

import SocialBar from '../components/SocialBar'

import './footer.css'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <img src="https://res.cloudinary.com/dog2bkgwo/image/upload/v1588403925/Logo/strategica-logo_sqscev.jpg" alt="strategica logo" style={{height: '10rem'}}/>
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/products">
                        Products
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/newsletter">
                        Newsletter
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Latest Stories
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/collaborations">
                        Collaborations
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/events">
                        Events
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/gallery">
                        Gallery
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social social-bar-footer">
                {/* <a title="facebook" href="https://facebook.com">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="twitter" href="https://twitter.com">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="instagram" href="https://instagram.com">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="vimeo" href="https://vimeo.com">
                  <img
                    src={vimeo}
                    alt="Vimeo"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a> */}
                <SocialBar/>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid copyright">
          <div className="row">
            <div className="col-md-6 text-left">
              <span className="pointer">
                © STRATEGICA 2020
                            </span>
            </div>
            <div className="col-md-6 pointer creators">
              Website by &nbsp;
                            <a href="https://www.linkedin.com/in/rishi-gogoi/" target="_blank" rel="noreferrer noopener">
                Rishparn Gogoi
                            </a>
                             &nbsp;&amp;&nbsp;
                            <a href="about:blank" target="_blank" rel="noreferrer noopener">
                Subhranan Bora
                            </a>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
