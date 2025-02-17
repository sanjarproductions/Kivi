import React from 'react'
import './contact.css'
import Blob from '@/app/components/Blob/Blob'
import Menu from '@/app/components/Menu/Menu'
import Footer from '@/app/components/Footer/Footer'

const Contact = () => {
  return (
    <>
      <div className="contactpg-wrapper">
        {/* <Blob /> */}

        <Menu />
        <div className="content">
          <div className="container">
            <div className="header">
              <div className='flex'>
                <div className='header-title'>
                  <h1>Get in <br /> Touch </h1>
                  <img src="/img/contactpage/Hero.svg" alt="" />
                </div>
                <div className='header-desc'>
                  <p>Business challenges are tough, but we have a proven record of elevating our partners to their next and best selves</p>
                </div>
              </div>
            </div>
            <form className="form">
              <div className="flex">
                <div className='client-data'>
                  <input required type="text" placeholder='Your name' />
                  <input required type="email" placeholder='Your email' />
                  <select required name="" id="">
                    <option value="" selected disabled>Select your budget</option>
                    <option value="">$1.000 - $3.000</option>
                    <option value="">$3.000 - $5.000</option>
                    <option value="">$5.000 - $10.000</option>
                  </select>
                  <button className='send-btn'>Submit Quote</button>
                </div>
                <div className='client-message'>
                  <textarea required name="" id="" placeholder='Enter Description here'></textarea>
                </div>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Contact
