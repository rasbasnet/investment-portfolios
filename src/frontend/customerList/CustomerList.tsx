import { Grid, Typography } from "@mui/material";
import mockData from "../../mockData/MockData";
import "./CustomerListStyles.css";

const CustomerList: React.FC<{}> = () => {
	return (
		<Grid item container spacing={2}>
			{mockData.map((data) => (
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
