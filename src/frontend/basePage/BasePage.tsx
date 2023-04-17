import { Button, Grid, Typography } from "@mui/material";
import "./BasePageStyles.css";
import SearchBar from "../SearchBar/SearchBar";
import CustomerList from "../customerList/CustomerList";
import { useEffect, useState } from "react";
import { fetchCustomerData } from "../../Utils/fetchJsonUtils";

const BasePage: React.FC<{}> = () => {
	const [showCustomersList, setShowCustomersList] = useState(false);
	const [customerData, setCustomerData] = useState(null);

	useEffect(() => {
		async function getCustomerData() {
			const data = await fetchCustomerData();
			setCustomerData(data);
		}
		getCustomerData();
	}, []);

	return customerData ? (
		<Grid
			container
			spacing={3}
			direction="column"
			alignItems="center"
			className="basePage-container"
		>
			<Grid item container justifyContent="center" alignItems="center">
				<SearchBar customerData={customerData} />
			</Grid>
			<Button
				onClick={() => setShowCustomersList(!showCustomersList)}
				size="large"
			>
				Show Customers List
			</Button>
			{showCustomersList && (
				<Grid
					item
					container
					direction="column"
					alignItems="center"
					spacing={3}
				>
					<Grid item>
						<Typography variant="h5">All Customers List</Typography>
					</Grid>
					<CustomerList customerData={customerData} />
				</Grid>
			)}
		</Grid>
	) : (
		<div></div>
	);
};

export default BasePage;
