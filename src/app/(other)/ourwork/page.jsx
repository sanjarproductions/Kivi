import React from 'react'
import './ourwork.css'
import Link from 'next/link'

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
              Latest <span>Work</span></h1>
          </div>
          <main>
            <div className="cards">
              <div className="card">
                <a href="https://dongfenguzbekistan.uz/" target='_blank'>
                  <img src="/img/cars/dongfeng.svg" alt="" />
                </a>
                <div className="card-text">
                  <p>Website Development</p>
                  <p>Dong Feng Website</p>
                </div>
              </div>
              <div className="card">
                <a href="https://jetour-uzbekistan.uz/">
                  <img src="/img/cars/jetour.svg" alt="" />
                </a>
                <div className="card-text">
                  <p>Website Development</p>
                  <p>Jet Tour  Website</p>
                </div>
              </div>
              <div className="card">
                <a href="https://hongqiuzbekistan.uz/">
                  <img src="/img/cars/hongqi.svg" alt="" />
                </a>
                <div className="card-text">
                  <p>Website Development</p>
                  <p>Hong Qi Website</p>
                </div>
              </div>
              <div className="card">
                <a href="https://bestuneuzbekistan.uz/">
                  <img src="/img/cars/bestune.svg" alt="" />
                </a>
                <div className="card-text">
                  <p>Website Development</p>
                  <p>Bestune  Website</p>
                </div>
              </div>
            </div>
          </main>

          <section className="build">
            <img src="/img/build-bg-img.png" alt="" className="build-bg-img" />
            <div className="container">
              <div className="text">
                <h5>Let’s Build something with KIVI</h5>
                <p>Business challenges are tough, but we have a proven record of elevating our partners to their next and best selves</p>
              </div>
              <div className="btns-wrapper">
                <a href="https://calendly.com/kivistudioweb/demo">Book a Call</a>
                <Link href="/testimonials">See Testimonials</Link>
              </div>
            </div>
          </section>

        </div>
      </div>
      <Footer />
    </>
  )
}

export default OurWork
