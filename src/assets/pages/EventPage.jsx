// EventPage.jsx
import React from 'react'
import Nav from '../components/Nav'
import Header from '../components/Header'
import Footer from '../components/Footer'
import EventList from '../components/EventList'

const EventPage = () => {
  return (
    <div className="portal-wrapper">
      <aside className="sidebar">
        <Nav />
      </aside>
      <header>
        <Header />
      </header>
      <main>
        <div className="main-content">
          <EventList />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default EventPage