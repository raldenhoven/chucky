// This index file is used to combine all reducers
// By using this file we can simply call `import rootReducer from '../reducers/'` to import all availeble reducers

// Import combineReducers function
import { combineReducers } from 'redux'
// Import the randomFacts reducer
import randomFacts from './facts'
// Import the favorite reducer
import favorites from './favorites'

// Combine reducers
const reducers = combineReducers({
  randomFacts,
  favorites
})

// Export reducers as default
export default reducers