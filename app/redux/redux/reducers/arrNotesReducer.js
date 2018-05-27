import { AsyncStorage } from 'react-native';
const defaultArrayNotes = []

const arrNotesReducer = (state = defaultArrayNotes, action) => {
  if (action.type === 'TOGGLE_CHECK_DONE'){
    notes = state.map(e => {
      if (e.id !== action.id) return e
      return { ...e, checked: !e.checked }
    })
    crud(notes)
    return notes
  }
  if (action.type === 'HARD_DELETE_NOTE'){
    noteIndex = state.findIndex(e => {
      return e.id == action.id
    }) 
    let notes = [...state]
    notes.splice(noteIndex, 1)

    crud(notes)
    return notes

  }
  if (action.type === 'TOGGLE_EDIT'){
    note = state.map(e => {
      if (e.id !== action.id) return e
      return { ...e, isEditting: !e.isEditting }
    })
    crud(note)
    return note
  }
  if (action.type === 'ADD_NOTE'){
    id = 0;
    if (state.length > 0) id = state[0].id + 1
     note = {
      id: id,
      name: action.name,
      time: action.time,
      checked: false,
      isEditting: false,
      isDeleted: false
    };
    notes = [ note, ...state ]
    crud(notes)
    return notes
  }

  if (action.type === 'UPDATE_NOTE'){
    notes = state.map(e => {
      if (e.id !== action.id) return e
      return { ...e, name: action.name }
    })
    crud(notes)
    return notes
  }
  return state
}


const crud = (note) => {
  try {
    let parseData = JSON.stringify(note);
    AsyncStorage.setItem('note_value5', parseData );
  } catch (error) {
    console.log(error);
  }
}

export default arrNotesReducer;
