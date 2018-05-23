const isAddingReducer = (state = false, action) => {
  if (action.type === 'TOGGLE_ADD_NOTE') return !state
  return state
}
export default isAddingReducer;
