// Get the action names from the actions/favorites
import { ADD_MESSAGE, REMOVE_MESSAGE } from '../actions/messages'

const message = (state, action) => {
	const items = state.items || []

	switch (action.type) {
		case REMOVE_MESSAGE:
			// Get current position of favorite item to remove (matching on fact.id)
			const msgIndex = items.findIndex((item) => {
				return item.id === action.msg.id
			})

			// Only remove item if the message exists
			if (msgIndex > -1) {
				items.splice(msgIndex, 1);  
			}
			
			return items
		case ADD_MESSAGE:
			// Add the new message to the array		
			items.push(action.msg)

			return items
		default: 
			return state
	}
}

// Asign the favorites when recieved
const messages = (state = {}, action) => {
	switch (action.type) {
		case REMOVE_MESSAGE:
		case ADD_MESSAGE:
			return Object.assign({}, state, {
				items: message(state, action)
			})
		default:
			return state
	}
}

export default messages