import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';

interface Testimonial {
  testimonial: string;
  _id: string;
}

export default function Testimonials({ testimonials }: { testimonials: [] }) {
  const settings: object = {
    dots: false,
    infinite: true,
    adaptiveHeight: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className='p-6 mb-8 max-w-6xl mx-auto'>
      <Slider {...settings}>
        {testimonials.map((testimonial: Testimonial) => (
          <div
            className='text-center font-light text-2xl italic'
            key={testimonial._id}
          >
            "{testimonial.testimonial}"
          </div>
        ))}
      </Slider>
    </div>
  );
}