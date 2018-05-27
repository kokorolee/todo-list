import { AsyncStorage } from 'react-native';
const defaultArrayNotes = [

                          ]

const arrNotesReducer = (state = defaultArrayNotes, action) => {
  if (action.type === 'TOGGLE_CHECK_DONE'){
    note = state.map(e => {
      if (e.id !== action.id) return e
      return { ...e, checked: !e.checked }
    })
    crud(note)
    return note
  }
  if (action.type === 'SOFT_DELETE_NOTE'){
    note = state.map(e => {
      if (e.id !== action.id) return e
      return { ...e, isDeleted: true }
    })
    crud(note)
    return note
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
     note = [{
      id: state.length + 1,
      name: action.name,
      time: action.time,
      checked: false,
      isEditting: false,
      isDeleted: false
    }].concat(state)

    crud(note)
    return note
  }
  return state
}

const crud = (note) => {
  try {
    let parseData = JSON.stringify(note);
    AsyncStorage.setItem('note_value3', parseData );
  } catch (error) {
    console.log(error);
  }
}

export default arrNotesReducer;
