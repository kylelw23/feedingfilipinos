import React from 'react'

export default function About() {
  return (
    <div className="page page-about">
      <section className="page-head">
        <p className="eyebrow">About us</p>
        <h2>Mission-driven giving centered on Filipino families and trusted proof.</h2>
        <p>We connect compassionate donors with verified stories from the Philippines using photos, video, and community-led updates.</p>
      </section>

      <section className="about-grid">
        <article>
          <h3>Our mission</h3>
          <p>To inspire action through storytelling, keep transparency visible, and make every donation easy for the Filipino diaspora and caring individuals.</p>
        </article>
        <article>
          <h3>How we build trust</h3>
          <ul>
            <li>Feature open links to verified GoFundMe campaigns.</li>
            <li>Display proof from photos, videos, and Zoom check-ins.</li>
            <li>Share progress on funding goals and clear impact statements.</li>
          </ul>
        </article>
        <article>
          <h3>What we believe</h3>
          <p>Every family deserves the dignity of support. We elevate stories from everyday Filipinos who are working hard to keep their households afloat.</p>
        </article>
      </section>
    </div>
  )
}
