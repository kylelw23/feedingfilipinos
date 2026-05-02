import React from 'react'
import { Link } from 'react-router-dom'

export default function StoryCard({ story }) {
  return (
    <article className="story-card">
      <img src={story.heroImage} alt={story.title} />
      <div className="story-card-body">
        <p className="story-location">{story.location}</p>
        <h3>{story.title}</h3>
        <p>{story.summary}</p>
        <Link className="story-link" to={`/stories/${story.id}`}>
          View story
        </Link>
      </div>
    </article>
  )
}
