import React from 'react'
import PropTypes from 'prop-types'
import { CommercialPageTemplate } from '../../templates/commercial-page'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <CommercialPageTemplate
        image={getAsset(data.image)}
        title={data.title}
        subTitle={data.subTitle}
        boxTitle={data.boxTitle}
        boxContent={data.boxContent}
        content={data.content || [] }
        products={data.products || {}}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default IndexPagePreview
