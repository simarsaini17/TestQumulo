import React from 'react';
import SidebarLayout from '../../components/HOC/SidebarLayout';
import EditSnapshot from '@/components/EditSnapshot';

const Snapshot = () => {
	return (
		<main className='flex min-h-screen flex-col px-10 pt-2 bg-[#13181E]'>
			<p className='mb-2 text-gray-200'>Edit Snapshot Policy</p>
			<EditSnapshot />
		</main>
	);
};

export default SidebarLayout(Snapshot);
