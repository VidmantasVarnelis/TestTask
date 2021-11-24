import React from 'react';

const ListError: React.FC = () => {
	return (
		<div className='error'>
			<h1>List can't be loaded</h1>
			<p>Try Again Later</p>
			<button onClick={() => window.location.reload()}>Reload</button>
		</div>
	);
};
export default ListError;
