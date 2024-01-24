// 引入api，creatStore用于创建store对象
import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import allReducers from './reducers/index'
import thunk from 'redux-thunk'

// export default createStore(allReducers, applyMiddleware(thunk))
export default createStore(allReducers, applyMiddleware(thunk))
