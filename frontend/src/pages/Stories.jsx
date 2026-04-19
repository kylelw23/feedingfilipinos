import React from 'react'
import stories from '../data/stories'
import StoryCard from '../components/StoryCard'

export default function Stories() {
  return (
    <div className="page page-stories">
      <section className="page-head">
        <p className="eyebrow">Browse stories</p>
        <h2>Cases with urgency, proof, and direct donation links</h2>
        <p>Each story includes a summary, progress display, and a clear path to support.</p>
      </section>

      <div className="cards-grid">
        {stories.map((story) => (
          <StoryCard key={story.id} story={story} />
        ))}
      </div>
    </div>
  )
}
