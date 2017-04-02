import { ADD_FAVORITE, REMOVE_FAVORITE } from '../actions/favorites'

const favorite = (state = {}, action) => {
  const facts = state.facts || []

  switch (action.type) {
    case ADD_FAVORITE:
      if (facts.findIndex((el) => { return el.id === action.fact.id }) === -1) {
        facts.push(action.fact)
      }

      return facts
    case REMOVE_FAVORITE:
      const factIndex = facts.findIndex((el) => {
        return el.id === action.fact.id
      })

      if (factIndex > -1) {
        facts.splice(factIndex, 1);  
      }
      
      return facts
  }
}


const favorites = (state = {}, action) => {
	switch (action.type) {
		case ADD_FAVORITE:
      return Object.assign({}, state, {
        facts: favorite(state, action)
      })
    case REMOVE_FAVORITE:
      return Object.assign({}, state, {
        facts: favorite(state, action)
      })
		default:
			return state
	}
}

export default favorites