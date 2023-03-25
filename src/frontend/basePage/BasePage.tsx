import { Button, Grid, Typography } from "@mui/material";
import "./BasePageStyles.css";
import SearchBar from "../SearchBar/SearchBar";
import CustomerList from "../customerList/CustomerList";
import { useState } from "react";

const BasePage: React.FC<{}> = () => {
	const [showCustomersList, setShowCustomersList] = useState(false);
	return (
		<Grid
			container
			spacing={3}
			direction="column"
			alignItems="center"
			className="basePage-container"
		>
			<Grid item container justifyContent="center" alignItems="center">
				<SearchBar />
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
					<CustomerList />
				</Grid>
			)}
		</Grid>
	);
};

export default BasePage;
