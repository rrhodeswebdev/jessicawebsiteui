import React from 'react';
import dayjs from 'dayjs';
import {
	BiCalendarAlt as DateIcon,
	BiTime as TimeIcon,
	BiBuildings as VenueIcon,
	BiMapAlt as LocationIcon,
} from 'react-icons/bi';

interface Props {
	classDetails: {
		_id: string;
		datetime: string;
		description: string;
		lacedUrl: string;
		location: {
			city: string;
			state: string;
		};
		title: string;
		venue: string;
	};
}

const LacedClassBox: React.FC<Props> = ({ classDetails }) => {
	const formattedDate = dayjs(classDetails.datetime).format('MMMM D, YYYY');
	const formattedTime = dayjs(classDetails.datetime).format('h:mm A');

	return (
		<div className='bg-shade p-8 mb-8'>
			<h4 className='text-center text-lg mb-4'>{classDetails.title}</h4>
			<div className='flex justify-between w-full'>
				<div className='pr-2 w-1/3 flex flex-col'>
					<div className='mb-4'>
						<div className='flex items-center mb-2'>
							<DateIcon className='mr-2' />
							<p>
								Date:{' '}
								<span className='font-light'>
									{formattedDate}
								</span>
							</p>
						</div>
						<div className='flex items-center mb-2'>
							<TimeIcon className='mr-2' />
							<p>
								Time:{' '}
								<span className='font-light'>
									{formattedTime}
								</span>
							</p>
						</div>
						<div className='flex items-center mb-2'>
							<VenueIcon className='mr-2' />
							<p>
								Venue:{' '}
								<span className='font-light'>
									{classDetails.venue}
								</span>
							</p>
						</div>
						<div className='flex items-center mb-2'>
							<LocationIcon className='mr-2' />
							<p>
								Location:{' '}
								<span className='font-light'>
									{classDetails.location.city},{' '}
									{classDetails.location.state}
								</span>
							</p>
						</div>
					</div>
					<a href={classDetails.lacedUrl} target='_blank'>
						<button className='text-white bg-primary hover:bg-accent w-3/4 p-2 mb-6 transition-colors text-center uppercase font-light'>
							Register
						</button>
					</a>
				</div>
				<div className='pl-2 w-2/3'>
					<p className='font-light'>{classDetails.description}</p>
				</div>
			</div>
		</div>
	);
};

export default LacedClassBox;
