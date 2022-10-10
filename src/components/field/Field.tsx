import { ChangeEvent, ReactNode } from 'react';

import styles from './Field.module.css';

export type FieldType = 'text' | 'email' | 'textarea';

export interface FieldProps<T extends HTMLInputElement['value']> {
	label: ReactNode;
	type: FieldType;
	value: T;
	onChange(value: T): void;
}

export const Field = <T extends HTMLInputElement['value']>({ label, type, value, onChange }: FieldProps<T>) => {
	const inputProps = {
		className: styles.input,
		value,
		onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => onChange(e.target.value as T),
	};

	return (
		<label className={styles.wrap}>
			{label}
			{type === 'textarea' ? <textarea rows={4} {...inputProps} /> : <input type={type} {...inputProps} />}
		</label>
	);
};
