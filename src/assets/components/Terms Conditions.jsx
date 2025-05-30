import React from 'react'

const TermsConditions = () => {
  return (
    <div className="content-section terms-section">
        <h2 className="section-title">Terms & Conditions</h2>
        <ol className="terms-list">
            <li>
                <strong>Ticket Purchase and Entry</strong>
                <ul>
                    <li>All attendees must possess a valid ticket for entry.</li>
                    <li>Tickets are non-refundable and non-transferable unless specified by the event organizer.</li>
                    <li>Attendees must present a valid government-issued ID along with their ticket at the gate.</li>
                </ul>
            </li>
            <li>
                <strong>Security and Safety</strong>
                <ul>
                    <li>All bags and personal items are subject to security screening.</li>
                    <li>Prohibited items include weapons, illegal substances, outside food and beverages.</li>
                    <li>The event organizer reserves the right to refuse entry or remove individuals who violate safety protocols.</li>
                </ul>
            </li>
        </ol>
      </div>
  )
}

export default TermsConditions