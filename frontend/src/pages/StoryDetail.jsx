import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import stories from '../data/stories'

export default function StoryDetail() {
  const { storyId } = useParams()
  const story = stories.find((item) => item.id === storyId)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [storyId])

  if (!story) {
    return (
      <div className="page page-story-detail">
        <h2>Story not found</h2>
        <p>Return to the stories page to select a different case.</p>
        <Link className="button button-secondary" to="/stories">
          Back to stories
        </Link>
      </div>
    )
  }

  const progress = Math.round((story.raised / story.goal) * 100)

  return (
    <div className="page page-story-detail">
      <section className="story-detail-hero">
        <div className="story-detail-copy">
          <p className="eyebrow">{story.location}</p>
          <h2>{story.title}</h2>
          <p>{story.storyText}</p>
          <div className="story-detail-info">
            <div>
              <strong>${story.raised.toLocaleString()}</strong>
              <span>raised of ${story.goal.toLocaleString()}</span>
            </div>
            <div>
              <strong>{progress}%</strong>
              <span>funded</span>
            </div>
          </div>
          <a className="button button-primary" href={story.donateLink} target="_blank" rel="noreferrer">
            Donate via GoFundMe
          </a>
        </div>
        <div className="story-detail-media">
          <img src={story.heroImage} alt={story.title} />
          <div className="story-detail-badges">
            <span>Verified proof</span>
            <span>Community trust</span>
          </div>
        </div>
      </section>

      <section className="proof-section">
        <h3>Transparency & proof</h3>
        <ul>
          {story.proof.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="media-gallery">
        <h3>Story gallery</h3>
        <div className="gallery-grid">
          {story.images.map((src) => (
            <img key={src} src={src} alt={`${story.title} image`} />
          ))}
        </div>
        <div className="video-embed">
          <p>Watch the family share their journey:</p>
          <a href={story.video} target="_blank" rel="noreferrer">
            View video proof
          </a>
        </div>
      </section>
    </div>
  )
}
