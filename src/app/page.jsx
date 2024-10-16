"use client"
import React, { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
// Components
import Blob from './components/Blob/Blob';
import Image from 'next/image'
// Images & Icons
// import closeIcon from "./img/closeIcon.svg"

export default function Home() {

  const [menuState, setMenuState] = useState(false)

  const handleClick = () => {
    setMenuState(!menuState)
  }
  console.log(menuState)

  return (
    <>
      <div className="home">
        <Blob/>

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
                <li><a href="mailto:kivistuido@gmail.com">kivistuido@gmail.com</a></li>
                <li><p>Kivi Studio Global</p></li>
              </ul>
              <ul className='links'>
                <li><a href="/ourwork">Our Work</a></li>
                <li><a href="/aboutus">About Us</a></li>
                <li><a href="/contact">Contact Us</a></li>
              </ul>
            </div>

          </div>
        </div>

        <nav>
          <div className="container">
            <a href='/contact' className='btn' target='_blank'>Get in Touch</a>
            <button onClick={handleClick}>
              <img src="/img/burger-menu.svg" alt="Burger Menu" width={24} height={8} />
            </button>
          </div>
        </nav>
        <main className={`main ${menuState ? "menuopen" : ""}`}>
          <section className='hero'>
            <div className="container">
              <div className="herobg-images">
                <img src="/img/hero-bg-img.png" alt="" />
              </div>
              <div className="shaddow"></div>
              <div className="hero-text">
                <h1 className='hero-title'>When Creativity <br /> Meets <span>Kivi</span></h1>
                <p className='hero-desc'>Discover a universe wheer <span>creativity flourishes</span>, turning ideas into <span>digital marvels</span> </p>
                <div className='btns-wrapper'>
                  <a className="booking__btn" href='https://calendly.com/sanjar-coder/discovery-call'>Book a Call</a>
                  <a className="refer__btn" href='#'>Refer a Friend</a>
                </div>
              </div>
            </div>
          </section>
          <section className='our-work'>
            <div className="container">
              <h2>OUR WORK</h2>
              <div className='our-work__text'>
                <p>Business challenges are tough, but we have a <span> proven record of elevating our </span> partners to their next and best selves</p>
                <a href="/ourwork" className="more-btn">See More Work</a>
              </div>
            </div>
          </section>
          <section className='slider'>

            <Swiper
              slidesPerView={3}
              centeredSlides={true}
              spaceBetween={170}
              loop={true}
              speed={10000}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]} className="mySwiper">

              <SwiperSlide>
                <a href="#">
                  <Image src="/img/img.svg" alt="" width={370} height={280}></Image>
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <Image src="/img/img.svg" alt="" width={370} height={280}></Image>
              </SwiperSlide>
              <SwiperSlide>
                <Image src="/img/img.svg" alt="" width={370} height={280}></Image>
              </SwiperSlide>
              <SwiperSlide>
                <Image src="/img/img.svg" alt="" width={370} height={280}></Image>
              </SwiperSlide>
              <SwiperSlide>
                <Image src="/img/img.svg" alt="" width={370} height={280}></Image>
              </SwiperSlide>
              <SwiperSlide>
                <Image src="/img/img.svg" alt="" width={370} height={280}></Image>
              </SwiperSlide>
              <SwiperSlide>
                <Image src="/img/img.svg" alt="" width={370} height={280}></Image>
              </SwiperSlide>
              <SwiperSlide>
                <Image src="/img/img.svg" alt="" width={370} height={280}></Image>
              </SwiperSlide>
              <SwiperSlide>
                <Image src="/img/img.svg" alt="" width={370} height={280}></Image>
              </SwiperSlide>
            </Swiper>

            <div className="container">

            </div>
          </section>

          <section className='our-services'>
            <div className="container">
              <div className="wrapper">
                <div className="main__text">
                  <h3>OUR SERVICES</h3>
                  <p>We offer a comprehensive range of services to meet your business needs. From user-centered design and digital  solutions to brand consulting.</p>
                </div>
                <div className="show">
                  <div className="text">
                    <p className="service-title">WEBSITE  DESIGN</p>
                    <h4>Hongqi  Motors</h4>
                    <p className="project-desc">Business challenges are tough, but we have a proven record of elevating our partners to their next and best selves</p>
                  </div>
                  <Image src={"/img/our-services.png"} alt='' width={"462"} height={"355"}></Image>
                </div>
              </div>
            </div>
          </section>

          <section className="build">
            <img src="/img/build-bg-img.png" alt="" className="build-bg-img" />
            <div className="container">
              <div className="text">
                <h5>Let’s Build something with KIVI</h5>
                <p>Business challenges are tough, but we have a proven record of elevating our partners to their next and best selves</p>
              </div>
              <div className="btns-wrapper">
                <a href="https://calendly.com/sanjar-coder/discovery-call">Book a Call</a>
                <a href="/testimonials">See Testimonials</a>
              </div>
            </div>
          </section>

        </main>

        <footer>
          <div className="container">
            <div className="info">
              <a href="mailto:kiviwebstudio@gmail.com">kiviwebstudio@gmail.com</a>
              <p>Remote , Global</p>
            </div>
            <div className="links">
              <a target="_blank" href="https://www.instagram.com/kivistudio_/">OUR INSTAGRAM</a>
              <a target="_blank" href="https://www.youtube.com/@kivistudio_">OUR YOUTUBE</a>
            </div>
            <div className="decor-logo">Kivi Studio</div>
          </div>
        </footer>
      </div>
    </>
  );
}



// Menu (open & close)
// 3rd Section slider inshallah
// Study Case Page
// Contact Us Page

// Refferal Programm
// Mobile Responsiveness
// 