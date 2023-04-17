import { Grid, Typography } from "@mui/material";
import "./CustomerListStyles.css";
import { CustomerData } from "../../JsonInterfaces/CustomerDataInterface";

export interface CustomerListProps {
	customerData: CustomerData[];
}
const CustomerList: React.FC<CustomerListProps> = ({ customerData }) => {
	return (
		<Grid item container spacing={2}>
			{customerData.map((data) => (
				<Grid
					item
					xs={12}
					md={6}
					container
					direction="column"
					alignItems="center"
					justifyContent="flex-start"
					spacing={2}
				>
					<Grid item className="customerList-customerBox">
						<Typography variant="h4">
							{data.customerName}
						</Typography>
						{data.portfolio.map((portfolio) => (
							<>
								<Typography variant="h6">{`${portfolio.assetName}`}</Typography>
								<Typography>{`Allocation: ${portfolio.allocation}`}</Typography>
								<Typography>{`Risk Score: ${portfolio.riskScore}`}</Typography>
							</>
						))}
					</Grid>
				</Grid>
			))}
		</Grid>
	);
};

export default CustomerList;
