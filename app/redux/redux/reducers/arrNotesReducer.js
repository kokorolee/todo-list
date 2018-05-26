import { AsyncStorage } from 'react-native';
const defaultArrayNotes = [
                            { id:1 ,
                              name: 'default',
                              time: 'time',
                              checked: false,
                              isEditting: false
                            },
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
  if (action.type === 'ADD_NOTE'){
     note = [{
      id: state.length + 1,
      name: action.name,
      time: action.time,
      checked: false
    }].concat(state)

    crud(note)

    return note
  }
  return state
}

const crud = (note) => {
  try {
    console.log('arrNotesReducer: ' + JSON.stringify(note, null, 4));
    let parseData = JSON.stringify(note);
    AsyncStorage.setItem('note_value', parseData );
  } catch (error) {
    console.log(error);
  }
}

export default arrNotesReducer;
