import React from 'react'
import { useParams, Link } from 'react-router-dom'

const EventInfo = ({ item }) => {
    const {id}=useParams()
  return (
    <div className="event-info">
            <div className="event-header">
                <div className="event-title-section">
                    <h1 className="event-title">{item.title}</h1>
                </div>
                
            </div>
            
            <div className="event-meta">
                <div className="meta-item">

                    <span>{item.eventDate}</span>
                </div>
                
                <div className="meta-item">

                    <span>{item.location}</span>
                </div>

                  <div className="price-section">
                    <div className="price-label">Starts from</div>
                    <div className="price-value">{item.price}kr</div>
                    <Link to={`/events/booking/${id}`} className="Link">
                     <button className='btn btn-biljet'>Köp biljett</button>
                    </Link>
                  </div>
            </div>
      </div>
  )
}

export default EventInfo