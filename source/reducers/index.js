import { combineReducers } from 'redux'
import randomFacts from './facts'
import favorites from './favorites'

const reducers = combineReducers({
  randomFacts,
  favorites
})

export default reducers