import React from 'react'
import PropTypes from 'prop-types'
import { GateRepairPageTemplate } from '../../templates/gate-repair-page'

const GateRepairPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <GateRepairPageTemplate
        image={getAsset(data.image)}
        content={data.content || []}
        swing={data.swing || {}}
        bottom={data.bottom || {}}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

GateRepairPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default GateRepairPagePreview
