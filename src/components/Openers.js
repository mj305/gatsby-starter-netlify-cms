import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import {Link} from 'gatsby'

const OpenersGrid = ({ data }) => (
  <div className="openers">
    <div className="columns is-centered header">
      <div className="column is-10">
        <h1 className="subtitle has-text-weight-bold has-text-centered">
          {data.title}
        </h1>
        <p className="has-text-centered">
          {data.description}
        </p>
      </div>
    </div>
    <div className="columns is-multiline items">
      {data.blurbs.map((item) => (
       
        <div key={item.text} 
          className={data.blurbs.length % 3 === 0 ? `column is-4` : `column is-6` }
        >
           <Link to={item.link}>
            <section className="section">
              <div className="wrapper has-text-centered">
                <div className="item">
                  <PreviewCompatibleImage imageInfo={item} />
                </div>
              </div>
              <p className="item-title">{item.title}</p>
              <h1 className="subtitle has-text-centered">
                {item.text}
              </h1>
            </section>
          </Link>
        </div>
      ))}
    </div>
  </div>
)

OpenersGrid.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    blurbs: PropTypes.arrayOf(
      PropTypes.shape({
        image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        text: PropTypes.string,
      })
    )
  })
}

export default OpenersGrid
