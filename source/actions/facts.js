export const REQUEST_FACTS = 'REQUEST_FACTS'
export const RECEIVE_FACTS = 'RECEIVE_FACTS'

const requestFacts = () => {
	return {
		type: REQUEST_FACTS
	}
}

const receiveFacts = (json) => {
	return {
		type: RECEIVE_FACTS,
		facts: json.value
	}
}


export const fetchFacts = () => {
	return dispatch => {
		dispatch(requestFacts())
		return fetch('http://api.icndb.com/jokes/random/10')
			.then(response => response.json())
			.then(json => dispatch(receiveFacts(json)))
	}
}

const shouldFetchFacts = (state) => {
	const facts = state.facts

	if (!facts) {
		return true
	} else {
		return false
	}
}

export const fetchFactsIfNeeded = () => {
	return (dispatch, getState) => {
		if (shouldFetchFacts(getState())) {
			return dispatch(fetchFacts())
		}
	}
}