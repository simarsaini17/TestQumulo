import React from 'react';
import SpeedValues from './SpeedValues';

const CurrentValueContainer = ({
	headerText,
	readText,
	readSpeed,
	writeText,
	writeSpeed,
}) => {
	return (
		<div className='flex flex-col w-1/4'>
			<div className='border border-gray-700 p-4'>
				<SpeedValues
					Text={readText}
					Speed={readSpeed}
					className='text-[#a407af]'
				/>
			</div>
			<div className='border border-gray-700 p-4'>
				<SpeedValues
					Text={writeText}
					Speed={writeSpeed}
					className='text-[#000fff]'
				/>
			</div>
		</div>
	);
};

export default CurrentValueContainer;
