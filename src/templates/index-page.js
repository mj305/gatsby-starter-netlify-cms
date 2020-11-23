import React from 'react'
import PropTypes, { string } from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import Openers from '../components/Openers'
import BlogRoll from '../components/BlogRoll'

import commercial from '../../static/img/commercial.png'
import house from '../../static/img/house.png'
import key from '../../static/img/key.png'
import secondViewPortHome from '../../static/img/secondViewPortHome.jpg'
import users from '../../static/img/users.png'
import like from '../../static/img/like.png'
import time from '../../static/img/time.png'
import award from '../../static/img/award.png'
import shake from '../../static/img/shake.png'
import calendar from '../../static/img/calendar.png'

import "../styles/index.sass"

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  subheading2,
  subheading3,
  mainpitch,
  description,
  intro,
  openers
}) => (
  <div>
    <section className="hero is-info is-fullheight top-section"
      style={{
        background: `linear-gradient(70deg,#283d4b 0%,rgba(128,103,79,0.5) 100%),url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        }) no-repeat fixed center`,
        backgroundSize: 'cover'
      }}
    >
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title is-size-2">
            {title}
          </h1>
          <h1 className="subtitle">
            {subheading}
          </h1>
          <a className="box is-background-success" href="tel:305-702-0113">
            <div className="content">
              <h5 className="has-text-white">
                {subheading2}
              </h5>
              <h5 className="has-text-white">
                {subheading3}
              </h5>
            </div>
          </a>
        </div>
      </div>
    </section>

    <section className="hero line-section"></section>

    <section className="tab-section">
      <div id="tabs-with-content">
        <div class="tabs is-centered">
          <ul>
            <li class="is-active"><a href="/#">How Much Would It Cost?</a></li>
            <li><a href="/#">I Need Door Repair Services</a></li>
            <li><a href="/#">I Need A New Garage Door</a></li>
            <li><a href="/#">Schedule Annual Tune Up </a></li>
          </ul>        
        </div>

        <div>
          <section class="tab-content">Pictures content</section>
          <section class="tab-content">Music content</section>
          <section class="tab-content">Videos content</section>
          <section class="tab-content">Documents content</section>
        </div>
      </div>
    </section>

    <section
      className="hero is-info is-fullheight wedo-section"
      style={{
        background: `url(${secondViewPortHome}) no-repeat fixed center`
      }}
    >
      <div className="section">
        <div className="columns">
          <div className="column is-6 is-offset-3 has-text-centered">
            <h1 className="title is-size-2">
              {mainpitch.title}
            </h1>
            <h1 className="subtitle has-text-weight-bold">
              {mainpitch.description}
            </h1>
          </div>
        </div>
        <div className="row columns is-multiline">
          <div className="column is-3 residential">
            <div className="card has-text-white">
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-48x48">
                      <img alt="" src={house} />
                    </figure>
                  </div>
                  <div className="media-content">
                    <h1 className="card-header-title has-text-white">RESIDENTIAL</h1>
                  </div>
                </div>
                <div className="content">
                  <p>Huge variety of hurricane garage doors surpass all requirements to protect your Home and loved ones.</p>
                  <p className="has-text-weight-bold is-uppercase">Learn more</p>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-3 commercial">
            <div className="card has-text-white">
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-48x48">
                      <img alt="" src={commercial} />
                    </figure>
                  </div>
                  <div className="media-content">
                    <h1 className="card-header-title has-text-white">COMMERCIAL</h1>
                  </div>
                </div>
                <div className="content">
                  <p>AAA Garage Door Inc. Services and repairs all major brands of overhead commercial garage doors and motors.</p>
                  <p className="has-text-weight-bold is-uppercase">Learn more</p>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-3 entry-systems">
            <div className="card has-text-white">
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-48x48">
                      <img alt="" src={key} />
                    </figure>
                  </div>
                  <div className="media-content">
                    <h1 className="card-header-title has-text-white">ENTRY SYSTEMS</h1>
                  </div>
                </div>
                <div className="content">
                  <p>We specialize in access control solutions Telephone Entry Systems; Door/Gate Access Controllers.</p>
                  <p className="has-text-weight-bold is-uppercase">Learn more</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a className="box is-background-success has-text-centered" href="tel:305-702-0113">
        <div className="content">
          <h5 className="has-text-white">
            {subheading2}
          </h5>
          <h5 className="has-text-white">
            {subheading3}
          </h5>
        </div>
      </a>
    </section>

    <section className="hero is-fullheight reason-section">
      <div className="section">
        <div className="columns header">
          <div className="column is-6 is-offset-3 has-text-centered">
            <h1 className="title is-size-2">
              AAA Garage Door
            </h1>
            <h1 className="subtitle has-text-weight-bold">
              Great Reasons To Hire Us?
            </h1>
          </div>
        </div>
        <div className="row columns is-multiline">
          <div className="column is-3 residential">
            <div className="card">
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-48x48">
                      <img alt="" src={time} />
                    </figure>
                  </div>
                  <div className="media-content">
                    <h1 className="card-header-title">AVAILABLE 'ROUND THE CLOCK</h1>
                  </div>
                </div>
                <div className="content">
                  <p>Accessibility at your fingertips with world class emergency service when you need it most.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-3 commercial">
            <div className="card">
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-48x48">
                      <img alt="" src={like} />
                    </figure>
                  </div>
                  <div className="media-content">
                    <h1 className="card-header-title">SATISFACTION GUARANTEED</h1>
                  </div>
                </div>
                <div className="content">
                  <p>Our intergrity, sturdy against any compromise of quality, or saftey regarding work preformed.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-3 entry-systems">
            <div className="card">
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-48x48">
                      <img alt="" src={users} />
                    </figure>
                  </div>
                  <div className="media-content">
                    <h1 className="card-header-title">FREE CONSULTATIONS</h1>
                  </div>
                </div>
                <div className="content">
                  <p>Free on-site estimates for the opportunity to earn your business on all new garage doors.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row columns is-multiline second-row">          
          <div className="column is-3 residential">
            <div className="card">
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-48x48">
                      <img alt="" src={award} />
                    </figure>
                  </div>
                  <div className="media-content">
                    <h1 className="card-header-title">QUALIFIED EXPERTS</h1>
                  </div>
                </div>
                <div className="content">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-3 commercial">
            <div className="card">
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-48x48">
                      <img alt="" src={shake} />
                    </figure>
                  </div>
                  <div className="media-content">
                    <h1 className="card-header-title">WORKMANSHIP & PARTS WARRANTIED</h1>
                  </div>
                </div>
                <div className="content">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-3 entry-systems">
            <div className="card">
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-48x48">
                      <img alt="" src={calendar} />
                    </figure>
                  </div>
                  <div className="media-content">
                    <h1 className="card-header-title">Service On Your Schedule</h1>
                  </div>
                </div>
                <div className="content">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="hero is-fullheight doors-section">        
      <div className="container">
        <div className="column is-12">
          <div className="columns is-centered header">
            <div className="column is-10">
              <h1 className="title is-size-2 is-size-2 has-text-centered">
                {heading}
              </h1>
              <h1 className="subtitle">
                {description}
              </h1>
            </div>
          </div>
          <Features gridItems={intro.blurbs} />
        </div> 
      </div>
    </section>

    <section className="hero is-fullheight doors-section">        
      <div className="container">
        <div className="column is-12">
          <div className="columns is-centered header">
            <div className="column is-10">
              <h1 className="title is-size-2 is-size-2 has-text-centered">
                {openers.heading}
              </h1>
              <h1 className="subtitle has-text-weight-bold has-text-centered">
                {openers.subheading}
              </h1>
              <h1 className="subtitle">
                {openers.description}
              </h1>
            </div>
          </div>
          <Openers gridItems={openers.jack.blurbs} />
        </div> 
      </div>
    </section>

    <section className="hero is-fullheight blog-section">        
      <div className="container">
        <div className="column is-12">
          <div className="columns is-centered header">
            <div className="column is-10">
              <h1 className="title is-size-2 has-text-centered">
                Blog
              </h1>
            </div>
          </div>
          <BlogRoll />
          <div className="column is-12 has-text-centered">
            <Link className="btn" to="#">
              Read more
            </Link>
          </div>
        </div> 
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  subheading2: PropTypes.string,
  subheading3: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  openers: PropTypes.shape({
    title: string,
    subheading: string,
    description: string,
    jack: PropTypes.shape({
      blurbs: PropTypes.array,
    }),
    belt: PropTypes.shape({
      blurbs: PropTypes.array,
    }),
    chain: PropTypes.shape({
      blurbs: PropTypes.array,
    }),
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        subheading2={frontmatter.subheading2}
        subheading3={frontmatter.subheading3}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
        openers={frontmatter.openers}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        subheading2
        subheading3
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
        openers {
          heading
          subheading
          description
          jack {
            title
            description
            blurbs {
              image {
                childImageSharp {
                  fluid(maxWidth: 240, quality: 64) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              title
              text
            }
          }
          belt {
            title
            description
            blurbs {
              image {
                childImageSharp {
                  fluid(maxWidth: 240, quality: 64) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              title
              text
            }
          }
          chain {
            title
            description
            blurbs {
              image {
                childImageSharp {
                  fluid(maxWidth: 240, quality: 64) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              title
              text
            }
          }
        }
      }
    }
  }
`
