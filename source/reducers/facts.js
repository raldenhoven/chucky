import { REQUEST_FACTS, RECEIVE_FACTS } from '../actions/facts'

const facts = (state = { facts: [] }, action) => {
	switch (action.type) {
		case RECEIVE_FACTS:
			const facts = state.facts || []
			return facts.concat(action.facts)
		default:
			return []
	}
}

const randomFacts = (state = {}, action) => {
	switch (action.type) {
		case RECEIVE_FACTS:
			return Object.assign({}, state, {
				facts: facts(state, action)
			})
		default:
			return state
	}
}

export default randomFacts