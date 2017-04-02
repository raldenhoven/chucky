// Get the action names from the actions/favorites
import { ADD_FAVORITE, REMOVE_FAVORITE } from '../actions/favorites'

// Handle the merge between state and action of favorites
const favorite = (state = {}, action) => {
  // Define the previous facts
  const facts = state.facts || []

  switch (action.type) {
    case ADD_FAVORITE:
      // Max of 10 favorites
      if (facts.length > 9) {
        return facts
      }

      // Only add a fact if it is not existing (matching on fact.id)
      if (facts.findIndex((el) => { return el.id === action.fact.id }) === -1) {
        facts.push(action.fact)
      }

      // Return the facts
      return facts
    case REMOVE_FAVORITE:
      // Get current position of favorite item to remove (matching on fact.id)
      const factIndex = facts.findIndex((el) => {
        return el.id === action.fact.id
      })

      // Only remove item if the key exist in favorites
      if (factIndex > -1) {
        facts.splice(factIndex, 1);  
      }
      
      // Return the facts
      return facts
  }
}

// Asign the favorites when recieved
const favorites = (state = {}, action) => {
	switch (action.type) {
    case REMOVE_FAVORITE:
		case ADD_FAVORITE:
      return Object.assign({}, state, {
        facts: favorite(state, action)
      })
		default:
			return state
	}
}

export default favorites