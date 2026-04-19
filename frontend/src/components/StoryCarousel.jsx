import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function StoryCarousel({ stories }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeStory = stories[activeIndex]

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % stories.length)
    }, 6000)
    return () => window.clearInterval(timer)
  }, [stories.length])

  return (
    <section className="story-carousel">
      <div className="carousel-card">
        <div className="carousel-image-wrapper">
          <img src={activeStory.heroImage} alt={activeStory.title} />
        </div>
        <div className="carousel-copy">
          <p className="eyebrow">Featured case</p>
          <h3>{activeStory.title}</h3>
          <p>{activeStory.summary}</p>
          <div className="carousel-meta">
            <span>${activeStory.raised.toLocaleString()} raised</span>
            <span>Goal ${activeStory.goal.toLocaleString()}</span>
          </div>
          <div className="carousel-actions">
            <Link className="button button-primary" to={`/stories/${activeStory.id}`}>
              View story
            </Link>
            <Link className="button button-secondary" to="/stories">
              Browse all stories
            </Link>
          </div>
        </div>
      </div>

      <div className="carousel-controls">
        {stories.map((story, index) => (
          <button
            key={story.id}
            type="button"
            className={`carousel-dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Show ${story.title}`}
          />
        ))}
      </div>
    </section>
  )
}
