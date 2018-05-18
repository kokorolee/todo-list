export function loadNote(notes) {
  return {
    type: 'LOAD_NOTE',
    notes: notes
  }
}

export function addNote() {
  return {
    type: 'ADD_NOTE',
    note: note
  }
}
