import React from 'react';
import InsertTask from 'components/InsertTask/InsertTask';
import ShowTask from 'components/ShowTask/ShowTask';
import { useSelector } from 'react-redux';
import Task from '../src/models/Task';

function App() {
	const task: Task[] | any = useSelector<any>(state => state.taskReducer.tasks);
	const taskInDoing = task.find(
		(t: { isDoing: boolean }) => t.isDoing === true
	);
	console.log(taskInDoing);
	console.log(task);

	return (
		<div className='App px-3'>
			<div className='container text-start'>
				<h1 className='mt-5  mb-5'>My To-Do List</h1>
				<InsertTask />
				<div className='row mt-5'>
					<div className='col-md-4 border-end'>
						<pre className='text-muted bg-light'>To do</pre>
						<ShowTask />
					</div>
					<div className='col-md-4 border-end'>
						<pre className='text-muted bg-light'>Doing</pre>
						{taskInDoing === true ? <ShowTask /> : '...do something dude'}
					</div>
					<div className='col-md-4'>
						<pre className='text-muted bg-light'>Done</pre>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
