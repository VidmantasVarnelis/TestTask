import MarketList from './view/MarketList';
import './styles/style.css';
function App() {
	console.log(`process.`, process.env.TEST124);
	return (
		<div className='container'>
			<MarketList />
		</div>
	);
}

export default App;
