import React, { useEffect, useState } from 'react'
import {Link, useParams } from 'react-router-dom'
import Nav from '../components/Nav'
import Header from '../components/Header'

const BookingEventPage = () => {
  const {id} = useParams()

        const [event, setEvent] = useState({})
        const [formData, setFormData] = useState({
            eventId: id,
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            termsAccepted: false,
            newsletterSubscribed: false
        });
  
      const fetchEvent = async () => {
          const res = await fetch(`https://ventixe-eventservice-app-dba4gpfwd4eebeff.swedencentral-01.azurewebsites.net/api/events/${id}`)
          if (res.ok) {
              const response = await res.json()
              setEvent(response.result)
          }
      }



      const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({...prev,[name]: value}))

      }



      const handlesubmit = async (e) => {
          e.preventDefault()
            try {
              const res = await fetch(`https://bookingservice-dba4gpfwd4eebeff.swedencentral-01.azurewebsites.net/api/bookings/`,{

                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },

                body: JSON.stringify(formData)
                
            })

          if (!res.ok) {
            throw new Error('booking failed')
          } else {
            console.log('Bokning successful')
          }
          
        } 
        catch (err) {
          console.error('Error during booking:', err)
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
          <h1 className="page-title">Boka Biljett</h1>  
        </div>
      </header>
      <main>
        <div className="main-content">


            <div className="booking-container">
        <div className="main-form">
            <Link to={`/events/${id}`} className="Link">
              <button className="back-button">← Tillbaka till event details</button>
            </Link>


            <div className="form-header">
                <h1>Boka biljetter</h1>
                <div className="event-info">{event.title} • {event.eventDate}  • {event.location} </div>
            </div>

            <form id="bookingForm" onSubmit={handlesubmit} noValidate>
                    
                <div className="section">
                    <div className="section-title">👤 Kontaktuppgifter</div>
                    
                    <div className="form-row">
                        <div className="form-group">
                            <label className="form-label" htmlFor="firstName">Förnamn *</label>
                            <input type="text" name='firstName'  id="firstName" className="form-input" value={formData.firstName}  onChange={handleChange} required/>
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="lastName">Efternamn *</label>
                            <input type="text" name='lastName' id="lastName" className="form-input" value={formData.lastName}  onChange={handleChange}  required/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="form-label" htmlFor="email">E-postadress *</label>
                        <input type="email" name='email' id="email" className="form-input" value={formData.email}  onChange={handleChange} required/>
                    </div>

                    <div className="form-group">
                        <label className="form-label" htmlFor="phone">Telefonnummer *</label>
                        <input type="tel" name='phone' id="phone" className="form-input" value={formData.phone}  onChange={handleChange} required/>
                    </div>
                </div>

                <div className="checkbox-group">
                    <input type="checkbox" id="terms" name='termsAccepted' className="checkbox" value={formData.termsAccepted}  onChange={handleChange} required/>
                    <label htmlFor="terms" className="checkbox-label">
                        Jag accepterar <a href="#">användarvillkoren</a> och <a href="#">integritetspolicyn</a> *
                    </label>
                </div>

                <div className="checkbox-group">
                    <input type="checkbox" id="newsletter" name='newsletterSubscribed' className="checkbox" value={formData.newsletterSubscribed}  onChange={handleChange}/>
                    <label htmlFor="newsletter" className="checkbox-label">
                        Jag vill få information om kommande event via e-post
                    </label>
                </div>
            </form>
        </div>

        <div className="order-summary">
            <div className="summary-header">Ordersammanfattning</div>
            
            <div className="event-summary">
                <h3>{event.title}</h3>
                <p>📅 {event.eventDate}</p>
                <p>📍 {event.location}</p>
            </div>

            <div className="total-section" id="totalSection">
                
                <div className="total-row final">
                    <span>Totalt:</span>
                    <span id="finalTotal">{event.price} kr</span>
                </div>
            </div>

            <button type="submit" form="bookingForm" className="complete-order-btn" id="completeOrderBtn">
                Slutför beställning
            </button>
        </div>
    </div>






        </div>
      </main>
    </div>

  )
}  

export default BookingEventPage