import React from 'react'
import PropTypes, { string } from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Contact from '../components/Contact'
import Liner from '../components/Liner'
import jackSVG from '../../static/img/svg/jack.svg'
import Img from 'gatsby-image'


import "../styles/index.sass"
import { useState } from 'react'

export const CollectionPageTemplate = ({
  title,
  subtitle,
  text,
  image,
  thumb,
  icons,
  descriptionTab,
  options,
  construction,
  colors,
  hardware,
  related,
}) => {
  const [activeTab, setActiveTab] = useState('description');

  const changeActiveTab = (name) => {
    setActiveTab(name)
  }

  return (
    <div className="collection">  
      <section className="section top-section">
        <div className="container">
          <div className="columns is-multiline">
            <div className="column is-5 is-offset-1">
              <Img fluid={image.childImageSharp.fluid} alt="" />
              <div className="columns is-multiline thumbnails">
                {
                  thumb.map(item => (
                    <div className="column is-3">
                      <Img fluid={item.childImageSharp.fluid} alt="" />
                    </div>
                  ))
                }
              </div>
            </div>
            <div className="column is-5 is-offset-1">
                <p className="is-size-3">
                  {title}
                </p>
                <p className="is-size-5">
                  {subtitle}
                </p>
                <div className="icons">
                  {
                    icons.map(item => (
                      <img src={item.childImageSharp.fluid.src} alt="" />
                    ))
                  }
                </div>              
                <p className="default">{text}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section tab-section">
        <div className="container">
          <div className="columns is-multiline">
            <div className="column tab-box is-10 is-offset-1">
              <div className="tabs is-boxed">
                <ul>
                  <li className={ activeTab === "description" ? "is-active" : ""} onClick={() => changeActiveTab("description")} ><a>Description</a></li>
                  <li className={ activeTab === "options" ? "is-active" : ""} onClick={() => changeActiveTab("options")}><a>Design Options</a></li>
                  <li className={ activeTab === "construction" ? "is-active" : ""} onClick={() => changeActiveTab("construction")}><a>CONSTRUCTION</a></li>
                  <li className={ activeTab === "colors" ? "is-active" : ""} onClick={() => changeActiveTab("colors")}><a>COLORS</a></li>
                  <li className={ activeTab === "hardware" ? "is-active" : ""} onClick={() => changeActiveTab("hardware")}><a>HARDWARE DESIGNS</a></li>
                </ul>
              </div>
              <div className="tab-content">
                <div className={ activeTab === "description" ? "description" : "is-hidden"}>
                  <p className="is-size-4">
                    {descriptionTab.title}
                  </p>
                  <p>
                    {descriptionTab.text}
                  </p>
                  <img className="alignRight" src={descriptionTab.image.childImageSharp.fluid.src} alt="" />
                  {
                    descriptionTab.description.map(item => (
                      <div className="block">
                        <p className="is-size-3">{item.title}</p>
                        <ul>
                          {
                            item.list.map(list => (
                                <li>{list}</li>
                            ))
                          }
                        </ul>
                      </div>                        
                    ))
                  }
                  {
                    descriptionTab.images.map(item => (
                      <img src={item.childImageSharp.fluid.src} alt="" />
                    ))
                  }
                  <div className="iframe"><iframe title="Collection overview video" src="https://player.vimeo.com/video/31108986" frameborder="0" allowfullscreen></iframe></div>
                  <div className="bottom">
                    <img className="alignLeft" src={descriptionTab.bottom.image.childImageSharp.fluid.src} alt="" />
                    <p className="is-size-5">{descriptionTab.bottom.title}</p>
                    <p>{descriptionTab.bottom.text}</p>
                  </div>                    
                </div>
                <div className={ activeTab === "options" ? "options" : "is-hidden"}>
                  <p className="is-size-4">
                    {options.title}
                  </p>
                  <img src={options.image.childImageSharp.fluid.src} alt="" />
                  {
                    options.designs.map(design => (
                      <div>
                        <p className="is-size-4 design-title">
                          {design.title}
                        </p>
                        {
                          design.items.map(item => (
                            <div>
                              <p className="is-size-5 item-title">
                                {item.title}
                              </p>
                              <div className="columns is-offset-2 is-multiline">
                                {
                                  item.images.map(door => (
                                    <div className="column is-4">
                                      <div>
                                        <img src={door.image.childImageSharp.fluid.src} alt="" />
                                        <p>{door.title}</p>
                                      </div>                                      
                                    </div>                                    
                                  ))
                                }
                              </div>                                
                            </div>                              
                          ))
                        }
                      </div>
                    ))
                  }
                </div>
                  <div className={ activeTab === "construction" ? "construction" : "is-hidden"}>
                    <p className="is-size-4">
                      {construction.title}
                    </p>
                    <img className="alignRight" src={construction.rightImage.childImageSharp.fluid.src} alt="" />
                      <ol>
                        {
                          construction.top.map(list => (
                              <li>{list}</li>
                          ))
                        }
                      </ol>
                      <ul className="block">
                        {
                          construction.middle.map(list => (
                            <li>{list}</li>
                          ))
                        }
                      </ul>
                      <img src={construction.leftImage.image.childImageSharp.fluid.src} alt="" />
                      <p>{construction.leftImage.title}</p>
                      <ul>
                        {
                          construction.bottom.map(list => (
                            <li>{list}</li>
                          ))
                        }
                      </ul>
                  </div>
                  <div className={ activeTab === "colors" ? "colors" : "is-hidden"}>
                    <p className="is-size-4">
                      {colors.title}
                    </p>
                    {
                      colors.items.map(item => (
                        <div>
                          <img src={item.image.childImageSharp.fluid.src} alt="" />
                          <p>{item.title}</p>
                        </div>
                      ))
                    }
                  </div>
                  <div className={ activeTab === "hardware" ? "hardware" : "is-hidden"}>
                    <p className="is-size-4">
                      {hardware.title}
                    </p>
                    <div className="columns is-offset-2 is-multiline">
                      {
                        hardware.top.items.map(item => (
                          <div className="column is-3">
                            <div>
                              <img src={item.image ? item.image.childImageSharp.fluid.src : "null"} alt="" />
                              <p>{item.title}</p>
                            </div>                                      
                          </div>                                    
                        ))
                      }
                    </div>
                    {
                      hardware.main.map(design => (
                        <div className="columns is-offset-2 is-multiline">
                          {
                            design.items.map(item => (
                              <div className="column is-3">
                                <div>
                                  <img src={item.image ? item.image.childImageSharp.fluid.src : "null"} alt="" />

                                  <p>{item.title}</p>
                                </div>                                      
                              </div>                                    
                            ))
                          }
                        </div>
                      ))
                    }
                    
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="column is-10 is-offset-1">
            <p className="is-size-3">{related.title}</p>
            <div className="columns is-multiline">
              {
                related.items.map(item => (
                  <div className="column is-4">
                    <Img fluid={item.image ? item.image.childImageSharp.fluid : "null"} alt=""  />
                    <p className="is-size-5">{item.title}</p>
                  </div>
                ))
              }
              
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
  

CollectionPageTemplate.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  thumb: PropTypes.arrayOf(    
    PropTypes.oneOfType([PropTypes.object, PropTypes.string])
  ),
  icons: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.object, PropTypes.string])
  ),
  descriptionTab: PropTypes.shape({
    title: PropTypes.string,
    text: PropTypes.string,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    description: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        list: PropTypes.array
      })
    ),
    images: PropTypes.array,
    bottom: PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      title: PropTypes.string,
      text: PropTypes.string
    })
  }),
  options: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    designs: PropTypes.array
  }),
  construction: PropTypes.shape({
    title: PropTypes.string,
    rightImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    top: PropTypes.array,
    middle: PropTypes.array,
    leftImage: PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      title: PropTypes.string
    }),
    bottom: PropTypes.array,
  }),
  colors: PropTypes.shape({
    title: PropTypes.string,
    items: PropTypes.array
  }),
  hardware: PropTypes.shape({
    title: PropTypes.string,
    top: PropTypes.shape({
      title: PropTypes.string,
      items: PropTypes.array
    }),
    main: PropTypes.array
  }),
  related: PropTypes.shape({
    title: PropTypes.string,
    items: PropTypes.array
  })
}

const CollectionPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  console.log("frontmatter.image", frontmatter.image)

  return (
    <Layout>
      <CollectionPageTemplate
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
        text={frontmatter.text}
        image={frontmatter.image}
        thumb={frontmatter.thumb}
        icons={frontmatter.icons}
        descriptionTab={frontmatter.descriptionTab}
        options={frontmatter.options}
        construction={frontmatter.construction}
        colors={frontmatter.colors}
        hardware={frontmatter.hardware}
        related={frontmatter.related}
      />
    </Layout>
  )
}

CollectionPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default CollectionPage

export const pageQuery = graphql`
  query CollectionPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "product-collection-page" } }) {
      frontmatter {
        title
        subtitle
        text
        image {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        thumb {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        icons {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        descriptionTab {
          title
          text
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          description {
            title
            list
          }
          images {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          bottom {
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
        options {
          title
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          designs {
            title
            items {
              title
              images {
                image {
                  childImageSharp {
                    fluid(maxWidth: 2048, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                title                
              }
            }
          }
        }
        construction {
          title
          rightImage {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          top
          middle
          leftImage {
            image {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            title
          }
          bottom
        }
        colors {
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
          }
        }
        hardware {
          title
          top {
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
            }
          }
          main {
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
            }
          }
        }
        related {
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
          }
        }
      }
    }
  }
`
