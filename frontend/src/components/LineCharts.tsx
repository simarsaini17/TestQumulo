'use client';
import React from 'react';
import {
	LineChart,
	Line,
	CartesianGrid,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
} from 'recharts';

interface LineChartProps {
	width: number;
	height: number;
	data: any;
	units: string;
}

const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];

const formatXAxis = (tick) => {
	const date = new Date(tick);
	if (
		date.getHours() === 0 &&
		date.getMinutes() === 0 &&
		date.getSeconds() === 0
	) {
		return months[date.getMonth() + 1] + ' ' + date.getDate();
	}

	return '';
};

const CustomLineCharts = ({ width, height, data, units }: LineChartProps) => {
	const dataKey = units.toLowerCase() === 'iops' ? 'iops' : 'throughput';

	return (
		<div className='mb-10'>
			<ResponsiveContainer width={900} height={200}>
				<LineChart width={width} height={height} data={data}>
					<CartesianGrid vertical={false} />
					<XAxis
						tickLine={false}
						dataKey='date'
						tickFormatter={formatXAxis}
						interval={0}
					/>
					<YAxis
						axisLine={false}
						tickCount={3}
						tickFormatter={(tick) => {
							return units.toLocaleLowerCase() === 'iops'
								? `${tick} iops`
								: `${tick} GBs`;
						}}
						tickMargin={4}
					/>
					<Tooltip />
					<Line
						type='monotone'
						dataKey={`${dataKey}_read_speed`}
						stroke='#a407af'
						dot={false}
					/>
					<Line
						type='monotone'
						dataKey={`${dataKey}_write_speed`}
						stroke='#0000ff'
						dot={false}
					/>
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
};

export default CustomLineCharts;
