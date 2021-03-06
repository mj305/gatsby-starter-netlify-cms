import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Contact from '../components/Contact'
import TextBlock from '../components/TextBlock'
import darkDivider from '../../static/img/dark-divider.svg'

import "../styles/index.sass"

export const ContactPageTemplate = ({
  image,
  title,
  subTitle,
  heading,
  subHeading,
  boxTitle,
  boxContent,
  content,
  left,
  right,
  reason,
  commercial,
  doors
}) => (
  <div className="contact">
    <section className="hero is-info is-fullheight hero-section"
      style={{
        background: `linear-gradient(70deg,#283d4b 0%,rgba(128,103,79,0.5) 100%),url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        }) no-repeat fixed center`,
        backgroundSize: 'cover'
      }}
    >
      <div className="section">
        <div className="container">
          <div className="hero-title has-text-centered">
            <h1 className="title">
              {title}
            </h1>
            <h1 className="subtitle">
              {subTitle}
            </h1>
          </div>
          <div className="columns is-multiline">            
            <div className="column is-12 has-text-centered info">
              <div className="heading">
                <h3 className="subtitle has-text-weight-bold" >{heading}</h3>
                <p className="subtitle">{subHeading}</p>
              </div>
              <a className="box is-background-success has-text-centered" href="tel:305-000-0000">
                <div className="content">
                  <h5 className="has-text-white">
                    {boxTitle}
                  </h5>
                  <h5 className="has-text-white">
                    {boxContent}
                  </h5>
                </div>
              </a>
              <div className="service">
                <h3 className="subtitle has-text-weight-bold">Hours</h3>
                <p className="subtitle">Service:</p>
                <p className="subtitle">Office: 8AM – 6PM  M-F</p>
              </div>
            </div>
            <div className="column is-10 is-offset-1">
              <iframe title="contact" height="800" width="1200" src="https://app.servicefusion.com/aaagarage"></iframe>
            </div>
          </div>          
        </div>
      </div>
      <div className="animation-divider"
        style={{
          backgroundImage: `url(${darkDivider})`,
        }}
      ></div>
    </section>

    <section className="section request-section">
      <div className="container">
        <div className="columns is-multiline">
          <div className="column is-6 is-offset-1">
            <TextBlock content={content} icon={true} />
          </div>
          <div className="column is-4 info">
          {/*   <p className="is-size-3 is-italic has-text-centered">Request Quick Quote</p>
            <iframe title="form" height="80%" width="100%" src="https://app.servicemonster.net/WebForms/BasicForm.aspx?Token=mmRM3KSBX4lWBciq9vVucX4hSANyZJ7d%2BXqm8LQuguKadcaNGgAd3A%3d%3d&Origin=Basic%20Form"></iframe>
           */}</div>
        </div>   
      </div>
    </section>

    <section className="section text-section">
      <div className="container">
        <div className="columns is-multiline">
          <div className="column is-6  is-offset-1 text-content">
            <h1 className="title is-size-2">{left.title}</h1>
            <h1 className="description is-size-5">{left.description}</h1>
          </div>
          <div className="column is-4">
            {right.map((item) => (
              <div className="column is-10 is-offset-2">
                <div className="block">
                  <i className="fa fa-check-circle custom-icon"></i>
                  <h4 className="content">{item}</h4>
                </div>                
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="block-section">
      <div className="section">
        <div className="row columns is-multiline">
          <div className="column is-3 reason">
            <div className="card has-text-white">
              <div className="card-content">
                <div className="icon-container">
                  <i className="fa fa-check-square custom-icon" aria-hidden="true"></i>
                </div>
                <div className="content-container">
                  <h1 className="has-text-weight-bold">{reason.title}</h1>
                  <ul>
                    {
                      reason.list.map(item => (
                          <li>{item}</li>
                      ))
                    }
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-3 commercial">
            <div className="card has-text-white">
            <div className="card-content">
                <div className="icon-container">
                  <i className="fa fa-industry custom-icon"></i>
                </div>
                <div className="content-container">
                  <h1 className="has-text-weight-bold">{commercial.title}</h1>
                  <ul>
                    {
                      commercial.list.map(item => (
                          <li>{item}</li>
                      ))
                    }
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-3 doors">
            <div className="card has-text-white">
            <div className="card-content">
                <div className="icon-container">
                  <i className="fa fa-key custom-icon"></i>
                </div>
                <div className="content-container">
                  <h1 className="has-text-weight-bold">{doors.title}</h1>
                  <p>{doors.text}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Contact />
  </div>
)

ContactPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  subTitle: PropTypes.string,
  heading: PropTypes.string,
  subHeading: PropTypes.string,
  boxTitle: PropTypes.string,
  boxContent: PropTypes.string,
  content: PropTypes.array,
  left: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string
  }),
  right: PropTypes.array,
  reason: PropTypes.arrayOf({
    title: PropTypes.string,
    list: PropTypes.array
  }),
  commercial: PropTypes.arrayOf({
    title: PropTypes.string,
    list: PropTypes.array
  }),
  doors: PropTypes.arrayOf({
    title: PropTypes.string,
    text: PropTypes.string
  }),
}

const ContactPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ContactPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        subTitle={frontmatter.subTitle}
        heading={frontmatter.heading}
        subHeading={frontmatter.subHeading}
        boxTitle={frontmatter.boxTitle}
        boxContent={frontmatter.boxContent}
        content={frontmatter.content}
        left={frontmatter.left}
        right={frontmatter.right}
        reason={frontmatter.reason}
        commercial={frontmatter.commercial}
        doors={frontmatter.doors}
      />
    </Layout>
  )
}

ContactPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ContactPage

export const pageQuery = graphql`
  query ContactPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "contact-page" } }) {
      frontmatter {
        title
        subTitle
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subHeading
        boxTitle
        boxContent
        content {
          title
          boldText
          description
        }
        left {
          title
          description
        }
        right
        reason {
          title
          list
        }
        commercial {
          title
          list
        }
        doors {
          title
          text
        }
      }
    }
  }
`
