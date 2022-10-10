import { useState } from 'react';

export function useInput<T>(defaultValue: T) {
	const [value, setValue] = useState<T>(defaultValue);

	return {
		value,
		onChange: (newValue: T) => setValue(newValue),
		reset: () => setValue(defaultValue),
	};
}
