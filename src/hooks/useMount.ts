import { useEffect, EffectCallback } from 'react';

export function useMount<T extends EffectCallback>(once: T) {
	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(once, []);
}
