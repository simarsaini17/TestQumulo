import React from 'react';
import SidebarLayout from '../components/HOC/SidebarLayout';
import LineChartContainer from '@/components/LineChartContainer';
import IopsData from './IopsData';
import ThroughputData from './ThroughputData';

function Home() {
	return (
		<main className='flex min-h-screen flex-col px-4 pt-10 bg-[#13181E]'>
			<div className='flex text-gray-200 justify-between'>
				<p>Performance Metrics</p>
				<select className='border bg-gray-700 border-gray-700 rounded-md p-1'>
					<option value='days'>Last 7 days</option>
				</select>
			</div>
			<div className='py-14 pl-10'>
				<IopsData />
				<ThroughputData />
			</div>
		</main>
	);
}

export default SidebarLayout(Home);
