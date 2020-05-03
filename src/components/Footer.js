import React from 'react'
import { Link } from 'gatsby'

import SocialBar from '../components/SocialBar'

import './footer.css'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <img src="https://res.cloudinary.com/dog2bkgwo/image/upload/v1588403925/Logo/strategica-logo_sqscev.jpg" alt="strategica logo" style={{ height: '10rem' }} />
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
                      <Link className="navbar-item" to="/newsletter">
                        Newsletter
                      </Link>
                    </li>
                    <li>
                      <a className="navbar-item" href="/admin">
                        Login
                      </a>
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
                <SocialBar />
        <div className="container-fluid text-center my-4">
          <div className="row justify-content-center align-items-center mb-2">
            <strong className="text-white">Sponsored by</strong>
          </div>
          <div className="row justify-content-center align-items-center">
            <a href="https://trusnetix.com/" target="_blank" rel="noreferrer noopener">
              <img src="https://res.cloudinary.com/dog2bkgwo/image/upload/v1588511737/Logo/trusnetix-logo_gv3dp9.jpg" alt="" style={{ height: '75px' }} />
            </a>
          </div>
        </div>
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
              Website developed by <span className="only-mobile"><br /></span> Rishparn Gogoi & Subhranan Bora
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
