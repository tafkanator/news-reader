import classNames from 'classnames';
import { FC, FormEvent, ReactNode } from 'react';

import { Field } from 'src/components/field/Field';
import { useInput } from 'src/hooks/useInput';

import styles from './CommentForm.module.css';

export interface CommentFormValues {
	email: string;
	comment: string;
}

export interface CommentFormProps {
	onSubmit(values: CommentFormValues): Promise<void>;
	title?: ReactNode;
	className?: string;
}

export const CommentForm: FC<CommentFormProps> = ({ onSubmit, title, className }) => {
	const email = useInput('');
	const comment = useInput('');

	async function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		try {
			await onSubmit({
				email: email.value,
				comment: comment.value,
			});

			email.reset();
			comment.reset();
		} catch (_err) {
			// continue regardless of error
		}
	}

	return (
		<form onSubmit={handleSubmit} className={classNames(styles.wrap, className)}>
			{title}
			<Field type="email" label="Email" {...email} />
			<Field type="textarea" label="Comment" {...comment} />

			<button type="submit" className={classNames('btn', styles.btn)}>
				Add comment
			</button>
		</form>
	);
};
HTMLInputElement;
