import { createAction } from '@reduxjs/toolkit';


 const addTask = createAction('ADD_TASK', function prepare(value: string, id:number, isDoing?: boolean) {
  return {
    payload: { id: id, title: value, isDoing: false },
  };
});

 const addTaskToDoing = createAction('ADD_TASK_TO_DOING', function prepare(value: string, id:number, isDoing?:boolean) {
  return {
    payload: { id: id, title: value, isDoing:true },
  };
});

 export {addTask, addTaskToDoing};

