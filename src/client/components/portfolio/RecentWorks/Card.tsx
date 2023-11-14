import React from 'react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

type Props = {
	frame: StaticImageData;
	img: StaticImageData;
	workTitle: string;
	projectType: string;
	viewWebsite: string;
	index: number;
	link: string;
};

const Card = ({
	frame,
	img,
	workTitle,
	projectType,
	viewWebsite,
	index,
	link,
}: Props) => {
	return (
		<div className={`${index % 2 === 1 ? '-mb-32' : ''}`}>
			<div className='relative w-3/7'>
				<Image
					src={frame}
					alt='alt pic'
					className='h-[600px]'
				/>

				<Link
					href={link}
					className='absolute top-4 left-4 hover:top-0 hover:left-0 h-[600px] '>
					<Image
						src={img}
						alt='alt pic'
						className='h-[600px]'
					/>
				</Link>
			</div>

			<div className='flex flex-col mt-16 ml-16'>
				<p className='text-gray-200 font-bold'>{workTitle}</p>
				<p className='text-xs text-gray-400 mt-2'>{projectType}</p>
				<Link href={link} className='underline font-bold text-xl mt-5'>{viewWebsite}</Link>
			</div>
		</div>
	);
};

export default Card;
