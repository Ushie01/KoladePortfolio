type Props = {
	children: React.ReactNode;
	bgColor: string;
};
const Container = ({ children, bgColor }: Props) => (
	<div className={`px-20 ${bgColor} h-max`}>{children}</div>
);

export default Container;
