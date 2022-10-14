import classNames from 'classnames';
import { FC, FormEvent, ReactNode, useState } from 'react';

import { Field } from 'src/components/field/Field';
import { useInput } from 'src/hooks/useInput';

import styles from './CommentForm.module.css';

export interface CommentFormValues {
	email: string;
	content: string;
}

export interface CommentFormProps {
	onSubmit(values: CommentFormValues): Promise<void>;
	title?: ReactNode;
	className?: string;
}

export const CommentForm: FC<CommentFormProps> = ({ onSubmit, title, className }) => {
	const email = useInput('');
	const content = useInput('');
	const [error, setError] = useState('');
	const [isSubmitting, setIsSubmitting] = useState(false);

	async function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setError('');
		setIsSubmitting(true);

		try {
			await onSubmit({
				email: email.value,
				content: content.value,
			});

			email.reset();
			content.reset();
		} catch (err) {
			setError(err instanceof Error ? err.message : 'Saving comment failed');
		} finally {
			setIsSubmitting(false);
		}
	}

	return (
		<form onSubmit={handleSubmit} className={classNames(styles.wrap, className)}>
			{title}
			<Field type="email" label="Email" {...email} />
			<Field type="textarea" label="Comment" {...content} />

			<div className={styles.footer}>
				<p className={styles.error}>{error}</p>
				<button type="submit" className="btn" disabled={isSubmitting}>
					{isSubmitting ? 'Saving data ...' : 'Add comment'}
				</button>
			</div>
		</form>
	);
};
HTMLInputElement;
