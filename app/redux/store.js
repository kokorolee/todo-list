import { createStore } from 'redux';

const defaultState = {
  arrNotes: [
    { id:1 ,name: 'default', time: 'time', checked: false  },
    { id:2 ,name: 'default2', time: 'time', checked: true  },
    { id:3 ,name: 'default3', time: 'time', checked: false  },
    { id:4 ,name: 'default4', time: 'time', checked: false  },
    { id:5 ,name: 'default5', time: 'time', checked: true  },
    { id:6 ,name: 'default6', time: 'time', checked: false  }
  ],
  filterStatus: 'SHOW_ALL',
  isAdding: false

}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'FILTER_SHOW_ALL':
        return { ...state, filterStatus:'SHOW_ALL' }
    case 'FILTER_DONE':
        return { ...state, filterStatus:'DONE' }
    case 'FILTER_UNDONE':
        return { ...state, filterStatus:'UNDONE' }
    case 'TOGGLE_CHECK_DONE': return {
      ...state,
      arrNotes: state.arrNotes.map(e => {
        if (e.id !== action.id) return e
        return {
          ...e,
          checked: !e.checked
        }
      })
    }
    case 'TOGGLE_ADD_NOTE':
      return {
        ...state, isAdding: !state.isAdding
      }

    case 'ADD_NOTE':
      return {
        ...state,
        arrNotes: [{ id: state.arrNotes.length + 1,
          name: action.name,
          time: action.time,
          checked: false
        }].concat(state.arrNotes)
      }
    default:
  }
  return state
}

const store = createStore(reducer)
export default store;
