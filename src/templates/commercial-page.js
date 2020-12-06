import React from 'react'
import PropTypes, { string } from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Contact from '../components/Contact'
import Openers from '../components/Openers'

import "../styles/index.sass"

export const CommercialPageTemplate = ({
  image,
  title,
  subTitle,
  boxTitle,
  boxContent,
  products,
}) => (
  <div className="commercial">
    <Hero image={image} title={title} subTitle={subTitle} boxTitle={boxTitle} boxContent={boxContent} />    
    
    <section className="section is-fullheight">        
      <div className="container">
        <div className="column is-12">
          <div className="columns is-centered header">
            <div className="column is-10">
              <h1 className="title is-size-2 is-size-2 has-text-centered">
                {products.title}
              </h1>
              <h1 className="subtitle has-text-centered">
                {products.subTitle}
              </h1>
            </div>
          </div>
          <Openers data={products.sectional} />
          <Openers data={products.steel} />
        </div> 
      </div>
    </section>
    <Contact />
  </div>
)

CommercialPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  subTitle: PropTypes.string,
  boxTitle: PropTypes.string,
  boxContent: PropTypes.string,
  products: PropTypes.shape({
    title: string,
    subTitle: string,
    sectional: PropTypes.shape({
      title: PropTypes.string,
      text: PropTypes.string,
      blurbs: PropTypes.array,
    }),
    steel: PropTypes.shape({
      title: PropTypes.string,
      text: PropTypes.string,
      blurbs: PropTypes.array,
    }),
  }),
}

const CommercialPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <CommercialPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        subTitle={frontmatter.subTitle}
        boxTitle={frontmatter.boxTitle}
        boxContent={frontmatter.boxContent}
        products={frontmatter.products}
      />
    </Layout>
  )
}

CommercialPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default CommercialPage

export const pageQuery = graphql`
  query CommercialPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "commercial-page" } }) {
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
        products {
          title
          subTitle
          sectional {
            title
            blurbs {
              title
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
          steel {
            title
            blurbs {
              title
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
        }
      }
    }
  }
`
