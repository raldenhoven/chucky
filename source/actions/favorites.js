// The default actions, in this way the actual string is only defined once
export const ADD_FAVORITE = 'ADD_FAVORITE'
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE'

// ADD_FAVORITE action
export const addFavorite = (fact) => {
	return {
		type: ADD_FAVORITE,
		fact
	}
}
// removeFavorite action
export const removeFavorite = (fact) => {
	return {
		type: REMOVE_FAVORITE,
		fact
	}
}