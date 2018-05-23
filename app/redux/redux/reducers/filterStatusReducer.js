const filterStatusReducer = (state = 'SHOW_ALL', action) => {
  if (action.type === 'FILTER_SHOW_ALL') return 'SHOW_ALL';
  if (action.type === 'FILTER_DONE') return 'DONE';
  if (action.type === 'FILTER_UNDONE') return 'UNDONE';
  return state;
}
export default filterStatusReducer;
