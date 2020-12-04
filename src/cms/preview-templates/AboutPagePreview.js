import React from 'react'
import PropTypes from 'prop-types'
import { AboutPageTemplate } from '../../templates/about-page'

const AboutPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <AboutPageTemplate
        image={getAsset(data.image)}
        title={data.title}
        subTitle={data.subTitle}
        boxTitle={data.subheading}
        boxContent={data.boxContent}
        images={data.images || {}}
        main={data.main || {}}
        wedo={data.wedo || {}}
        bottom={data.bottom || {}}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default AboutPagePreview
