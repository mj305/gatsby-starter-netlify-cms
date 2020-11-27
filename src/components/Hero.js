import React from 'react'
import PropTypes from 'prop-types'
import darkDivider from '../../static/img/icons/dark-divider.svg'
import whiteDivder from '../../static/img/icons/white-divider.svg'

const Hero = ({ image, title, subTitle, boxTitle, boxContent, half, dark }) => (
    <section className={half ? "hero is-info is-halfheight hero-section" : "hero is-info is-fullheight hero-section"}
      style={{
        background: `linear-gradient(70deg,#283d4b 0%,rgba(128,103,79,0.5) 100%),url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        }) no-repeat fixed center`,
        backgroundSize: 'cover'
      }}
    >
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="hero-title">
            <h1 className="title">
              {title}
            </h1>
            <h1 className="subtitle">
              {subTitle}
            </h1>
          </div>
          <a className="box is-background-success" href="tel:305-702-0113">
            <div className="content">
              <h5 className="has-text-white is-size-4">
                {boxTitle}
              </h5>
              <h5 className="has-text-white is-size-5">
                {boxContent}
              </h5>
            </div>
          </a>
        </div>
      </div>
      <div className="animation-divider"
        style={{
          backgroundImage: `url(${ dark ? darkDivider : whiteDivder})`,
        }}
      ></div>
    </section>
)

Hero.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default Hero
