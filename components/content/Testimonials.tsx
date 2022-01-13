import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';

interface Props {
	testimonials: {
		testimonial: string;
		_id: string;
	}[];
}

const Testimonials: React.FC<Props> = ({ testimonials }) => {
	const settings = {
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
				{testimonials.map(testimonial => (
					<div
						className='text-center font-light text-2xl italic'
						key={testimonial._id}
					>
						&quot;{testimonial.testimonial}&quot;
					</div>
				))}
			</Slider>
		</div>
	);
};

export default Testimonials;
