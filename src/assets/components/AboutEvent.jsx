import React from 'react'

const AboutEvent = ({ item }) => {

  if (!item || !item.description) return null;

  return (
    <div className="content-section">
        <h2 className="section-title">About Event</h2>
        <p className="event-description"> {item.description}   </p>
    </div>
  )
}

export default AboutEvent