export interface MockData {
	customerName: string;
	portfolio: AssetAllocation[];
}

export interface AssetAllocation {
	assetName: string;
	allocation: number;
	riskScore: number;
}
