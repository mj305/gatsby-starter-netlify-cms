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
      <nav className="navbar is-transparent">
      <div className="navbar-brand">
        <Link className="navbar-item" href="/">
          <img src={logo} alt="AAA Garage Door Inc Same Day Service Miami Dade Broward Palm Beach" width="112" height="28" />
        </Link>
        <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    
      <div id="navbarExampleTransparentExample" className="navbar-menu">
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

              <div 
                style={{
                  fontSize: '1rem',
                  fontWeight: '600',
              }}
              className="navbar-item" href="#">
                Garage Door Openers
              </div>

              
              <Link className="navbar-item">
                Jack Shaft Openers
              </Link>
              <Link className="navbar-item">
                Chain Openers
              </Link>
              <Link className="navbar-item">
                Belt Drive Openers
              </Link>
            </div>

          <Link className="navbar-item" href="#">
            Commercial 
          </Link>

          <Link className="navbar-item" href="#">
            Gate Repair
          </Link>

          <Link className="navbar-item" href="#">
            Blog
          </Link>

          <Link className="navbar-item" href="#">
            About
          </Link>

          <Link className="navbar-item" href="#">
            Contact
          </Link>
          </div>
        </div>
      </div>
    </nav>
    )
  }
}

export default Navbar
