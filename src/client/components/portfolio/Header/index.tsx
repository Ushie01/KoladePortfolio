import React from 'react';
import Container from '../../container/Container';
import { Tab } from '@/src/client/shared/Tab';
import Logo from '@/src/client/shared/Logo';
import SocialLink from '@/src/client/shared/SocialLink';
import { navValue } from '../../constant/data';

const Header = () => {
	return (
		<Container bgColor='bg-lightGray'>
			<div className='flex items-center justify-between py-12' id='section1'>
				<Logo />

				<div className='flex items-center justify-between w-7/12'>
					<div className='flex space-x-10 text-2xl'>
						<Tab
							initialState='Resume'
							data={navValue}
						/>
					</div>
					<SocialLink />
				</div>
			</div>
		</Container>
	);
};

export default Header;
