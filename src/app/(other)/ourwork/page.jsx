import React from 'react'
import './ourwork.css'

//Components
import Menu from '@/app/components/Menu/Menu'
import Footer from '@/app/components/Footer/Footer'

const OurWork = () => {
  return (
    <>
      <Menu />
      <div className="ourworkpg-wrapper">
        <div className="container">
          <div className="header">
            <h1>Discover Our <br />
              Latest Work</h1>
          </div>
          <main>
            <div className="cards">
              <div className="card">
                <img src="/img/img.svg" alt="" />
                <div className="card-text">
                  <p>Website Development</p>
                  <p>Dong Feng Website</p>
                </div>
              </div>
              <div className="card">
                <img src="/img/img.svg" alt="" />
                <div className="card-text">
                  <p>Website Development</p>
                  <p>Dong Feng Website</p>
                </div>
              </div>
              <div className="card">
                <img src="/img/img.svg" alt="" />
                <div className="card-text">
                  <p>Website Development</p>
                  <p>Dong Feng Website</p>
                </div>
              </div>
              <div className="card">
                <img src="/img/img.svg" alt="" />
                <div className="card-text">
                  <p>Website Development</p>
                  <p>Dong Feng Website</p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default OurWork
