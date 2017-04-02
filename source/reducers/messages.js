// Get the action names from the actions/favorites
import { MAX_FAVORITES, EXISTING_FAVORITE } from '../actions/favorites'

// Asign the favorites when recieved
const messages = (state = {}, action) => {
	switch (action.type) {
    case MAX_FAVORITES:
		case EXISTING_FAVORITE:
      return Object.assign({}, state, {
        message: action.msg,
      })
		default:
			return Object.assign({}, state, {
        message: undefined
      })
	}
}

export default messages