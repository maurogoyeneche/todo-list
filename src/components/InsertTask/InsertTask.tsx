import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addTask } from '../../redux/actions/task';

const InsertTask = () => {
	const dispatch = useDispatch();
	const [value, setValue] = useState<string>('');

	const handleSubmit = (ev: any) => {
		ev.preventDefault();
		if (value) {
			dispatch(addTask(value, Math.ceil(Math.random() * 100)));
			setValue('');
		}
	};
	return (
		<>
			<form action='' onSubmit={handleSubmit}>
				<div className='d-flex  align-items-baseline w-100'>
					<label htmlFor='task' className='w-100'>
						<input
							id='task'
							className='form-control w-100'
							type='text'
							name='task'
							value={value}
							placeholder='Insert tasks here...'
							onChange={(ev: React.ChangeEvent<HTMLInputElement>): void =>
								setValue(ev.target.value)
							}
						/>
					</label>
					<button type='submit' className='btn btn-outline-primary mx-1'>
						Add
					</button>
				</div>
				<p className=''>
					You will add this new task: <strong>{value}</strong>
				</p>
			</form>
		</>
	);
};

export default InsertTask;
