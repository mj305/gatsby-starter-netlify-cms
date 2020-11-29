import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import {Link} from 'gatsby'

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline features">
    {gridItems.map((item) => (
      <div key={item.text} className="column is-6">
        <Link to={item.link}>
          <section className="section">
            <div 
            style={{
              cursor: 'pointer',
            }}
            className="has-text-centered">
              <div
                style={{
                  width: '100%',
                  display: 'inline-block',
                }}
              >
                <PreviewCompatibleImage imageInfo={item} />
              </div>
            </div>
            <p
            style={{
              color: 'grey',
              fontSize: '1.2rem',
              fontWeight: '600',
              textAlign: 'center',  
              margin: '2rem auto auto auto',
            }}
            >{item.text}</p>
          </section>
        </Link>
      </div>
    ))}
  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid
