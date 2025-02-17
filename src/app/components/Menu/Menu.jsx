"use client"
import React from 'react'
import "./Menu.css"
import Link from 'next/link'
import { useState } from 'react'

const Menu = () => {

  const [menuState, setMenuState] = useState(false)

  const handleClick = () => {
    setMenuState(!menuState)
  }
  // console.log(menuState)

  return (

    <>
      <div className={`menu ${menuState ? "open" : ""}`}>
        <div className="container">

          <div className="close-btn__wrapper">
            <button onClick={handleClick}>
              <img src="/img/closeIcon.svg" alt="" />
            </button>
          </div>
          <div className="content-wrapper">
            <ul className='contact'>
              <li><p>LET’S TALK WITH US</p></li>
              <li><Link href="mailto:kivistuido@gmail.com">kivistuido@gmail.com</Link></li>
              <li><p>Kivi Studio Global</p></li>
            </ul>
            <ul className='links'>
              <li><Link href="/ourwork">Our Work</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </div>
      
      <nav>
        <div className="container">
          <Link href='/contact' className='btn' >Get in Touch</Link>
          <button onClick={handleClick}>
            <img src="/img/burger-menu.svg" alt="Burger Menu" width={24} height={8} />
          </button>
        </div>
      </nav>

    </>
  )
}

export default Menu
