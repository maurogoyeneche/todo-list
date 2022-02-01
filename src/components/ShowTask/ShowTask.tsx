import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Task from '../../models/Task';

const ShowTask = () => {
	const task: Task[] | any = useSelector<any>(state => state.taskReducer.tasks);
	const dispatch = useDispatch();

	// const handleClick = () => {
	// 	// dispatch();
	// };

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
								onClick={() => console.log(`click in ${task.id}`)}
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
