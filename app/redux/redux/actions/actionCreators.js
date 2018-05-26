export function toggleAddNote(){
  return {type: 'TOGGLE_ADD_NOTE'}
}
export function addNote(name, time){
  return {type: 'ADD_NOTE', name, time}
}
export function toggleCheckDone(id){
  return { type: 'TOGGLE_CHECK_DONE', id }
}

export function filterShowAll(){
  return { type: 'FILTER_SHOW_ALL'}
}
export function filterDone(){
  return { type: 'FILTER_DONE'}
}
export function filterUnDone(){
  return { type: 'FILTER_UNDONE'}
}
