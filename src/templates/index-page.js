import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'

import secondViewPortHome from '../../static/img/secondViewPortHome.jpg'
import commercial from '../../static/img/commercial.png'
import house from '../../static/img/house.png'
import key from '../../static/img/key.png'

import "../styles/index.css"


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
}) => (
  <div>

    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `linear-gradient(70deg,#283d4b 0%,rgba(128,103,79,0.5) 100%),url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
        height: '100vh',
        width: '100vw',
        backgroundPosition: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
        }}
      >
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            textAlign: 'center',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {title}
        </h1>
        <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            textAlign: 'center',
            color: '#dbdbdb',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {subheading}
        </h3>

          <div
          style={{
            backgroundColor: '#46870C',
            width: '40%',
            margin: '2rem auto auto auto',
            padding: '1rem',
            borderRadius: '3rem',
            cursor: 'pointer',
          }}
          >
            <h5
              className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
              style={{
                textAlign: 'center',
                color: '#ffffff',
                lineHeight: '1',
                padding: '0.25em',
                marginBottom: '.5rem',
              }}
            >
              {subheading2}
            </h5>
            <a
              className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
              href="tel:305-702-0113"
              style={{
                marginLeft: '17%',
                color: '#ffffff',
                lineHeight: '1',
                padding: '0.25em',
              }}
            >
              {subheading3}
            </a>
          </div>
      </div>
    </div>

      <div
      style={{
        paddingTop: '-5rem',
        background: `linear-gradient(180deg, rgba(101,102,102,1) 0%, rgba(232,232,232,1) 50%, rgba(255,255,255,1) 70%)`,  
        opacity: '60%',      
        height: '30vh',
        width: '100vw',
      }}
        > 
      </div>


      <div id="tabs-with-content">
        <div class="tabs is-centered">
          <ul>
            <li class="is-active"><a>How Much Would It Cost?</a></li>
            <li><a>I Need Door Repair Services</a></li>
            <li><a>I Need A New Garage Door</a></li>
            <li><a>Schedule Annual Tune Up </a></li>
          </ul>        
        </div>

        <div>
          <section class="tab-content">Pictures content</section>
          <section class="tab-content">Music content</section>
          <section class="tab-content">Videos content</section>
          <section class="tab-content">Documents content</section>
        </div>
      </div>


      <section>
        <div
          style={{
            backgroundImage:  `/* linear-gradient(70deg,#283d4b 0%,rgba(128,103,79,0.5) 100%), */url(${secondViewPortHome})`,
            backgroundPosition: `top left`,
            backgroundAttachment: `fixed`,
            height: '100vh',
            width: '100vw',
            backgroundPosition: 'center',
            height: '100vh',
            marginTop: '10rem',
            marginBottom: '5rem',
            padding: '1rem',
            }}
            >

          
          <div
          style={{
            marginTop: '2rem',
            color: 'white',
            textAlign: 'center',
            }}
          className="content">
            <div className="tile">
              <h1 
              style={{
                color: 'white',
                margin: '3rem auto',
                }}
              className="title">{mainpitch.title}</h1>
            </div>

            <div className="tile">
              <h3
                style={{
                color: 'white',
                textAlign: 'center',
                margin: 'auto',
              }}
            
              className="subtitle">{mainpitch.description}</h3>
            </div>
          </div>

      {/* attempt of squares under view port */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              width: '100%',
              /* textAlign: 'center', */
              margin: '6rem auto 6rem auto',
              lineHeight: '2rem',
          }} 
          >
              <div
                style={{
                width: '25%',
                backgroundColor: '#035aa6',
                opacity: '80%',
                color: 'white',
                padding: '2rem',
            }} 
              >
                <img src={house} />
                  <div
                  style={{
                  fontWeight: '600',
                  color: '#ffffff',
              }} 
                  >RESIDENTIAL</div>
                  <div>
                    Huge variety of hurricane garage 
                    doors surpass all requirements to protect your Home and loved ones.
                  </div>
                  <div
                  style={{
                  fontWeight: '600',
                  marginTop: '1rem',
              }} 
                  >LEARN MORE</div>
              </div>

              <div
              style={{
                width: '25%',
                backgroundColor: '#4a3f35',
                opacity: '80%',
                color: 'white',
                padding: '2rem',
                }}
              >
                <img src={commercial} />
                  <div
                  style={{
                  fontWeight: '600',
              }} 
                  >COMMERCIAL</div>
                  <div>
                    AAA Garage Door Inc. Services and repairs all major brands of 
                    overhead commercial garage doors and motors.
                  </div>
                  <div
                  style={{
                  fontWeight: '600',
                  marginTop: '1rem',
              }} 
                  >LEARN MORE</div>
              </div>

              <div
              style={{
                width: '25%',
                backgroundColor: '#db6400',
                opacity: '80%',
                color: 'white',
                padding: '2rem',
            }}
              >
                <img src={key} />
                  <div
                  style={{
                  fontWeight: '600',
              }} 
                  >ENTRY SYSTEMS</div>
                  <div>
                    We specialize in access control solutions Telephone Entry Systems; 
                    Door/Gate Access Controllers.
                  </div>
                  <div
                  style={{
                  fontWeight: '600',
                  marginTop: '1rem',
              }} 
                  >LEARN MORE</div>
              </div>
          </div>

          <div
            style={{
              backgroundColor: '#46870C',
              width: '20%',
              margin: '3rem auto 5rem auto',
              padding: '1rem',
              borderRadius: '3rem',
              cursor: 'pointer',
            }}
            >
              <h5
                className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
                style={{
                  textAlign: 'center',
                  color: '#ffffff',
                  lineHeight: '1',
                  padding: '0.25em',
                  marginBottom: '.5rem',
                }}
              >
                {subheading2}
              </h5>
              <a
                className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
                href="tel:305-702-0113"
                style={{
                  marginLeft: '23%',
                  color: '#ffffff',
                  lineHeight: '1',
                  padding: '0.25em',
                }}
              >
                {subheading3}
              </a>
            </div>
            </div>
      </section>


          
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      {heading}
                    </h3>
                    <p>{description}</p>
                  </div>
                </div>
                <Features gridItems={intro.blurbs} />
                <div className="columns">
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/products">
                      See all products
                    </Link>
                  </div>
                </div>
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    Blog
                  </h3>
                  <BlogRoll />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
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
      }
    }
  }
`
