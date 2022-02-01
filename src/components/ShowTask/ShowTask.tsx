import React from 'react';
import { useSelector } from 'react-redux';
import Task from '../../models/Task';

const ShowTask = () => {
	const task: Task[] | any = useSelector<any>(state => state.taskReducer.tasks);

	return (
		<ul className='list-group'>
			{task &&
				task.map((task: Task) => (
					<li
						key={task.id}
						className=' d-flex justify-content-between list-group-item p-0 border-0'
					>
						{`${task.title} -> ${task.id}`}

						<button
							type='button'
							className='btn btn-sm btn-outline-success mx-1'
						>
							Move
						</button>
					</li>
				))}
		</ul>
	);
};

export default ShowTask;
