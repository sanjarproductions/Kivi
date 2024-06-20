import "./Slider.css"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

// import required modules
import { Autoplay } from 'swiper/modules';

const Slider = () => {
  return (
    <>
      <div className="slider">
        <div className="container">
          <Swiper
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            slidesPerView={4}
            spaceBetween={100}
            loop={true}
            className="mySwiper"
          >
            <SwiperSlide className="slider-item">Place</SwiperSlide>
            <SwiperSlide className="slider-item">Where</SwiperSlide>
            <SwiperSlide className="slider-item">Dreams</SwiperSlide>
            <SwiperSlide className="slider-item">Become</SwiperSlide>
            <SwiperSlide className="slider-item">Reality</SwiperSlide>
            <SwiperSlide className="slider-item">Kivi</SwiperSlide>
            <SwiperSlide className="slider-item">Studio</SwiperSlide>
            <SwiperSlide className="slider-item"></SwiperSlide>
            <SwiperSlide className="slider-item"></SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default Slider
