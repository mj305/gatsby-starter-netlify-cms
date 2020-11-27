import React from 'react'

const Contact = () => (
  <section className="section contact-section">
    <div className="container">
      <div className="columns is-multiline">
        <div className="column is-3">
          <div className="block has-text-centered">
            <i className="fa fa-home custom-icon"></i>
            <h4 className="icon-title has-text-weight-bold">HEAD OFFICE</h4>
            <p className="icon-text">19200 SW 106th Ave. Unit 4</p>
          </div>
        </div>
        <div className="column is-3">
          <div className="block has-text-centered">
            <i className="fa fa-phone custom-icon"></i>
            <h4 className="icon-title has-text-weight-bold">CALL US</h4>
            <p className="icon-text">(305) 702-0113</p>
          </div>
        </div>
        <div className="column is-3">
          <div className="block has-text-centered">
            <i className="fa fa-envelope custom-icon"></i>
            <h4 className="icon-title has-text-weight-bold">EMAIL US</h4>
            <p className="icon-text">info@aaagds.com</p>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Contact
