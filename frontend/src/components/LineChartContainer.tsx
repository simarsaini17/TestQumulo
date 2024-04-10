'use client';
import React, { useState } from 'react';
import CustomLineCharts from './LineCharts';
import CurrentValueContainer from './CurrentValueContainer';

interface LineCharContainerProps {
	data: any;
	units: string;
	headerText: string;
}

const LineChartContainer = ({
	data,
	units,
	headerText,
}: LineCharContainerProps) => {
	return (
		<div className='flex gap-10 mt-4'>
			<CustomLineCharts data={data} height={400} width={800} units={units} />
			<CurrentValueContainer
				headerText={headerText}
				readText={'Read'}
				readSpeed={`120 ${units}`}
				writeText={'Write'}
				writeSpeed={`123 ${units}`}
			/>
		</div>
	);
};

export default LineChartContainer;
