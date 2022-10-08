import { useState, RefObject } from 'react';

import { useMount } from 'src/hooks/useMount';

export function useOnScreen<T extends Element>(ref: RefObject<T>, rootMargin = '0px') {
	const [isIntersecting, setIntersecting] = useState(false);

	useMount(() => {
		const observer = window.IntersectionObserver
			? new IntersectionObserver(
					([entry]) => {
						// Update state when observer callback fires
						setIntersecting(entry.isIntersecting);
					},
					{
						rootMargin,
					},
			  )
			: setIntersecting(true);

		if (ref.current && observer) {
			observer.observe(ref.current);
		}

		const refCopy = ref.current;

		return () => {
			if (refCopy && observer) {
				observer.unobserve(refCopy);
			}
		};
	});

	return isIntersecting;
}
