import React from 'react'
import PropTypes, { string } from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Contact from '../components/Contact'
import whiteDivder from '../../static/img/white-divider.svg'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

import "../styles/index.sass"

export const AboutPageTemplate = ({
  image,
  title,
  subTitle,
  boxTitle,
  boxContent,
  images,
  main,
  wedo,
  bottom
}) => (
  <div className="about">
    <Hero half={true} image={image} title={title} subTitle={subTitle} boxTitle={boxTitle} boxContent={boxContent} />

    <section className="section image-text-section">
      <div className="container">
        <div className="columns is-multiline">
          <div className="column is-6">
            <div className="columns is-multiline image-grid">
              <div className="column is-6 left-grid">
                {
                  images.left.map(item => (
                    <div className="column is-11 is-offset-1">
                      <PreviewCompatibleImage imageInfo={item} />
                    </div>
                  ))
                }
              </div>
              <div className="column is-6">
                {
                  images.right.map(item => (
                    <div className="column is-11">
                      <PreviewCompatibleImage imageInfo={item} />
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
          <div className="column is-6">
            <h1 className="subtitle top-title has-text-weight-bold">{main.title}</h1>
            {
              main.list.map((item) => (
                <div className="block">
                  <div className="block-title">
                    <h1 className="subtitle">{item.title}</h1>
                  </div>
                  <p className="content">{item.description}</p>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>

    <section className="section wedo-section">
      <div className="columns">
        <div className="column is-6 has-text-centered">
          <h1 className="title is-size-2">
            {wedo.title}
          </h1>
        </div>
      </div>
      <div className="columns is-multiline">
        <div className="column is-3">
          <div className="card has-text-white"
            style={{
              backgroundImage: `url(${!!wedo.residential.image.childImageSharp ? wedo.residential.image.childImageSharp.fluid.src : wedo.residential.image})`,
              backgroundColor: '#546180',
              backgroundBlendMode: 'soft-light',
              backgroundSize: 'cover',
              backgroundPosition: '50%',
              backgroundRepeat: 'no-repeat',
              padding: '30px 20px'
            }}
          >
            <div className="card-content">
              <div className="icon-container">
                <i className="fa fa-home custom-icon"></i>
              </div>
              <div className="content-container">
                <h1 className="has-text-weight-bold">{wedo.residential.title}</h1>
                <p className="is-size-4 has-text-weight-bold">{wedo.residential.text}</p>
                <p className="has-text-weight-bold is-uppercase learn-more">Learn more</p>
              </div>
            </div>
          </div>
        </div>
        <div className="column is-3">
          <div className="card has-text-white"
            style={{
              backgroundImage: `url(${!!wedo.commercial.image.childImageSharp ? wedo.commercial.image.childImageSharp.fluid.src : wedo.commercial.image})`,
              backgroundColor: '#bdad9b',
              backgroundSize: 'cover',
              backgroundPosition: '50%',
              backgroundRepeat: 'no-repeat',
              padding: '30px 20px'
            }}
          >
            <div className="card-content">
              <div className="icon-container">
                <i className="fa fa-industry custom-icon"></i>
              </div>
              <div className="content-container">
                <h1 className="has-text-weight-bold">{wedo.commercial.title}</h1>
                <p className="has-text-black">{wedo.commercial.text}</p>
                <p className="has-text-weight-bold is-uppercase learn-more">Learn more</p>
              </div>
            </div>
          </div>
        </div>
        <div className="column is-3">
          <div className="card has-text-white"
            style={{
              backgroundImage: `url(${!!wedo.entry.image.childImageSharp ? wedo.entry.image.childImageSharp.fluid.src : wedo.entry.image})`,
              backgroundColor: '#f47a55',
              backgroundBlendMode: 'multiply',
              backgroundSize: 'cover',
              backgroundPosition: '50%',
              backgroundRepeat: 'no-repeat',
              padding: '30px 20px'
            }}
          >
            <div className="card-content">
              <div className="icon-container">
                <i className="fa fa-key custom-icon"></i>
              </div>
              <div className="content-container">
                <h1 className="has-text-weight-bold">{wedo.entry.title}</h1>
                <p>{wedo.entry.text}</p>
                <p className="has-text-weight-bold is-uppercase learn-more">Learn more</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="hero is-info is-halfheight hero-section custom-hero"
      style={{
        background: `linear-gradient(70deg,#283d4b 0%,rgba(128,103,79,0.5) 100%),url(${
          !!bottom.image.childImageSharp ? bottom.image.childImageSharp.fluid.src : bottom.image
        }) no-repeat fixed center`,
        backgroundSize: 'cover'
      }}
    >
      <div className="animation-top-divider"
        style={{
          backgroundImage: `url(${whiteDivder})`,
        }}
      ></div>
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="hero-title">
            <h1 className="title">
              {bottom.title}
            </h1>
            <h1 className="subtitle">
              {bottom.subTitle}
            </h1>
          </div>
          <a className="box is-background-success" href="tel:305-702-0113">
            <div className="content">
              <h5 className="has-text-white is-size-4">
                {bottom.boxTitle}
              </h5>
              <h5 className="has-text-white is-size-5">
                {bottom.boxContent}
              </h5>
            </div>
          </a>
        </div>
      </div>
      <div className="animation-divider"
        style={{
          backgroundImage: `url(${whiteDivder})`,
        }}
      ></div>
    </section>

    <Contact />
  </div>
)

AboutPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  subTitle: PropTypes.string,
  boxTitle: PropTypes.string,
  boxContent: PropTypes.string,
  images: PropTypes.shape({
    left: PropTypes.array,
    right: PropTypes.array
  }),
  main: PropTypes.shape({
    title: string,
    list: PropTypes.array
  }),
  wedo: PropTypes.shape({
    title: PropTypes.string,
    residential: PropTypes.shape({
      title: PropTypes.string,
      text: PropTypes.string,
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    }),
    commercial: PropTypes.shape({
      title: PropTypes.string,
      text: PropTypes.string,
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    }),
    entry: PropTypes.shape({
      title: PropTypes.string,
      text: PropTypes.string,
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    }),
    button: PropTypes.string
  }),
  bottom: PropTypes.shape({
    title: PropTypes.string,
    text: PropTypes.string,
    boxTitle: PropTypes.string,
    boxContent: PropTypes.string
  })
}

const AboutPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <AboutPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        subTitle={frontmatter.subTitle}
        boxTitle={frontmatter.boxTitle}
        boxContent={frontmatter.boxContent}
        images={frontmatter.images}
        main={frontmatter.main}
        wedo={frontmatter.wedo}
        bottom={frontmatter.bottom}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default AboutPage

export const pageQuery = graphql`
  query AboutPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "about-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        subTitle
        boxTitle
        boxContent
        images {
          left {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          right {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        main {
          title
          list {
            title
            description
          }
        }
        wedo {
          title
          residential {
            title
            text
            image {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          commercial {
            title
            text
            image {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          entry {
            title
            text
            image {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          button
        }
        bottom {
          title
          subTitle
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          boxTitle
          boxContent
        }
      }
    }
  }
`
