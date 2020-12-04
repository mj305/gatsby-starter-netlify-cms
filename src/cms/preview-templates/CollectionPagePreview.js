import React from 'react'
import PropTypes from 'prop-types'
import { CollectionPageTemplate } from '../../templates/product-collection-page'

const CollectionPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <CollectionPageTemplate
        image={getAsset(data.image)}
        title={data.title}
        subtitle={data.subtitle}
        text={data.text}
        thumb={data.thumb || []}
        icons={data.icons || []}
        descriptionTab={data.descriptionTab || {}}
        options={data.options || {}}
        construction={data.construction || {}}
        colors={data.colors || {}}
        hardware={data.hardware || {}}
        related={data.related || {}}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

CollectionPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default CollectionPagePreview
