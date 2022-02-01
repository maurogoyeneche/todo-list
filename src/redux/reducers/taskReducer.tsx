import { createReducer } from '@reduxjs/toolkit';
import { addtask } from '../actions/task';
import Task from '../../models/Task';

export interface IAppState {
	tasks: Task[];
}
const initialState: IAppState = {
	tasks: [],
};

export const taskReducer = createReducer(initialState, {
	[addtask.type]: (state: IAppState, action: any) => ({
		...state,
		tasks: [...state.tasks, action.payload],
	}),
});
