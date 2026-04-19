import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import Stories from './pages/Stories'
import StoryDetail from './pages/StoryDetail'
import Donate from './pages/Donate'
import About from './pages/About'
import Contact from './pages/Contact'

export default function App() {
  return (
    <BrowserRouter>
      <div className="site-shell">
        <header className="site-header">
          <div className="brand-row">
            <div>
              <p className="eyebrow">Feeding Filipino Families</p>
              <h1>Feeding the Filipinos</h1>
            </div>
            <a className="donate-pill" href="/donate">
              Donate now
            </a>
          </div>

          <nav className="main-nav" aria-label="Primary navigation">
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/stories">Stories</NavLink>
            <NavLink to="/donate">Donate</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
        </header>

        <main className="site-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stories" element={<Stories />} />
            <Route path="/stories/:storyId" element={<StoryDetail />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="site-footer">
          <div>
            <p>Feeding the Filipinos</p>
            <p>Building trust through stories, proof, and impact.</p>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  )
}
