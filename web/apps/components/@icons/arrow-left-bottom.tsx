interface IconProps {
	fill: string;
	size?: number;
	style?: any;
	className?: string;
	onClick?: () => any;
}

export const ArrowLeftBottom: React.FC<IconProps> = ({ fill, size = 24, className, style, onClick }) => {
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
			<path d="M20 4V10.5C20 14.09 17.09 17 13.5 17H7.83L10.92 20.09L9.5 21.5L4 16L9.5 10.5L10.91 11.91L7.83 15H13.5C16 15 18 13 18 10.5V4H20Z"></path>
		</svg>
	);
};
export default ArrowLeftBottom;
