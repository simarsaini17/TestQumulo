'use client';
import React, { EventHandler, useState } from 'react';
import Input from './Input';
import axios from 'axios';
const checkboxLable = [
	'Everyday',
	'Mon',
	'Tue',
	'Wed',
	'Thur',
	'Fri',
	'Sat',
	'Sun',
];

type SnapshotConfigDataType = {
	policy_name: string;
	policy_directory: string;
	schedule: string;
	timezone: string;
	snapshot_time: string;
	snapshot_days: string;
	deletion_time: string;
};

const EditSnapshot = () => {
	const [policyName, setPolicyName] = useState<string>('');
	const [directoryName, setDirectoryName] = useState<string>('');
	const [scheduleType, setscheduleType] = useState('daily');
	const [checkedDays, setCheckedDays] = useState<string[]>([]);
	const [checkedRadioButton, setCheckedRadioButton] = useState({
		value: 'never',
	});
	const [minutes, setMinutes] = useState('');
	const [hour, setHour] = useState('');
	const [deletionTime, setDeletionTime] = useState('hour');
	const [deleteSnapshot, setDeleteSnapshotTime] = useState('');

	const currentTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

	const getPolicyName = (event: React.KeyboardEvent<HTMLInputElement>) => {
		const value = event.currentTarget.value;
		setPolicyName(value);
	};

	const getDirectoryName = (event: React.KeyboardEvent<HTMLInputElement>) => {
		const value = event.currentTarget.value;
		setDirectoryName(value);
	};

	const getScheduleType = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const value = event.currentTarget.value;
		setscheduleType(value);
	};

	const getHours = (event: React.SyntheticEvent<HTMLInputElement>) => {
		const { value } = event.currentTarget;
		const newValue = parseInt(value);
		if (newValue >= 0 && newValue <= 23) {
			setHour(value);
		} else {
			setHour('');
		}
	};

	const getMinutes = (event: React.SyntheticEvent<HTMLInputElement>) => {
		const { value } = event.currentTarget;
		const newValue = parseInt(value);
		if (newValue >= 0 && newValue <= 59) {
			setMinutes(value);
		} else {
			setMinutes('');
		}
	};

	const getDeleteSnapshotTime = (event) => {
		const value = event.target.value;
		setDeleteSnapshotTime(value);
	};

	const getCheckedDays = (event: React.SyntheticEvent<HTMLInputElement>) => {
		const { value } = event.currentTarget;
		const isChecked = event.currentTarget.checked;
		if (isChecked) {
			setCheckedDays((prevDays) => [...prevDays, value]);
		} else {
			setCheckedDays(checkedDays.filter((day) => day !== value));
		}
	};

	const getSnapshotValue = (event: React.ChangeEvent<HTMLInputElement>) => {
		const isSelectedRadioChecked = event.currentTarget.value;
		setCheckedRadioButton({ value: isSelectedRadioChecked });
	};

	const getDeletionTime = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const isDeletionvalue = event.currentTarget.value;
		setDeletionTime(isDeletionvalue);
	};

	const resetFormValue = () => {
		setPolicyName('');
		setDirectoryName('');
		setscheduleType('daily');
		setCheckedDays([]);
		setHour('');
		setMinutes('');
		setDeleteSnapshotTime('');
		setCheckedRadioButton({ value: 'never' });
		setDeletionTime('hour');
	};

	const onSnapshotSubmit = async (event) => {
		event.preventDefault();
		const days = checkedDays.toString();
		const snapshotTime = `${hour}:${minutes}`;
		const snapshotDeleteTime =
			checkedRadioButton.value !== 'never'
				? `${deleteSnapshot} ${deletionTime}`
				: '';
		const snapShotConfigData: SnapshotConfigDataType = {
			policy_name: policyName,
			policy_directory: directoryName,
			schedule: scheduleType,
			timezone: currentTimeZone,
			snapshot_time: snapshotTime,
			snapshot_days: days,
			deletion_time: snapshotDeleteTime,
		};

		try {
			const response = await axios.put(
				'http://127.0.0.1:3333/api/snapshot-config',
				snapShotConfigData
			);
			resetFormValue();
			return response.data;
		} catch (error) {
			console.log('There is problem in saving data', error);
		}
	};

	return (
		<div className='text-gray-400'>
			<form onSubmit={onSnapshotSubmit}>
				<div>
					<label>Policy Name</label>
					<Input
						type='text'
						name='policyName'
						value={policyName}
						className={
							'mt-2 w-1/4 bg-gray-700 text-gray-400 px-4 py-2 rounded-md mb-2'
						}
						onChange={getPolicyName}
					/>

					<label>Apply to Directory</label>
					<div className='flex flex-row w-4/5 mt-2'>
						<div className='flex mb-2 w-10 items-center justify-center text-gray-400 border border-gray-400 rounded-md'>
							/
						</div>
						<Input
							type='text'
							name='applyTo'
							value={directoryName}
							onChange={getDirectoryName}
							className={
								'flex-grow basis-9/12 bg-gray-700 text-gray-400 px-4 py-2 rounded-md mb-2'
							}
						/>
					</div>
				</div>
				<div>
					<p>Run policy on Following Schedule</p>
					<div className='mt-2 border bg-gray-700 pl-20 p-6 w-800'>
						<div className='flex gap-10 items-center'>
							<label>Select Schedule Type</label>
							<select
								id='schedule'
								onChange={getScheduleType}
								value={scheduleType}
								className='bg-gray-500 border border-gray-700 block p-2.5 text-gray-200 text-sm rounded-md'
							>
								<option value='hour'>Hour or Less</option>
								<option value='daily'>Daily or Weekly</option>
								<option value='monthly'>Monthly</option>
							</select>
						</div>
						<div className='flex row gap-10'>
							<p>Set to Time Zone</p>
							<p className='ml-10'>{currentTimeZone}</p>
						</div>
						<div className='flex gap-10 items-center'>
							<label>Take Snapshot at</label>
							<div className='flex ml-8'>
								<div>
									<Input
										type='text'
										name='hour'
										value={hour}
										onChange={getHours}
										className='bg-gray-500 border rounded-md w-10 h-8 text-center p-0.5 border-gray-700 block p-2.5 text-gray-200 text-sm'
									/>
								</div>
								<span>:</span>
								<div>
									<Input
										type='text'
										name='minute'
										value={minutes}
										onChange={getMinutes}
										className='bg-gray-500 border rounded-md w-10 h-8 text-center p-0.5 border-gray-700 block p-2.5 text-gray-200 text-sm'
									/>
								</div>
							</div>
						</div>
						<div className='flex gap-4 items-center'>
							<label>On the Following Day(s)</label>
							{checkboxLable.map((eachLable, index) => (
								<div key={index} className='ml-1'>
									<input
										type='checkbox'
										name={eachLable}
										value={eachLable}
										onChange={getCheckedDays}
										className='m-1'
									/>
									<label>{eachLable}</label>
								</div>
							))}
						</div>
						<div className='flex gap-10 items-center'>
							<label>Delete Each Snapshot</label>
							<div>
								<input
									type='radio'
									value='never'
									name='Never'
									checked={checkedRadioButton.value === 'never'}
									onChange={getSnapshotValue}
								/>
								<label>Never</label>
							</div>
							<div className='flex items-center justify-center'>
								<input
									type='radio'
									name='automatically'
									value='automatically'
									onChange={getSnapshotValue}
									checked={checkedRadioButton.value === 'automatically'}
								/>
								<label>Automatically</label>

								<Input
									type='text'
									value={deleteSnapshot}
									name='deleteSnapshotTime'
									onChange={getDeleteSnapshotTime}
									className='ml-2 bg-gray-500 border rounded-md w-10 h-8 border-gray-700 block p-2.5 text-gray-200 text-sm p-0.5 text-center '
								/>
								<select
									id='timeSchedule'
									onChange={getDeletionTime}
									value={deletionTime}
									className='bg-gray-500 border border-gray-700 text-center justify-center rounded-md h-8 block text-gray-200 text-sm ml-2 p-0'
								>
									<option value='minute'>minute(s)</option>
									<option value='hour'>hour(s)</option>
									<option value='day'>day(s)</option>
									<option value='week'>week(s)</option>
									<option value='month'>month(s)</option>
								</select>
							</div>
						</div>
					</div>
					<div className='text-wrap pt-10'>
						<div>
							<h2>Snapshot Locking</h2>
							<p>
								Locked snapshots cannot be deleted before the deletion schedule
								expires. For this feature to be available, snapshots must be set
								to automatically delete.
							</p>
							<input
								type='checkbox'
								value='enableLocked'
								name='lockedSnapshots'
								disabled={checkedRadioButton.value === 'never'}
							/>
							<label>Enabled locked Snapshots</label>
						</div>
						<div className='mt-10'>
							<input type='checkbox' checked={true} />
							<label>Enable Policy</label>
						</div>
						<div className='mt-10'>
							<button
								type='submit'
								className='border rounded-md bg-blue-800 p-4 text-gray-50'
							>
								Save policy
							</button>
							<button
								className='ml-2 border-transparent text-blue-800'
								onClick={resetFormValue}
							>
								Cancel
							</button>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};

export default EditSnapshot;
