import React from 'react'
import PropTypes from 'prop-types'
import { JackPageTemplate } from '../../templates/product-jack-page'

const Jack8500wPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  console.log("data.image", getAsset(data.image))
  if (data) {
    return (
      <JackPageTemplate
        image={getAsset(data.image)}
        title={data.title}
        text={data.text}
        list={data.list}
        leftIntro={data.leftIntro || {}}
        rightIntro={data.rightIntro || {}}
        video={data.video || {}}
        spec={data.spec || {}}
        warranty={data.warranty || []}
        include={data.include || {}}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

Jack8500wPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default Jack8500wPagePreview
