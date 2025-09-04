interface IconProps {
	fill: string;
	size?: number;
	style?: any;
	className?: string;
	onClick?: () => any;
}

export const ChevronRight: React.FC<IconProps> = ({ fill, size = 24, className, style, onClick }) => {
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
			<path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
		</svg>
	);
};
export default ChevronRight;
