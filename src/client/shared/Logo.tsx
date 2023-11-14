import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Kola from '../../assets/kola.png'

const Logo = () => {
  return (
		<Link
			href='/'
			className='flex items-center space-x-6 w-4/12 '>
			<Image
				src={Kola}
				alt='kola alt'
				height={50}
				width={50}
				className='rounded-full'
			/>
			<h1 className='font-bold text-white text-2xl'>Kolade</h1>
		</Link>
	);
}

export default Logo