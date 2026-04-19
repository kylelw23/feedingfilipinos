import React from 'react'
import { Link } from 'react-router-dom'
import stories from '../data/stories'
import StoryCard from '../components/StoryCard'
import StoryCarousel from '../components/StoryCarousel'

const featured = stories[0]

export default function Home() {
  return (
    <div className="page page-home">
      <StoryCarousel stories={stories} />

      <section className="trust-grid">
        <article>
          <h4>100% impact</h4>
          <p>Every donation is directed to families through verified fundraisers.</p>
        </article>
        <article>
          <h4>Proof first</h4>
          <p>Photos, videos, and Zoom check-ins show the people behind the need.</p>
        </article>
        <article>
          <h4>Mobile-friendly giving</h4>
          <p>Donate quickly with a simple path from story to support.</p>
        </article>
      </section>

      <section className="story-preview-section">
        <div className="section-head">
          <h2>Stories that invite compassion</h2>
          <p>Read cases from families, siblings, and volunteers in need.</p>
        </div>
        <div className="cards-grid">
          {stories.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>
      </section>
    </div>
  )
}
