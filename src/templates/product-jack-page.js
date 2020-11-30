import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Liner from '../components/Liner'
import jackSVG from '../../static/img/svg/jack.svg'
import Img from 'gatsby-image'


import "../styles/index.sass"

export const JackPageTemplate = ({
  image,
  title,
  text,
  list,
  leftIntro,
  rightIntro,
  video,
  spec,
  warranty,
  include
}) => (
  <div className="jack">
    <section className="hero is-halfheight hero-section"
      style={{
        backgroundImage: `linear-gradient(131deg,rgba(255,255,255,0.5) 0%,#000000 100%)`,
        backgroundSize: 'cover'
      }}
    >
      <div className="hero-body">
        <div className="container">
          <div className="columns is-multiline">
            <div className="column is-6">
              <Img fluid={image.childImageSharp.fluid} alt="" />
            </div>
            <div className="column is-6">
              <div className="hero-title">
                <h1 className="title has-text-white">
                  {title}
                </h1>
                <p className="has-text-white">
                  {text}
                </p>
                <Liner />
                <ul className="is-size-5 has-text-white has-text-weight-bold">
                  {
                    list.map(item => (
                        <li>{item}</li>
                    ))
                  }
                </ul>
                <a className="button is-medium" href="/#">VIEW MORE</a>
              </div>
            </div>
          </div>          
        </div>
      </div>
      <div className="divider"
        style={{
          backgroundImage: `url(${jackSVG})`,
        }}
      ></div>
    </section>

    <section className="section image-text-section">
      <div className="container">
        <div className="columns is-multiline">
          <div className="column is-5 is-offset-1">
            {
              leftIntro.map(intro => {
                if(intro.type === 'text') {
                  return intro.items.map(item => (
                    <div className="item">
                      <p className="is-size-4">
                        {item.title}
                      </p>
                      <p className="is-size-5">
                        {item.subtitle}
                      </p>
                      <p className="default">{item.text}</p>
                    </div>
                  )) 
                } else {
                  return <div className="item-image" ><Img fluid={intro.image.childImageSharp.fluid} alt="" /></div>
                }
              })
            }
          </div>
          <div className="column is-5 is-offset-1">
            {
              rightIntro.map(intro => {
                if(intro.type === 'text') {
                  return intro.items.map(item => (
                    <div className="item">
                      <p className="is-size-4">
                        {item.title}
                      </p>
                      <p className="is-size-5">
                        {item.subtitle}
                      </p>
                      <p className="default">{item.text}</p>
                    </div>
                  )) 
                } else {
                  return <div className="item-image" ><Img fluid={intro.image.childImageSharp.fluid} alt="" /></div>
                }
              })
            }
          </div>
        </div>
      </div>
    </section>

    <section className="section video-section">
      <div className="container">
        <div className="column is-10 is-offset-1">
          <p className="is-size-5 has-text-centered">
            {video.title}
          </p>
          <div className="iframe">
            <iframe title="Liftmaster 8500W vs 8500 side by side comparison" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" data-src="https://www.youtube.com/embed/wNJ8qJD8wk8?feature=oembed" class=" lazyloaded" src="https://www.youtube.com/embed/wNJ8qJD8wk8?feature=oembed" name="fitvid0"></iframe>
          </div>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="column is-10 is-offset-1">
          <p className="is-size-5 has-text-centered custom-title">
            {spec.title}
          </p>
          <table className="table is-fullwidth is-bordered">
            <tbody>
              {
                spec.data.map(item => (
                  <tr>
                    {
                      item.map((data, index) => (
                        <td className={index % 2 === 0 ? "" : "has-text-weight-bold"}>{data}</td>
                      ))
                    }
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section className="section warranty-section">
      <div className="container">
        <div className="column is-10 is-offset-1">
          <p className="is-size-5">WARRANTY</p>
          <ul className="">
            {
              warranty.map(item => (
                  <li>{item}</li>
              ))
            }
          </ul>
        </div>
      </div>
    </section>
    <section className="section warranty-section">
      <div className="container">
        <div className="column is-10 is-offset-1 has-text-centered">
          <p className="title">{include.title}</p>
          <Liner center={true} />
          <div className="columns is-multiline">
            {
              include.items.map(item => (
                <div className="column is-3">
                  <Img fluid={item.image.childImageSharp.fluid} alt=""  />
                  <p className="is-size-5">{item.title}</p>
                  <p>{item.text}</p>
                </div>
              ))
            }
            
          </div>
        </div>
      </div>
    </section>
  </div>
)

JackPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  text: PropTypes.string,
  list: PropTypes.array,
  leftIntro: PropTypes.shape({
    type: PropTypes.string,
    item: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        subtitle: PropTypes.string,
        text: PropTypes.string
      })
    ),
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
  }),
  rightIntro: PropTypes.shape({
    type: PropTypes.string,
    item: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        subtitle: PropTypes.string,
        text: PropTypes.string
      })
    ),
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
  }),
  video: PropTypes.shape({
    title: PropTypes.string,
    embed: PropTypes.string
  }),
  spec: PropTypes.shape({
    title: PropTypes.string,
    data: PropTypes.array,
  }),
  warranty: PropTypes.array,
  include: PropTypes.shape({
    title: PropTypes.string,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        title: PropTypes.string,
        text: PropTypes.string
      })
    )
  })
}

const JackPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  console.log("frontmatter.image", frontmatter.image)

  return (
    <Layout>
      <JackPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        text={frontmatter.text}
        list={frontmatter.list}
        leftIntro={frontmatter.leftIntro}
        rightIntro={frontmatter.rightIntro}
        video={frontmatter.video}
        spec={frontmatter.spec}
        warranty={frontmatter.warranty}
        include={frontmatter.include}
      />
    </Layout>
  )
}

JackPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default JackPage

export const pageQuery = graphql`
  query JackPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "product-jack-page" } }) {
      frontmatter {
        title
        text
        list
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        leftIntro {
          type
          items {
            title
            subtitle
            text
          }
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        rightIntro {
          type
          items {
            title
            subtitle
            text
          }
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        video {
          title
          embed
        }
        spec {
          title
          data
        }
        warranty
        include {
          title
          items {
            image {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
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
`
