// The default actions, in this way the actual string is only defined once
export const REQUEST_FACTS = 'REQUEST_FACTS'
export const RECEIVE_FACTS = 'RECEIVE_FACTS'

// REQUEST_FACTS action
const requestFacts = () => {
	return {
		type: REQUEST_FACTS
	}
}

// Map json to facts
const receiveFacts = (json) => {
	return {
		type: RECEIVE_FACTS,
		facts: json.value
	}
}

// Fetch new Facts function
export const fetchFacts = () => {
	return dispatch => {
		// Dispatch REQUEST_FACTS action
		dispatch(requestFacts())
		// Fetch json
		return fetch('http://api.icndb.com/jokes/random/10')
			// convert json to object
			.then(response => response.json())
			// convert object to RECEIVE_FACTS action
			.then(json => dispatch(receiveFacts(json)))
	}
}

// Check if application should get new facts
const shouldFetchFacts = (state) => {
	if (!state.facts) {
		return true
	} else {
		return false
	}
}

// Function which fetches facts when they are not assigned in current state
export const fetchFactsIfNeeded = () => {
	return (dispatch, getState) => {
		// Test if facts are assigned in current state
		if (shouldFetchFacts(getState())) {
			// Dispatch fetchFacts
			return dispatch(fetchFacts())
		}
	}
}