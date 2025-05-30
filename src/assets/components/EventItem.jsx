import React from 'react'
import { Link } from 'react-router-dom'


const EventItem = ({item}) => {
  return (
    <Link to={`/events/${item.id}` } className="Link">

      <div className="event-card">
          <div className="card-image">{item.image}</div>
          <div className="card-details">
              <div className="event-date">{item.eventDate}</div>
              <h3 className="event-title">{item.title}</h3>
              <div className="event-location"> {item.location}</div>
          </div>

          <div className="card-footer">
                  <span className="price-value">{item.price}kr</span>
                  <button className="btn">Köp</button>
              </div>
      </div>
        
    </Link>
  )
}

export default EventItem