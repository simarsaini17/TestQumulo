import React from 'react';

const SpeedValues = ({ Text, Speed, className }) => {
	return (
		<>
			<span className='text-gray-400'>{Text}</span>
			<div className={className}>{Speed}</div>
		</>
	);
};

export default SpeedValues;
