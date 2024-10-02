import React from 'react'
import Image from 'next/image'

import "./style.css"

const H = () => {
    return (
        <>
            <div className="home">
                <nav>
                    <div className="container">
                        <a href='https://calendly.com/sanjar-coder/discovery-call' className='no-fill-btn' target='_blank'>Get in Touch</a>
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
                                <div>
                                    <a href='https://calendly.com/sanjar-coder/discovery-call' className=''>Book a Call</a>
                                    <a href='https://calendly.com/sanjar-coder/discovery-call'>Book a Call</a>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="container">

                        </div>
                    </section>
                    <section>
                        <div className="container">

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
