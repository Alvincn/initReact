import { combineReducers } from 'redux'
import countReducer from './counts'
import tigerReducer from './tiger'

// 合并所有reducers
export default combineReducers({
  count: countReducer,
  tigerArr: tigerReducer,
})
