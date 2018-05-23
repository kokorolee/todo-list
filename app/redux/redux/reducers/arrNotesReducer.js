

const defaultArrayNotes = [
    { id:1 ,name: 'default', time: 'time', checked: false, isEditting: false  },
    { id:2 ,name: 'default2', time: 'time', checked: true, isEditting: false  },
    { id:3 ,name: 'default3', time: 'time', checked: false, isEditting: false  },
    { id:4 ,name: 'default4', time: 'time', checked: false, isEditting: false  },
    { id:5 ,name: 'default5', time: 'time', checked: true, isEditting: false  },
    { id:6 ,name: 'default6', time: 'time', checked: false, isEditting: false  }
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
