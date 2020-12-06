/* eslint-disable */
import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
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
              <PreviewCompatibleImage imageInfo={image}/>
              <div className="columns is-multiline thumbnails">
                {
                  thumb.map(item => (
                    <div className="column is-3">
                      <PreviewCompatibleImage imageInfo={item}/>
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
                      // <img src={ item ? item.childImageSharp.fluid.src : null} alt="" />
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
                  <li className={ activeTab === "description" ? "is-active" : ""} onClick={() => changeActiveTab("description")} onKeyDown={changeActiveTab} ><a>Description</a></li>
                  <li className={ activeTab === "options" ? "is-active" : ""} onClick={() => changeActiveTab("options")} onKeyDown={changeActiveTab}><a>Design Options</a></li>
                  <li className={ activeTab === "construction" ? "is-active" : ""} onClick={() => changeActiveTab("construction")} onKeyDown={changeActiveTab}><a>CONSTRUCTION</a></li>
                  <li className={ activeTab === "colors" ? "is-active" : ""} onClick={() => changeActiveTab("colors")} onKeyDown={changeActiveTab}><a>COLORS</a></li>
                  <li className={ activeTab === "hardware" ? "is-active" : ""} onClick={() => changeActiveTab("hardware")} onKeyDown={changeActiveTab}><a>HARDWARE DESIGNS</a></li>
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
                  <PreviewCompatibleImage className="alignRight" imageInfo={descriptionTab.image} />
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
                      <PreviewCompatibleImage imageInfo={item}/>
                    ))
                  }
                  <div className="iframe"><iframe title="Collection overview video" src="https://player.vimeo.com/video/31108986" frameBorder="0" allowfullscreen></iframe></div>
                  <div className="bottom">
                    <PreviewCompatibleImage className="alignLeft" imageInfo={descriptionTab.bottom.image}/>
                    <p className="is-size-5">{descriptionTab.bottom.title}</p>
                    <p>{descriptionTab.bottom.text}</p>
                  </div>                    
                </div>
                <div className={ activeTab === "options" ? "options" : "is-hidden"}>
                  <p className="is-size-4">
                    {options.title}
                  </p>
                  <PreviewCompatibleImage imageInfo={options.image}/>
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
                                        <PreviewCompatibleImage imageInfo={door.image } />
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
                    <PreviewCompatibleImage className="alignRight" imageInfo={construction.rightImage} />
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
                      <PreviewCompatibleImage imageInfo={construction.leftImage} />
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
                          <PreviewCompatibleImage imageInfo={item.image} />
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
                              <PreviewCompatibleImage imageInfo={item.image} />
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
                                  <PreviewCompatibleImage imageInfo={item.image} />

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
                    <PreviewCompatibleImage imageInfo={item.image} />
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
