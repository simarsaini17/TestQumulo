import React from 'react';
import CompanyIcon from '../../Icons/companyIcon';
import UserIcon from '../../Icons/userIcon';

interface SidebarProps {
	children: React.ReactNode;
}

const Sidebar = ({ children }: SidebarProps) => {
	return (
		<div>
			<div className='flex p-2 space-y-2 border-b border-gray-200 dark:border-gray-700'>
				<CompanyIcon width={'28'} height={'28'} color={'#114E85'} />
				<span className='ml-4'>[Cluster Name]</span>
			</div>
			<div className='mt-3'>{children}</div>
			<div className='bottom-0 absolute p-4 mb-2 space-y-2 border-t border-gray-200 dark:border-gray-700'>
				<UserIcon width={'180'} height={'18'} color={'#F3F4F4'} />
			</div>
		</div>
	);
};

export default Sidebar;
