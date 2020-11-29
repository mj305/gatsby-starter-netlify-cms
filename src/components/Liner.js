import React from 'react'

const Liner = ({center}) => (
  <hr style={center ? {margin: 'auto'} : {}} className="liner" />
)

export default Liner
