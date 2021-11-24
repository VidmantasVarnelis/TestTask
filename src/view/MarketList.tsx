import React from 'react';
import ListError from '../components/ListError';
import Currancy from '../components/Currancy';
import { ICoin } from 'src/model/Coin';
import { ListApi } from 'src/hooks/Api';

const MarketList: React.FC = () => {
	const { coinsState } = ListApi();
	if (coinsState.error) return <ListError />;
	return (
		<div>
			{coinsState.coin.length > 0 ? (
				coinsState.coin
					.sort((a, b) => b.market_cap - a.market_cap)
					.map((coin: ICoin) => (
						<Currancy key={coin.id} coin={coin} />
					))
			) : (
				<div className='list__loader'>
					<div className='loader'></div>
				</div>
			)}
		</div>
	);
};
export default MarketList;
