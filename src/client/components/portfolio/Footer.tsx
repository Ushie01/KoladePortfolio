import React from 'react';
import Logo from '../../shared/Logo';
import Container from '../container/Container';
import SocialLink from '../../shared/SocialLink';
import Link from 'next/link';

const Footer = () => {
	return (
		<Container bgColor='bg-lightGray'>
			<div className='flex flex-col pb-20 pt-12 border-t border-t-gray-700'>
				<div className='flex items-center justify-between'>
					<Logo />
					<Link
						href='https://drive.google.com/file/d/1MjJcR-1GPV1QU1t-0Z7YTz1wlPpp5TTJ/view'
						className='text-white underline'>
						Resume
					</Link>
				</div>

				<div className='flex items-center justify-between mt-12'>
					<SocialLink />
					<Link href='#section1'>Go to the top</Link>
				</div>
			</div>
		</Container>
	);
};

export default Footer;
