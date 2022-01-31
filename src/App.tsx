import React from 'react';
import InsertTask from 'components/InsertTask/InsertTask';

function App() {
	return (
		<div className='App px-3'>
			<div className='container text-start'>
				<h1 className='mt-5  mb-5'>My To-Do List</h1>
				<div className='row'>
					<div className='col-md-4 border-end'>
						<pre className='text-muted '>To do</pre>
						<InsertTask />
					</div>
					<div className='col-md-4 border-end'>
						<pre className='text-muted'>Doing</pre>
					</div>
					<div className='col-md-4'>
						<pre className='text-muted'>Done</pre>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
