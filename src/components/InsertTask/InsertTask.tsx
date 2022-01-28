import React, { useState } from 'react';

const InsertTask = () => {
	const [task, setTasks] = useState<Array<string>>([]);
	const [value, setValue] = useState<string>('');

	const handleSubmit = (ev: any) => {
		ev.preventDefault();
		if (value) setTasks([...task, value]);
		setValue('');
	};

	return (
		<div className=''>
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
			<ul className='list-group'>
				{task &&
					task.map(task => (
						<li
							key={Math.random()}
							className=' d-flex justify-content-between list-group-item p-0 border-0'
						>
							{task}
							<button
								type='button'
								className='btn btn-sm btn-outline-success mx-1'
							>
								Move
							</button>
						</li>
					))}
			</ul>
		</div>
	);
};

export default InsertTask;
