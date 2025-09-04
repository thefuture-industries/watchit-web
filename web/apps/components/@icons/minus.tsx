interface IconProps {
	fill: string;
	size?: number;
	style?: any;
	className?: string;
	onClick?: () => any;
}

export const Minus: React.FC<IconProps> = ({ fill, size = 24, className, style, onClick }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className={className}
			viewBox={`0 0 24 24`}
			fill={fill}
			style={style}
			width={size}
			height={size}
			onClick={onClick}
		>
			<path d="M19,13H5V11H19V13Z" />
		</svg>
	);
};
export default Minus;
