import { createStore, combineReducers } from 'redux'
//
const defaultArrayNotes = [
    { id:1 ,name: 'default', time: 'time', checked: false, isEditting: false  },
    { id:2 ,name: 'default2', time: 'time', checked: true, isEditting: false  },
    { id:3 ,name: 'default3', time: 'time', checked: false, isEditting: false  },
    { id:4 ,name: 'default4', time: 'time', checked: false, isEditting: false  },
    { id:5 ,name: 'default5', time: 'time', checked: true, isEditting: false  },
    { id:6 ,name: 'default6', time: 'time', checked: false, isEditting: false  }
]
const isAddingReducer = (state = false, action) => {
  if (action.type === 'TOGGLE_ADD_NOTE') return !state
  return state
}
const filterStatusReducer = (state = 'SHOW_ALL', action) => {
  if (action.type === 'FILTER_SHOW_ALL') return 'SHOW_ALL';
  if (action.type === 'FILTER_DONE') return 'DONE';
  if (action.type === 'FILTER_UNDONE') return 'UNDONE';
  return state;
}
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

const reducer = combineReducers ({
  arrNotes: arrNotesReducer,
  isAdding: isAddingReducer,
  filterStatus: filterStatusReducer
})
const store = createStore(reducer)

export default store;