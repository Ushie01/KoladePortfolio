import React from 'react';
import Card from './Card';
import Container from '../../container/Container';
import { CARD_DATA } from '../../constant/data';

const RecentWorks = () => {
	return (
		<Container bgColor='bg-lightGray'>
			<div className='py-28 '>
				<p className='text-white text-6xl font-bold pb-16'>Recent works</p>
				<div className='grid grid-cols-2 gap-8 gap-x-24 gap-y-24 items-center justify-between '>
					{CARD_DATA.map((value, index) => (
						<Card
							index={index}
							link={value.link}
							img={value.img}
							frame={value.frame}
							workTitle={value.workTitle}
							projectType={value.projectType}
							viewWebsite={value.viewWebsite}
						/>
					))}
				</div>
			</div>
		</Container>
	);
};

export default RecentWorks;
