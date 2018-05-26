export function toggleAddNote(){
  return {type: 'TOGGLE_ADD_NOTE'}
}
export function addNote(name, time){
  return {type: 'ADD_NOTE', name, time}
}
export function toggleCheckDone(){
  return { type: 'TOGGLE_CHECK_DONE' }
}
