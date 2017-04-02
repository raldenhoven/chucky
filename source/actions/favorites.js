export const ADD_FAVORITE = 'ADD_FAVORITE'
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE'

export const addFavorite = (fact) => {
	return {
		type: ADD_FAVORITE,
		fact
	}
}

export const removeFavorite = (fact) => {
	return {
		type: REMOVE_FAVORITE,
		fact
	}
}