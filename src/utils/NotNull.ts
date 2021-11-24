export const isDataNotNull = (data: string | number) => {
	if (data) return data;
	else return '-';
};
