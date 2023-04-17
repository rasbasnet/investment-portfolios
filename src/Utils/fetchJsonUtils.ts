export const fetchLoginInfo = async () =>
	await fetch("src/mockData/loginData.json").then((response) =>
		response.json()
	);

export const fetchCustomerData = async () =>
	await fetch("src/mockData/customerData.json").then((response) =>
		response.json()
	);
