import React from 'react'
import Container from '../container/Container'

const ContactMe = () => {
  return (
		<Container bgColor='bg-lightGray'>
			<div className='w-full py-44' id='contactme'>
				<p className='text-white font-bold text-6xl cursor-default'>CONTACT ME</p>
				<div className='flex items-start justify-between mt-44 space-x-6'>
					<p className='text-gray-600 text-6xl font-bold cursor-default'>
						LET’S WORK <br /> TOGETHER
					</p>
					<div className='flex flex-col space-y-4'>
						<div className='border-2 text-3xl py-6 px-12'>
							koladedavid2@gmail.com
						</div>
						<div className='border-2 text-3xl py-6 px-12 '>
							+234 7038 941 107
						</div>
					</div>
				</div>
			</div>
		</Container>
	);
}

export default ContactMe