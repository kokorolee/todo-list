const defaultArrayNotes = [
    { id:1 ,name: 'default', time: 'time', checked: false, isEditting: false  },
]

const arrNotesReducer = (state = defaultArrayNotes, action) => {
  if (action.type === 'TOGGLE_CHECK_DONE') return state.map(e => {
    if (e.id !== action.id) return e
    return { ...e, checked: !e.checked }
  })

  if (action.type === 'ADD_NOTE')
    return [{
      id: state.length + 1,
      name: action.name,
      time: action.time,
      checked: false
    }].concat(state)
  return state
}

export default arrNotesReducer;
