import React from 'react'
import PropTypes, { string } from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import TextWithImage from '../components/TextWithImage'
import Features from '../components/Features'

import "../styles/index.sass"

export const GateRepairPageTemplate = ({
  image,
  content,
  swing,
  bottom
}) => (
  <div>
    <section className="hero is-info is-halfheight"
      style={{
        backgroundImage: `linear-gradient(3deg,#ffffff 8%,rgba(0,0,0,0.4) 12%),url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: 'center right',
        backgroundSize: 'cover'
      }}
    ></section>

    {
      content.map((item) => (
        <TextWithImage content={item} />
      ))
    }

    <section className="section repair-swing">        
      <div className="container">
        <div className="column is-12">
          <div className="columns is-centered header">
            <div className="column is-10">
              <h1 className="title is-size-2 is-size-2 has-text-centered">
                {swing.title}
              </h1>
              <h1 className="subtitle has-text-centered">
                {swing.subTitle}
              </h1>
            </div>
          </div>
          <Features gridItems={swing.blurbs} />
        </div> 
      </div>
    </section>

    <section className="section repair-bottom">        
      <div className="container">
        <div className="column is-12">
          <div className="columns is-centered header">
            <div className="column is-10">
              <h1 className="is-size-2 has-text-centered">
                {bottom.text}
              </h1>
              <a href="/" className="button is-large">{bottom.button}</a>
            </div>
          </div>
        </div> 
      </div>
    </section>
  </div>
)

GateRepairPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  content: PropTypes.array,
  swing: PropTypes.shape({
    title: string,
    subTitle: string,
    blurbs: PropTypes.array,
  }),
  bottom: PropTypes.shape({
    text: PropTypes.string,
    button: PropTypes.string
  })
}

const GateRepairPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <GateRepairPageTemplate
        image={frontmatter.image}
        content={frontmatter.content}
        swing={frontmatter.swing}
        bottom={frontmatter.bottom}
      />
    </Layout>
  )
}

GateRepairPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default GateRepairPage

export const pageQuery = graphql`
  query GateRepairPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "gate-repair-page" } }) {
      frontmatter {
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        content {
          title
          description
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          position
        }
        swing {
          title
          subTitle
          blurbs {
            text
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        bottom {
          text
          button
        }
      }
    }
  }
`
