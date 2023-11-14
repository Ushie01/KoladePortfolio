import React from 'react';
import Kola from '../../../../assets/kola.png';
import Image from 'next/image';
import Container from '../../container/Container';
import Link from 'next/link';
import Linkedin from '@/src/client/shared/svg/Linkedin';
import Behance from '@/src/client/shared/svg/Behance';
import { Tab } from '@/src/client/shared/Tab';

const Header = () => {
    const navValue = ['Contact', 'Resume'];
	return (
		<Container bgColor='bg-lightGray'>
			<div className='flex items-center justify-between py-12'>
				<div className='flex items-center space-x-6 w-4/12 '>
					<Image
						src={Kola}
						alt='kola alt'
						height={50}
						width={50}
						className='rounded-full'
					/>
					<h1 className='font-bold text-white text-2xl'>Kolade</h1>
                </div>
                
				<div className='flex items-center justify-between w-7/12'>
                    <div className='flex space-x-10 text-2xl'>
                        <Tab initialState='Resume' data={navValue}  />
					</div>
					<div className='flex items-center justify-between space-x-6'>
						<div className='flex items-center space-x-2 text-2xl'>
							<Linkedin />
							<p className='underline'>Linkdin</p>
						</div>
						<div className='flex items-center space-x-2 text-2xl'>
							<Behance />
							<p className='underline'>Behance</p>
						</div>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default Header;
