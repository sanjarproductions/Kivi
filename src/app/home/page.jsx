"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

import "./style.css"
import Image from 'next/image'

const H = () => {

    return (
        <>
            <div className="home">
                <div className="blob" id='blob'></div>
                <nav>
                    <div className="container">
                        <a href='https://calendly.com/sanjar-coder/discovery-call' className='btn' target='_blank'>Get in Touch</a>
                        <button>
                            <img src="/img/burger-menu.svg" alt="Burger Menu" width={24} height={8} />
                        </button>
                    </div>
                </nav>
                <main>
                    <section className='hero'>
                        <div className="container">
                            <div className="herobg-images">
                                <img src="/img/hero/right-card.png" alt="" />
                                <img src="/img/hero/middle-card.png" alt="" />
                                <img src="/img/hero/left-card.png" alt="" />
                            </div>
                            <div className="shaddow"></div>
                            <div className="hero-text">
                                <h1 className='hero-title'>When Creativity <br /> Meets <span>Kivi</span></h1>
                                <p className='hero-desc'>Discover a universe wheer <span>creativity flourishes</span>, turning ideas into <span>digital marvels</span> </p>
                                <div className='btns-wrapper'>
                                    <a className="booking__btn" href='https://calendly.com/sanjar-coder/discovery-call'>Book a Call</a>
                                    <a className="refer__btn" href='https://calendly.com/sanjar-coder/discovery-call'>Refer a Friend</a>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className='our-work'>
                        <div className="container">
                            <h2>OUR WORK</h2>
                            <div className='our-work__text'>
                                <p>Business challenges are tough, but we have a <span> proven record of elevating our </span> partners to their next and best selves</p>
                                <button>See More Work</button>
                            </div>
                        </div>
                    </section>
                    <section className='slider'>

                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            loop={true}
                            speed={1200}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            modules={[Autoplay, Pagination]} className="mySwiper">
                            <SwiperSlide>Slide 1</SwiperSlide>
                            <SwiperSlide>Slide 2</SwiperSlide>
                            <SwiperSlide>Slide 3</SwiperSlide>
                            <SwiperSlide>Slide 4</SwiperSlide>
                            <SwiperSlide>Slide 5</SwiperSlide>
                            <SwiperSlide>Slide 6</SwiperSlide>
                            <SwiperSlide>Slide 7</SwiperSlide>
                            <SwiperSlide>Slide 8</SwiperSlide>
                            <SwiperSlide>Slide 9</SwiperSlide>
                        </Swiper>

                        <div className="container">

                        </div>
                    </section>
                    <section className='our-work'>
                        <div className="container">
                            <div className="wrapper">
                                <div className="text">
                                    <h3>OUR SERVICES</h3>
                                    <p>We offer a comprehensive range of services to meet your business needs. From user-centered design and digital  solutions to brand consulting.</p>
                                </div>
                                <div className="show">
                                    <div className="text">
                                        <p>WEBSITE  DESIGN</p>
                                        <h4>Hongqi  Motors</h4>
                                        <p>Business challenges are tough, but we have a proven record of elevating our partners to their next and best selves</p>
                                    </div>
                                    <Image src={"/img/slider/slide-2.png"} alt='' width={"100"} height={"100"}></Image>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                <footer>
                    <div className="container">

                    </div>
                </footer>
            </div>
        </>
    )
}

export default H
