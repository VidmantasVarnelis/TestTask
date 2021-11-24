export interface ICoin {
	id: number;
	image: string;
	name: string;
	symbol: string;
	current_price: number;
	high_24h: number;
	low_24h: number;
	market_cap: number;
}
export interface ICoinInformation {
	name: string;
	symbol: string;
	hashing_algorithm: number;
	description: { en: string };
	links: { homepage: [] };
	market_data: { market_cap: { eur: number } };
	genesis_date: string;
}
