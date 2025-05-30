import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import Header from '../components/Header'
import Footer from '../components/Footer'
import EventImage from '../components/EventImage'
import EventInfo from '../components/EventInfo'
import AboutEvent from '../components/AboutEvent'
import TermsConditions from '../components/Terms Conditions'
import { useParams } from 'react-router-dom'


const EventDetailsPage = () => {

  const {id}=useParams()

      const [event, setEvent] = useState({})

    const fetchEvent = async () => {
        const res = await fetch(`https://ventixe-eventservice-app-dba4gpfwd4eebeff.swedencentral-01.azurewebsites.net/api/events/${id}`)
        if (res.ok) {
            const response = await res.json()
            setEvent(response.result)
        }
    }

    useEffect(() => {
        fetchEvent()
    }, [])


  return (
    <div className="portal-wrapper">
      <aside className="sidebar">
        <Nav />
      </aside>
      <header>
        <div className="header">
          <h1 className="page-title">Event Details</h1>  
        </div>
      </header>
      <main>
        <div className="main-content">
          <div className="event-details-container">
            <EventImage item={event}/>
            <EventInfo item={event}/>
            <AboutEvent item={event}/>  
          </div>
            <TermsConditions />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default EventDetailsPage