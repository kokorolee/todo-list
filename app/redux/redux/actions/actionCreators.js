import { AsyncStorage } from 'react-native'
export function toggleAddNote(){
  return {type: 'TOGGLE_ADD_NOTE'}
}
export function addNote(name, time){
  return {type: 'ADD_NOTE', name, time}
}
export function toggleCheckDone(id){
  return { type: 'TOGGLE_CHECK_DONE', id }
}

export function filterShowAll(){
  return { type: 'FILTER_SHOW_ALL'}
}
export function filterDone(){
  return { type: 'FILTER_DONE'}
}
export function filterUnDone(){
  return { type: 'FILTER_UNDONE'}
}
//
// export function getDate (){
//   try {
//     const val = await AsyncStorage.getItem('note_value')
//     if (val !== null) {
//       console.log('if');
//       var data = JSON.parse(val)
//       console.log('componentDidMount '+ JSON.stringify(data, null,4) )
//       var defaultArrayNotes = {
//         arrNotes: data
//       }
//       this.setState({ arrNotes: createStore(reducer) })
//     }else {
//       console.log(defaultArrayNotes);
//       this.setState(defaultArrayNotes)
//     }
//   } catch (e) {
//     console.error(e)
//   }
// }
