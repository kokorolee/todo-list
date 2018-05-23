import { combineReducers } from 'redux'

import arrNotesReducer from './arrNotesReducer.js'
import isAddingReducer from './isAddingReducer.js'
import filterStatusReducer from './filterStatusReducer.js'
const reducer = combineReducers ({
  arrNotes: arrNotesReducer,
  isAdding: isAddingReducer,
  filterStatus: filterStatusReducer
})

export default reducer;
