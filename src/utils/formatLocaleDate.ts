export type DateFormat = 'YYYY-MM-DD' | 'YYYY-MM-DD hh:mm:ss';

export interface DateTimeProps {
	month?: Intl.DateTimeFormatOptions['month'];
	showTime?: boolean;
	showSeconds?: boolean;
}

/** used for showing localized date string to user */
export function formatLocaleDate(timestamp: number, options: DateTimeProps = {}) {
	const isLessThanSevenDays = Date.now() - timestamp < 1000 * 60 * 60 * 24 * 7;

	if (isLessThanSevenDays) {
		return timeAgo(timestamp);
	}

	return new Date(timestamp).toLocaleDateString(undefined, {
		year: 'numeric',
		month: options.month || 'short',
		day: 'numeric',
		hour: options.showTime ? '2-digit' : undefined,
		minute: options.showTime ? '2-digit' : undefined,
		second: options.showSeconds ? '2-digit' : undefined,
	});
}

/* returns how mutch time has passed from given date */
function timeAgo(timestamp: number) {
	const minutesLeft = Math.floor((Date.now() - timestamp) / 1000 / 60);
	const hoursLeft = Math.floor(minutesLeft / 60);
	const daysLeft = Math.floor(hoursLeft / 24);

	if (daysLeft > 1) {
		return `${daysLeft} days ago`;
	}

	if (daysLeft === 1) {
		return 'a day ago';
	}

	if (hoursLeft > 1) {
		return `${hoursLeft} hours ago`;
	}

	if (hoursLeft === 1) {
		return 'an hour ago';
	}

	if (minutesLeft > 1) {
		return `${minutesLeft} minutes ago ${new Date(timestamp)}`;
	}

	return `a moment ago ${new Date(timestamp)}`;
}
