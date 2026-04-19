import React from 'react'
import { Link } from 'react-router-dom'
import stories from '../data/stories'
import StoryCard from '../components/StoryCard'

const featured = stories[0]

export default function Home() {
  return (
    <div className="page page-home">
      <section className="hero-panel">
        <div className="hero-copy">
          <p className="eyebrow">Real Filipino families need real help</p>
          <h2>Help a hardworking mother earn more with a tricycle.</h2>
          <p>
            Support families through personal stories, proof of impact, and a frictionless donation route.
            Your gift reaches beneficiaries directly.
          </p>
          <div className="hero-buttons">
            <Link className="button button-primary" to="/donate">
              Donate now
            </Link>
            <Link className="button button-secondary" to="/stories">
              Explore stories
            </Link>
          </div>
        </div>

        <div className="hero-media">
          <img src={featured.heroImage} alt={featured.title} />
          <div className="hero-card">
            <p className="eyebrow">Featured story</p>
            <h3>{featured.title}</h3>
            <p>{featured.summary}</p>
            <Link className="button button-tertiary" to={`/stories/${featured.id}`}>
              Read the story
            </Link>
          </div>
        </div>
      </section>

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
