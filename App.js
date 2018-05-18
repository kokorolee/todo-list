import React from 'react';
import Main from './app/redux/Main.js'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import { store } from 'redux/store.js'
export default class App extends React.Component {
  render() {
    return (
        <Provider store = {store}>
          <Main/>
        </Provider>
    );
  }
}

//
const defaultState = {
  arrNotes: [
    { id:1 ,name: 'default', time: 'time', checked: false, isEditting: false  },
    { id:2 ,name: 'default2', time: 'time', checked: true, isEditting: false  },
    { id:3 ,name: 'default3', time: 'time', checked: false, isEditting: false  },
    { id:4 ,name: 'default4', time: 'time', checked: false, isEditting: false  },
    { id:5 ,name: 'default5', time: 'time', checked: true, isEditting: false  },
    { id:6 ,name: 'default6', time: 'time', checked: false, isEditting: false  }
  ],
  filterStatus: 'SHOW_ALL',
  isAdding: false,
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
    case 'EDIT_NOTE':
      return {
        ...state,
        state.arrNotes.map(e => {
          if (e.id !=== action.id) return e
          return {
            ...e,
            isEditting: !e.isEditting
          }
        })
      }
    default:
  }
  return state
}

const store = createStore(reducer)
