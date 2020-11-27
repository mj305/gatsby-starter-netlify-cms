import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.png'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav className="navbar is-transparent" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" href="/">
            <img src={logo} alt="AAA Garage Door Inc Same Day Service Miami Dade Broward Palm Beach" width="150" height="50" />
          </Link>
          <a role="button" className={`navbar-burger burger ${this.state.navBarActiveClass}`} onClick={this.toggleHamburger} aria-label="menu" aria-expanded="false" data-target="navbarExampleTransparentExample">
            <span></span>
            <span></span>
            <span></span>
          </a>
        </div>
      
        <div id="navbarExampleTransparentExample" className={`navbar-menu ${this.state.navBarActiveClass}`}>
          <div className="navbar-start">
            <div className="navbar-item has-dropdown is-hoverable">
              <Link className="navbar-link" href="#">
                Residential Services
              </Link>
              <div className="navbar-dropdown is-boxed">
                <Link 
                    style={{
                      fontSize: '1rem',
                      fontWeight: '600',
                  }}
                className="navbar-item" href="#">
                  Residential Doors
                </Link>

                <hr className="navbar-divider"/>

                <Link 
                  style={{
                    fontSize: '1rem',
                    fontWeight: '600',
                }}
                className="navbar-item" href="#">
                  Garage Door Openers
                </Link>

                
                <Link className="navbar-item" href="#">
                  Jack Shaft Openers
                </Link>
                <Link className="navbar-item" href="#">
                  Chain Openers
                </Link>
                <Link className="navbar-item" href="#">
                  Belt Drive Openers
                </Link>
              </div>            
            </div>
            <Link className="navbar-item" href="/commercial">
              Commercial 
            </Link>

            <Link className="navbar-item" href="/gate-repair">
              Gate Repair
            </Link>

            <Link className="navbar-item" href="/blog">
              Blog
            </Link>

            <Link className="navbar-item" href="/about">
              About
            </Link>

            <Link className="navbar-item" href="/contact">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
