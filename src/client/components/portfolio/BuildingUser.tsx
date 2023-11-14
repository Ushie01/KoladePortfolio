import React from 'react';
import Container from '../container/Container';
import Envelope from '../../shared/svg/Envelope';

const BuildingUser = () => {
	return (
		<Container bgColor='bg-lightGray'>
			<div className='flex flex-col items-center justify-center py-24 h-max'>
				<p className='text-center text-white text-7xl text  font-bold'>
					Building user friendly <br /> & usable{' '}
					<span className=' text-indigo-500'>designs</span>
				</p>

				<p className='w-600 text-center px-96 mt-10'>
					I am a skilled and creative product designer who specializes in
					creating designs which helps solve human related problems in our today
					world. I have eyes for great designs.
				</p>

				<div className='flex items-center justify-between w-full mt-36'>
					<div>
						<p className='text-xs text-gray-500'>CONTACT ME FOR HIRE</p>
						<p className='text-xl underline text-gray-300'>
							koladedavid2@gmail.com
						</p>
						<Envelope />
					</div>

					<div className='flex flex-col justify-end'>
						<div className='flex text-xs text-gray-500 -ml-5'>
							<div className='h-1 w-7 bg-indigo-500 mt-2 mr-1'></div>FEATURE
							PROJECT
						</div>
						<p className='text-xl text-white'>Owlet App Landing Page</p>
						<p className='ml-10'>Product Web Design</p>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default BuildingUser;
