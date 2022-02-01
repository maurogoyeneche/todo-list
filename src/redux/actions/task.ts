import { createAction } from '@reduxjs/toolkit';

export const addtask = createAction('ADD_TASK', function prepare(value: string, id:number) {
  return {
    payload: { id: id, title: value },
  };
});