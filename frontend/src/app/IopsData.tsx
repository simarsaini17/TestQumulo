'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LineChartContainer from '@/components/LineChartContainer';

export type dataType = {
	date: string;
	iops_read_speed: string;
	iops_write_speed: string;
};

const IOPSText = 'IOPS';

const IopsData = () => {
	const [data, setData] = useState<dataType[]>([]);

	useEffect(() => {
		const getData = async () => {
			try {
				const response = await axios.get('http://127.0.0.1:3333/api/iops');
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
			<span className='text-gray-400 mb-4'>{IOPSText}</span>
			<LineChartContainer data={data} units={'IOPS'} headerText={IOPSText} />
		</>
	);
};

export default IopsData;
