import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.png'
import facebook from '../img/social/facebook.png'
import instagram from '../img/social/instagram.png'
import twitter from '../img/social/twitter.png'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="AAA Garage Door Logo Icon"
            style={{ width: '14em', height: '10em' }}
          />
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div style={{ maxWidth: '100vw' }} className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list"
                  style={{
                    fontSize: '1.2rem',
                  }}
                  >
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about" >
                        About
                      </Link>
                    </li>
{/*                     <li>
                      <Link className="navbar-item" to="/products" >
                        Products
                      </Link>
                    </li> */}

                    <li>
                      <a
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list"
                  style={{
                    fontSize: '1.2rem',
                  }}
                  >
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                <a title="facebook" href="https://www.facebook.com/AaaGarageDoorInc/" target="blank">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1.5em', height: '1.5em', }}
                  />
                </a>
                <a title="twitter" href="https://twitter.com/InfoGaragedoor" target="blank">
                  <img
                    src={twitter}
                    alt="Twitter"
                    sstyle={{ width: '1em', height: '1em', }}
                  />
                </a>
                <a title="instagram" href="https://www.instagram.com/miamioverhead/?hl=en" target="blank">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '1.5em', height: '1.5em', }}
                  />
                </a>
                
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
