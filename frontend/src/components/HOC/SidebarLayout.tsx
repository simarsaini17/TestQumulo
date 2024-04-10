import React from 'react';
import Link from 'next/link';
import Sidebar from '../Sidebar';

const SidebarLayout = <P extends object>(
	WrappedComponent: React.ComponentType<P>
) => {
	const withSidebarLayout: React.FC<P> = (props) => {
		return (
			<div className='flex h-screen'>
				<aside className='top-0 left-0 w-64 h-full' aria-label='Sidenav'>
					<div className='overflow-y-auto py-5 px-3 h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700"'>
						<Sidebar>
							<ul className='max-w-md space-y-1 text-white list-disc list-inside dark:text-gray-400'>
								<li className='border-r border-transparent border-blue hover:bg-gray-700'>
									<Link href={'/'} className='text-white '>
										Performance Metrics
									</Link>
								</li>
								<li className='dark:hover:bg-gray-700'>
									<Link href={'/Snapshot'} className='text-white  '>
										Edit Snapshot Policy
									</Link>
								</li>
							</ul>
						</Sidebar>
					</div>
				</aside>
				<section className='flex-grow'>
					<WrappedComponent {...props} />
				</section>
			</div>
		);
	};
	return withSidebarLayout;
};
export default SidebarLayout;
