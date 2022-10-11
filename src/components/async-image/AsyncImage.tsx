import classNames from 'classnames';
import { FC, ImgHTMLAttributes, useEffect, useRef, useState } from 'react';

import { useOnScreen } from 'src/hooks/useOnScreen';

import styles from './AsyncImage.module.css';

export interface AsyncImageProps {
	src: string;
	alt: string;
	width?: ImgHTMLAttributes<HTMLImageElement>['width'];
	height?: ImgHTMLAttributes<HTMLImageElement>['height'];
	className?: string;
}

const fallbackSrc = '/no-image.png';

export const AsyncImage: FC<AsyncImageProps> = ({ src, alt, width, height, className }) => {
	const [isLoaded, setIsLoaded] = useState(false);
	const [hasError, setHasError] = useState(false);
	const [currentSrc, setCurrentSrc] = useState<string>();
	const imgRef = useRef<HTMLImageElement | null>(null);
	const isOnScreen = useOnScreen(imgRef, '100px');

	// set image src when element is in viewport to start loading image
	useEffect(() => {
		if (isOnScreen && currentSrc !== src && src !== '') {
			setCurrentSrc(src);
		}
	}, [isOnScreen, currentSrc, setCurrentSrc, src]);

	// set fallback src if image fails to load
	useEffect(() => {
		if (hasError && !isLoaded) {
			setCurrentSrc(fallbackSrc);
		}
	}, [hasError, isLoaded]);

	return (
		<img
			key={currentSrc} /* force re-render on src change so onLoad and onError events trigger properly */
			src={currentSrc}
			ref={imgRef}
			alt={alt}
			width={width}
			height={height}
			className={classNames(styles.wrap, { [styles.isLoaded]: isLoaded }, className)}
			onLoad={() => {
				setHasError(false);
				setIsLoaded(true);
			}}
			onError={() => {
				setIsLoaded(false);
				setHasError(true);
			}}
		/>
	);
};
