import React from 'react'

const EventImage = ({ item }) => {

    if (!item || !item.image) return null;
  return (
    
      <div className="event-image-container">{item.image}</div>
  )
}

export default EventImage