import axios from 'axios';
import { useState, useEffect } from 'react';
import { ICoin, ICoinInformation } from 'src/model/Coin';

interface ICoinState {
	coin: ICoin[];
	error: boolean;
}
export const ListApi = () => {
	const [coinsState, setCoinsState] = useState<ICoinState>({
		error: false,
		coin: [],
	});
	useEffect(() => {
		async function fetchCoins() {
			try {
				const response = await axios.get(
					'https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=10&page=1&sparkline=false'
				);
				setCoinsState({ error: false, coin: response.data });
			} catch {
				setCoinsState({ error: true, coin: [] });
			}
		}
		fetchCoins();
	}, []);
	return { coinsState };
};
export const CoinApi = (id: number, collapseState: boolean) => {
	const [coinInfoState, setCoinInfoState] = useState<ICoinInformation | null>(
		null
	);
	useEffect(() => {
		async function fetchCoinInfo() {
			try {
				const response = await axios.get(
					`https://api.coingecko.com/api/v3/coins/${id}`
				);
				setCoinInfoState(response.data);
			} catch {
				setCoinInfoState(null);
			}
		}
		collapseState && fetchCoinInfo();
	}, [collapseState, id]);
	return { coinInfoState };
};
