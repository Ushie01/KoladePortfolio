import React from 'react';
import Image from 'next/image';
import Container from '../container/Container';
import FlarePro from '../../../assets/FlarePro.png';
import Paybuymax from '../../../assets/Paybuymax.png';
import Wlet from '../../../assets/Wlet.png';

const WorkedProject = () => {
	return (
		<Container bgColor='bg-lightPurple'>
			<div className='flex items-center justify-between px-40 py-10'>
				<Image
					src={FlarePro}
					alt='flare alt'
					className='p-6'
				/>
				<Image
					src={Paybuymax}
					alt='Paybuymax alt'
					className='p-6'
				/>
				<Image
					src={Wlet}
					alt='Wlet alt'
					className='p-6'
				/>
			</div>
		</Container>
	);
};

export default WorkedProject;
