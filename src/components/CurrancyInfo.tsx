import React from 'react';
import { ICoinInformation } from 'src/model/Coin';
import { isDataNotNull } from 'src/utils/NotNull';

interface Props {
	info: ICoinInformation | null;
}
const CurrancyInfo: React.FC<Props> = ({ info }) => {
	return (
		<div>
			{info ? (
				<div className='information'>
					<div>
						<h4>Name</h4>
						<p>{isDataNotNull(info.name)}</p>
					</div>
					<div>
						<h4>Symbol</h4>
						<p>{isDataNotNull(info.symbol)}</p>
					</div>
					<div>
						<h4>Market Cap</h4>
						<p>{isDataNotNull(info.market_data.market_cap.eur)}</p>
					</div>
					<div>
						<a href={info.links.homepage[0]}>Home Page</a>
					</div>
					<div>
						<h4>Hashing algorithm</h4>
						<p>{isDataNotNull(info.hashing_algorithm)}</p>
					</div>
					<div>
						<h4>Genesis Date</h4>
						<p>{isDataNotNull(info.genesis_date)}</p>
					</div>
					<div className='information__desc'>
						<h4>Description</h4>
						<p>{isDataNotNull(info.description.en)}</p>
					</div>
				</div>
			) : (
				<div className='loader-padding'>
					<div className='loader '></div>
				</div>
			)}
		</div>
	);
};
export default CurrancyInfo;
