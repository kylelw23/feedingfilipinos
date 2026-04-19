import React from 'react'

export default function Contact() {
  return (
    <div className="page page-contact">
      <section className="page-head">
        <p className="eyebrow">Contact</p>
        <h2>Reach out with a story, question, or support offer.</h2>
        <p>If you are a family in need, a volunteer, or a donor with questions, we want to hear from you.</p>
      </section>

      <form className="contact-form">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" placeholder="Your name" />

        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" placeholder="you@example.com" />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="6" placeholder="Tell us how we can help"></textarea>

        <button className="button button-primary" type="submit">
          Send message
        </button>
      </form>

      <div className="contact-proof">
        <h3>Proof of legitimacy</h3>
        <p>We share live video check-ins, receipts, and donor updates to make the process transparent.</p>
      </div>
    </div>
  )
}
