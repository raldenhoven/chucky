// The default actions, in this way the actual string is only defined once
export const ADD_FAVORITE = 'ADD_FAVORITE'
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE'
// Get the action names from the actions/favorites
import { addMessage } from './messages'

const addFavorite = (fact) => {
	return {
		type: ADD_FAVORITE,
		fact
	}
}

// ADD_FAVORITE action
export const addToFavorites = (fact) => {
	return (dispatch, getState) => {
		// Test if Maximun of 10 favorites is reached
		if (maxFavoritesReached(getState())) {
			return dispatch(addMessage({
				msg: 'Maximum of favorites reached'
			}))
		}

		// Check if fact is not existing in favorites
		if (alreadyExistsInFavorite(fact, getState())) {
			return dispatch(addMessage({
				msg: 'Fact already saved'
			}))
		}

		return dispatch(addFavorite(fact))
	}
}

// Check if fact already exists in favorite array
const alreadyExistsInFavorite = (fact, state) => {
	if (!state.favorites || !state.favorites.facts) {
		return false
	}

	if (state.favorites.facts.findIndex((el) => { return el.id === fact.id }) === -1) {
		return false
	}

	return true
}

// Check the amount of favorites
const maxFavoritesReached = (state) => {
	// Limit the amount of favorites to 10
	if (!state.favorites || !state.favorites.facts || state.favorites.facts.length < 10) {
		return false
	}

	return true
}

// removeFavorite action
export const removeFavorite = (fact) => {
	return {
		type: REMOVE_FAVORITE,
		fact
	}
}