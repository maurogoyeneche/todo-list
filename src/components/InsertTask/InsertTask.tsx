import ShowTask from 'components/ShowTask/ShowTask';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IAppState } from '../../redux/reducers/taskReducer';
import { addtask } from '../../redux/actions/task';

const InsertTask = () => {
	const task = useSelector<IAppState>(state => state.tasks);
	console.log(task);
	const dispatch = useDispatch();
	// const [task, setTask] = useState<Task[]>([]);
	const [value, setValue] = useState<string>('');

	const handleSubmit = (ev: any) => {
		ev.preventDefault();
		if (value) {
			dispatch(addtask(value, Math.ceil(Math.random() * 100)));
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
			<ShowTask />
		</>
	);
};

export default InsertTask;
