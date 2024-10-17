import React from 'react'
import './SlideMenu.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import ItalianCuisine from "../assets/italian-food.jpeg";
import FrenchCuisine from '../assets/French-Food.jpg';

const slides = [{image:ItalianCuisine, text:'Italian Cuisine'}, {image:FrenchCuisine, text:'French Cuisine'}];

export default function SlideMenu() {
  return (
    <section className="slide-menu">
        <Swiper
        modules={[Navigation, Pagination]} //для автоматичного перегортання додати Autoplay
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        //autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slide-menu__slide">
              <img src={slide.image} alt={slide.text} className="slide-menu__image" />
              <div className="slide-menu__overlay">
                <h1>{slide.text}</h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
