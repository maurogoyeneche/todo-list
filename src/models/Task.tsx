export default interface Task {
	id: number | undefined;
	title: string | undefined;
	isDone?: boolean;
	isDoing?: boolean;
}
