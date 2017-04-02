// A very simple wat to save the current redux state

// The loadSate function is used to read the serialized (JSON.stringify) state from localStorage
export const loadState = () => {
	try {
		// Get item from localStorage
		const serializedState = localStorage.getItem('state')
		
		// Not able to get item, return undefined
		if (serializedState === null) {
			return undefined
		}

		// Parse string as json
		return JSON.parse(serializedState)
	} catch (err) {
		// Somthing went wrong return undefined
		return undefined
	}
}

// The saveState is used to save the provided state as a serialized string to localStorage
export const saveState = (state) => {
	try {
		// Serialize state
		const serializedState = JSON.stringify(state)
		// Save state to localStorage
		localStorage.setItem('state', serializedState)
	} catch (err) {
		// Ignore write errors
	}
}