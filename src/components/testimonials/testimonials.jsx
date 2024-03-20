import React from 'react'
import './testimonials.css'
import AVTR1 from "../../assets/avatar1.jpg"
import AVTR2 from "../../assets/avatar2.jpg"
import AVTR3 from "../../assets/avatar3.jpg"
import AVTR4 from "../../assets/avatar4.jpg"

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Shivam Choudhary | Triton Electric Vehicles',
    review: 'Working alongside Ren has been a pleasure. His dedication and creativity shine through in every project. A great team player, Ren consistently delivers high-quality work and fosters a positive environment. I highly recommend Ren for his professionalism and collaborative spirit.'
  },
  // {
  //   avatar: AVTR2,
  //   name: 'Simbha',
  //   review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus placeat facere omnis laborum illo dicta qui? Beatae facilis, animi, minima, repellendus rem eius numquam neque obcaecati error ipsum quidem tempore'
  // },
  // {
  //   avatar: AVTR3,
  //   name: 'Kanti',
  //   review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus placeat facere omnis laborum illo dicta qui? Beatae facilis, animi, minima, repellendus rem eius numquam neque obcaecati error ipsum quidem tempore'
  // },
  // {
  //   avatar: AVTR4,
  //   name: 'Pumpy',
  //   review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus placeat facere omnis laborum illo dicta qui? Beatae facilis, animi, minima, repellendus rem eius numquam neque obcaecati error ipsum quidem tempore'
  // }
]
const testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Colleague Reviews</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        
        {/* DYNAMICALLY GENERATING TESTIMONIALS */}
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className="client__review">{review}</small>
              </SwiperSlide>
            )
          }
          )
        }
      </Swiper>
    </section>
  )
}

export default testimonials