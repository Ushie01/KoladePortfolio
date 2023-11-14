import Link from "next/link";
import { useLink } from "./Hooks/useLinks";

export const Tab = ({ data, initialState }: { initialState: string; data:string[]}) => {
	const { link, handleClick } = useLink(initialState);
	return (
		<div className='flex justify-between w-full space-x-5'>
			{data.map((value, index) => (
				<Link
					href='#'
					key={index}
					onClick={() => {
						handleClick(value);
					}}
					className={`flex items-center justify-center text-center transition transform duration-1000 ease-in-out w-full  ${
						link === value
							? `border-b-2`
							: `hover:border-b-2 border-b-2 border-b-lightGray`
					} `}>
					<p>{value}</p>
				</Link>
			))}
		</div>
	);
};
