type task = {
	task: {
		id: number | undefined;
		title: string | undefined;
		isDone?: boolean;
		isDoing?: boolean;
	}[];
};
type action = {
	type: string;
	payload: task;
};

export interface IAppState {
	tasks: task[];
}
const initialState: IAppState = {
	tasks: [],
};

export function reducer(state = initialState, action: action) {
	switch (action.type) {
		case 'ADD_TASK':
			return { ...state.tasks, tasks: action.payload };

		default:
			return state;
	}
}
