"use client"
// import React, { useState } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import Blob from '../../components/Blob/Blob';
import Menu from '../../components/Menu/Menu';
import Footer from '../../components/Footer/Footer';
import Image from 'next/image'

const Home = () => {
    return (
        <>
            <Blob />

            <div className="home">
                <Menu />
                <main>
                    <section className='hero'>
                        <div className="container">
                            <div className="herobg-images">
                                {/* <img src="/img/hero-bg-img.png" alt="" /> */}
                                <Image alt='hero-bg-img' src={"/img/home/hero-bg-img.png"} width={715} height={391}></Image>
                            </div>
                            <div className="shaddow"></div>
                            <div className="hero-text">
                                <h1 className='hero-title'>When Creativity <br /> Meets <span>Kivi</span></h1>
                                <p className='hero-desc'>Discover a universe wheer <span>creativity flourishes</span>, turning ideas into <span>digital marvels</span> </p>
                                <div className='btns-wrapper'>
                                    <a className="booking__btn" href='https://calendly.com/kivistudioweb/demo'>Book a Call</a>
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
                                <Link href="/ourwork" className="more-btn">See More Work</Link>
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
                                <Image src="/img/cars/dongfeng.svg" alt="" width={370} height={280}></Image>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src="/img/cars/jetour.svg" alt="" width={370} height={280}></Image>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src="/img/cars/hongqi.svg" alt="" width={370} height={280}></Image>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src="/img/cars/bestune.svg" alt="" width={370} height={280}></Image>
                            </SwiperSlide>

                            <SwiperSlide>
                                <Image src="/img/cars/dongfeng.svg" alt="" width={370} height={280}></Image>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src="/img/cars/jetour.svg" alt="" width={370} height={280}></Image>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src="/img/cars/hongqi.svg" alt="" width={370} height={280}></Image>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src="/img/cars/bestune.svg" alt="" width={370} height={280}></Image>
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
                        {/* <img src="/img/build-bg-img.png" alt="" className="build-bg-img" /> */}
                        {/* <Image src="/img/build-bg-img.png" alt="" className="build-bg-img" ></Image> */}
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
                    <Footer />
                </main>


            </div>
        </>
    )
}

export default Home


// + Menu (open & close)
// + React Router DOM for Next.JS (Link)
// + Study Case Page
// + Contact Us Page

// 3rd Section slider inshallah
// Submit Form Function
// Refferal Programm
// Mobile Responsiveness