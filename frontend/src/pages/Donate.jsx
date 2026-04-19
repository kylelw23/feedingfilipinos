import React, { useState } from 'react'
import stories from '../data/stories'

export default function Donate() {
  const [selected, setSelected] = useState(stories[0].id)
  const story = stories.find((item) => item.id === selected)

  return (
    <div className="page page-donate">
      <section className="page-head">
        <p className="eyebrow">Donate with impact</p>
        <h2>Choose a story, select an amount, and give with confidence.</h2>
        <p>Every donation is linked directly to GoFundMe fundraisers and supported with transparency media.</p>
      </section>

      <section className="donation-panel">
        <div className="donation-form">
          <label htmlFor="story-select">Select a story</label>
          <select id="story-select" value={selected} onChange={(event) => setSelected(event.target.value)}>
            {stories.map((item) => (
              <option key={item.id} value={item.id}>
                {item.title}
              </option>
            ))}
          </select>

          <div className="quick-amounts">
            {[25, 50, 100].map((amount) => (
              <button key={amount} type="button" className="amount-pill">
                ${amount}
              </button>
            ))}
          </div>

          <a className="button button-primary" href={story.donateLink} target="_blank" rel="noreferrer">
            Donate to {story.title}
          </a>
        </div>

        <aside className="donation-trust">
          <h3>Support with trust</h3>
          <p>Each story includes proof through photos, videos, and live check-ins. Your donation lands directly on GoFundMe.</p>
          <ul>
            <li>100% of donations go to the family</li>
            <li>Verified story media and receipts</li>
            <li>Simple donor-focused giving flow</li>
          </ul>
        </aside>
      </section>
    </div>
  )
}
