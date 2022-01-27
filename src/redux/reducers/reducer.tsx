export function reducer(state = { tasks: Array }, action:any) {
  switch (action.type) {
    case 'counter/incremented':
      return { ...state }
    case 'counter/decremented':
      return { ...state }
    default:
      return state
  }
}