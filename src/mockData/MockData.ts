import { MockData } from "./MockDataInterface";

const mockData: MockData[] = [];
mockData.push({
	customerName: "John Smith",
	portfolio: [
		{
			assetName: "Stocks",
			allocation: 0.6,
			riskScore: 8,
		},
		{
			assetName: "Bonds",
			allocation: 0.3,
			riskScore: 3,
		},
		{
			assetName: "Cash",
			allocation: 0.1,
			riskScore: 1,
		},
	],
});
mockData.push({
	customerName: "Jane Doe",
	portfolio: [
		{
			assetName: "Stocks",
			allocation: 0.8,
			riskScore: 9,
		},
		{
			assetName: "Bonds",
			allocation: 0.2,
			riskScore: 3,
		},
	],
});
mockData.push({
	customerName: "Bob Johnson",
	portfolio: [
		{
			assetName: "Stocks",
			allocation: 0.4,
			riskScore: 7,
		},
		{
			assetName: "Bonds",
			allocation: 0.3,
			riskScore: 3,
		},
		{
			assetName: "Real Estate",
			allocation: 0.2,
			riskScore: 6,
		},
		{
			assetName: "Commodities",
			allocation: 0.1,
			riskScore: 8,
		},
	],
});
mockData.push({
	customerName: "Alice Smith",
	portfolio: [
		{
			assetName: "Stocks",
			allocation: 0.5,
			riskScore: 9,
		},
		{
			assetName: "Bonds",
			allocation: 0.3,
			riskScore: 4,
		},
		{
			assetName: "Cash",
			allocation: 0.2,
			riskScore: 1,
		},
	],
});
export default mockData;
