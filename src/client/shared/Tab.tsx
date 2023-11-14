import Link from "next/link";
import { useLink } from "./Hooks/useLinks";

type Props = {
    data: {link : string; href: string }[];
    initialState: string;
}

export const Tab = ({ data, initialState }: Props) => {
	const { link, handleClick } = useLink(initialState);
	return (
		<div className='flex justify-between w-full space-x-5'>
			{data.map((value, index) => (
				<Link
					href={value.href}
					key={index}
					onClick={() => {
						handleClick(value.link);
					}}
					className={`flex items-center justify-center text-center transition transform duration-1000 ease-in-out w-full  ${
						link === value.link
							? `border-b-2`
							: `hover:border-b-2 border-b-2 border-b-lightGray`
					} `}>
					<p>{value.link}</p>
				</Link>
			))}
		</div>
	);
};
