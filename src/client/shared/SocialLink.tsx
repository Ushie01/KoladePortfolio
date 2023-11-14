import Link from 'next/link';
import React from 'react';
import Linkedin from './svg/Linkedin';
import Behance from './svg/Behance';

const SocialLink = () => {
	return (
		<div className='flex items-center justify-between space-x-6'>
			<Link
				href='https://www.linkedin.com/in/koladedavid2/'
				className='flex items-center space-x-2 text-2xl'>
				<Linkedin />
				<p className='underline'>Linkdin</p>
			</Link>
			<Link
				href='https://www.behance.net/kollydre'
				className='flex items-center space-x-2 text-2xl'>
				<Behance />
				<p className='underline'>Behance</p>
			</Link>
		</div>
	);
};

export default SocialLink;
