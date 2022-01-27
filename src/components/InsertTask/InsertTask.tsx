import React, { useState } from 'react';

interface Task { 
    task: string;
};


const InsertTask = () => {
  const [task, setTasks] = useState<Task[]>([]);
  console.log(task)
	const [inputValue, setInputValue] = useState('');

	const addTask = (e:any) => {
    e.preventDefault();
    setTasks([...task, {task: inputValue}]);
   
	
	};

	return (
		<div>
			<form action='' className='d-flex '>
				<label htmlFor='task'>
					<input
						id='task'
						className='form-control'
						type='text'
						name='task'
            value={inputValue}
						placeholder='Insert tasks here...'
            onChange={(
              ev: React.ChangeEvent<HTMLInputElement>,
          ): void => setInputValue(ev.target.value)}
					/>
				</label>
				<button
					type='button'
					className='btn btn-outline-primary'
					onClick={(e) => addTask(e)}
				>
					Add
				</button>
        <p>{inputValue}</p>
      
			</form>
			<ul className='list-group'>
				{task && task.map(task =><li key={Math.random()} className='list-group-item border-0'>{task.task}</li> )}
			</ul>
      	{/* <ul className='list-group'>
        	<li  className='list-group-item border-0'>{task?.task}</li>
			</ul> */}
		</div>
	);
};

export default InsertTask;
