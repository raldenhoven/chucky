// Get the action names from the actions/facts
import { REQUEST_FACTS, RECEIVE_FACTS } from '../actions/facts'

// Handle the merge between state and action of facts
// For this demo this works, but it does not take in account that at a certain point all
// facts will be loaded.
// Also because we filter duplicates it might happen that fewer results are returned even though 
// we are not near the end.
// If this was a production solution I would do this in the following manner (a part of this logic should be set in the action):
// 		* Setup a pagination
// 		* Get the ammount of pages
//		* Get a random page that has not yet been fetched
//		* Fetch facts
const facts = (state = { facts: [] }, action) => {
	switch (action.type) {
		case RECEIVE_FACTS:
			// Use state.facts or empty array
			const facts = state.facts || []
			// Concat all facts, there could be duplicates here
			const allFacts = facts.concat(action.facts)
			// Filter all facts on id to remove duplicats
			return allFacts.filter((obj, pos, arr) => {
				return arr.map(mapObj => mapObj.id).indexOf(obj.id) === pos;
			});
		default:
			return []
	}
}

// Asign the facts when recieved
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

// Export the randomFacts
export default randomFacts