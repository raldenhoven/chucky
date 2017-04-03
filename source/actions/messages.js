// The default actions, in this way the actual string is only defined once
export const ADD_MESSAGE = 'ADD_MESSAGE'
export const REMOVE_MESSAGE = 'REMOVE_MESSAGE'

// Remember the message id
let nextId = 0;

// Dispatch the message
export const addMessage = (msg) => {
	const message = {
		id: nextId++,
		text: msg.msg
	}

	return dispatch => {
		// Remove message after 5 seconds
		setTimeout(() => {
			dispatch(removeMessage(message))
		}, 5000)

		// Recieved message
		return dispatch(recieveMsg(message))
	}
}

// ADD_MESSAGE action
const recieveMsg = (msg) => {
	return {
		type: ADD_MESSAGE,
		msg
	}
}


// REMOVE_MESSAGE action
const removeMessage = (msg) => {
	return {
		type: REMOVE_MESSAGE,
		msg
	}
}