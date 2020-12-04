import React from 'react'
import PropTypes from 'prop-types'
import { ContactPageTemplate } from '../../templates/contact-page'

const ContactPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <ContactPageTemplate
        image={getAsset(data.image)}
        title={data.title}
        subTitle={data.subTitle}
        heading={data.heading}
        subHeading={data.subHeading}
        boxTitle={data.boxTitle}
        boxContent={data.boxContent}
        left={data.left || {}}
        right={data.right || []}
        reason={data.reason || {}}
        commercial={data.commercial || {}}
        doors={data.doors || {}}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

ContactPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default ContactPagePreview
