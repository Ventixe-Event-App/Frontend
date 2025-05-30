import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import EventItem from './EventItem'

const EventList = () => {
    const [events, setEvents] = useState([])

    const fetchEvents = async () => {
        const res = await fetch("https://ventixe-eventservice-app-dba4gpfwd4eebeff.swedencentral-01.azurewebsites.net/api/events")
        if (res.ok) {
            const response = await res.json()
            setEvents(response.result)
        }
    }

    useEffect(() => {
        fetchEvents()
    }, [])

    return (
        <div className="events-grid">
            {events.map(event => ( <EventItem key={event.id} item={event} />
            ))}
        </div>
    )
}

export default EventList
