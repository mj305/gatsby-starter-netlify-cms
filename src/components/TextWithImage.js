import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const TextWithImage = ({ content }) => (
  <section className="section text-with-image-section">
    <div className="container">
      <div className="columns is-multiline"
        style={content.position === 'left' ? {flexDirection: 'row-reverse'} : {}}
      >
        <div className="column is-6">
          <div className="block">
            <h4 className="block-title">{content.title}</h4>
            <p className="content" dangerouslySetInnerHTML={{__html: content.description}}></p>
          </div>
        </div>
        <div className="column is-4">
          {content.images.map((item) => (
            <div className="column is-10">
              <PreviewCompatibleImage imageInfo={item.image} />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
)

TextWithImage.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        image: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
      })
    ),
    position: PropTypes.string
  }),
}

export default TextWithImage
