export const getCorrectDate = (date: string): string => {
	return new Date(date).toLocaleString('en-US', {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});
};
