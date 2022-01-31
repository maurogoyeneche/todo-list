import React from 'react';

type task = {
	task: {
		id: number | undefined;
		title: string | undefined;
		isDone?: boolean;
		isDoing?: boolean;
	}[];
};
const ShowTask = ({ task }: task) => {
	return (
		<ul className='list-group'>
			{task &&
				task.map(task => (
					<li
						key={task.id}
						className=' d-flex justify-content-between list-group-item p-0 border-0'
					>
						{task.title}
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
