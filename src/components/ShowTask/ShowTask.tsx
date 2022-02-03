import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Task from '../../models/Task';
import { addTask } from '../../redux/actions/task';

const ShowTask = () => {
	const task: Task[] | any = useSelector<any>(state => state.taskReducer.tasks);
	const dispatch = useDispatch();

	const handleClickToDoing = (task: Task[] | any) => {
		let { id, title, isDoing } = task;
		dispatch(addTask(title, id, (isDoing = true)));
		console.log(`moving on to doing? ${id} ${isDoing}`);
	};

	return (
		<ul className='list-group'>
			{task &&
				task.map((task: Task) => (
					<li
						key={Math.random()}
						className=' d-flex justify-content-between list-group-item p-0 border-0 border-bottom pt-3 pb-3'
					>
						{`${task.title} -> id: ${task.id}`}
						<div className='d-flex justify-content-between align-items-baseline mx-1'>
							<div
								className='btn btn-sm btn-outline-danger border-0'
								onClick={() => {}}
							>
								<i className='fas fa-minus-circle' />
							</div>
							<div
								className='btn btn-sm btn-outline-success border-0'
								onClick={() => handleClickToDoing(task)}
							>
								<i className='fas fa-arrow-circle-right' />
							</div>
						</div>
					</li>
				))}
		</ul>
	);
};

export default ShowTask;
