const isInStorage = (arr1, arr2) => {
	return JSON.parse(arr1).filter(item => arr2.includes(item.isin)).length === arr2.length;
}

const getBondsData = async ({ date, isins }) => {
	if (localStorage.getItem(date) && isInStorage(localStorage.getItem(date), isins)) {
		return JSON.parse(localStorage.getItem(date)).filter((item) => isins.includes(item.isin));
	}

	const result = await http.post({
		url: `/bonds/${date}`,
		body: isins
	});

	localStorage.setItem(date, JSON.stringify(result));

	return result;
};
