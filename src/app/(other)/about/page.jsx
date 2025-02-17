import React from 'react'
import './about.css'

const About = () => {
  return (
    <>
      <div className="about">
        <nav>
          <div className="container">
            <a href='https://calendly.com/kivistudioweb/demo' className='btn' target='_blank'>Get in Touch</a>
            <button>
              <img src="/img/burger-menu.svg" alt="Burger Menu" width={24} height={8} />
            </button>
          </div>
        </nav>
        <main>
          <div className="container">
            <h1>Page is Under Construction</h1>
            <p>patience my brother</p>
          </div>
        </main>
      </div>
    </>
  )
}

export default About
