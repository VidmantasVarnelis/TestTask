import React, { useState } from 'react';
import {
	BsArrowUpCircleFill,
	BsArrowDownCircleFill,
	BsChevronDown,
} from 'react-icons/bs';
import { CoinInfoApi } from 'src/hooks/Api';
import { ICoin } from 'src/model/Coin';
import CurrancyInfo from './CurrancyInfo';

interface Props {
	coin: ICoin;
}

const Currancy: React.FC<Props> = (props) => {
	const [collapse, setCollapse] = useState<boolean>(false);
	const { coin } = props;
	const { coinInfoState } = CoinInfoApi(coin.id, collapse);
	return (
		<div className='coin__button-container'>
			<button
				key={coin.id}
				onClick={() => setCollapse((prevState) => !prevState)}
				className='coin__button'
			>
				<div className='coin__button-inner-flex'>
					<div className='coin__header-flex'>
						<img src={coin.image} alt='' className='coin__img' />
						<div className='coin__left-inner-container'>
							<h2>
								{coin.name} <span>{coin.symbol}</span>
							</h2>
							<p>{coin.current_price}€</p>
						</div>
					</div>
					<div className='coin__right-outter-flex'>
						<div>
							<div className='coin__right-inner-flex'>
								<BsArrowUpCircleFill color='green' size={18} />
								<p>{coin.high_24h}€</p>
							</div>
							<div className='coin__right-inner-flex'>
								<BsArrowDownCircleFill color='red' size={18} />
								<p>{coin.low_24h}€</p>
							</div>
						</div>
						<BsChevronDown
							size={18}
							className={collapse ? 'chevron-up' : 'chevron-down'}
						/>
					</div>
				</div>
			</button>
			{collapse && <CurrancyInfo info={coinInfoState} />}
		</div>
	);
};
export default Currancy;
