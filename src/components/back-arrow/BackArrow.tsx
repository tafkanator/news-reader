import { FC } from 'react';

export interface BackArrowProps {
	fill?: string;
	width?: number;
	height?: number;
}

export const BackArrow: FC<BackArrowProps> = ({ fill, width = 10, height = 21 }) => {
	return (
		<svg width={width} height={height} viewBox="0 0 10 21" fill={fill}>
			<path
				d="M8.995 20.996a.912.912 0 0 1-.383-.083.996.996 0 0 1-.326-.24l-7.99-8.886a1.126 1.126 0 0 1-.22-.362 1.22 1.22 0 0 1 0-.854c.052-.135.126-.258.22-.361l7.99-8.887a.955.955 0 0 1 .71-.327c.265 0 .52.117.709.327.188.209.293.492.293.788 0 .296-.105.58-.293.789l-7.292 8.098 7.292 8.098c.093.104.167.227.218.362a1.22 1.22 0 0 1 0 .854c-.05.136-.125.258-.218.362a.996.996 0 0 1-.326.24.912.912 0 0 1-.384.082Z"
				fill="#000"
			/>
		</svg>
	);
};
