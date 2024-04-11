'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LineChartContainer from '@/components/LineChartContainer';
import { dataType } from './IopsData';

const ThroughtPutText = 'ThroughPut';

const ThroughputData = () => {
	const [data, setData] = useState<dataType[]>([]);

	useEffect(() => {
		const getData = async () => {
			try {
				const response = await axios.get(
					'http://127.0.0.1:3333/api/throughput'
				);
				const data = response.data;
				setData(data);
			} catch (error) {
				console.error('Error fectching data', error);
			}
		};
		getData();
	}, []);

	if (!data?.length) {
		return null;
	}

	return (
		<>
			<span className='text-gray-400 mb-4'>{ThroughtPutText}</span>
			<LineChartContainer
				data={data}
				units={'Kbps'}
				headerText={ThroughtPutText}
			/>
		</>
	);
};

export default ThroughputData;
