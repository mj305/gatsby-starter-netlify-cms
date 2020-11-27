import React from 'react'
import PropTypes from 'prop-types'

const TextBlock = ({ content, icon }) => (
  <section className="section text-block-section">
    <div className="container">
      {
        content.map((item) => (
          <div className="block">
            <div className="block-title">
            { icon ? <i className="fa fa-check-circle custom-icon"></i> : <></> }
              <h4 className="content">{item.title}</h4>
            </div>
            {item.boldText ? <h2 className="subtitle content">
              {item.boldText}
            </h2> : <></>}
            <p className="content" dangerouslySetInnerHTML={{__html: item.description}}></p>
          </div>
        ))
      }
    </div>
  </section>
)

TextBlock.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.string
  ),
}

export default TextBlock
