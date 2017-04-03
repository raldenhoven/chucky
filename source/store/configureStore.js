// This file is used to create the store this app uses

// Import the createStore and applyMiddleware from Redux
import { createStore, applyMiddleware } from 'redux'
// Import the reducers
import rootReducer from '../reducers/'
// Import thunkMiddleware for async actions
import thunkMiddleware from 'redux-thunk'
// Import createLogger so changes in the state are easy to debu
import { createLogger } from 'redux-logger'


// Import loadState and saveState from localStorage
import { loadState, saveState } from './localStorage'

export default function configureStore() {
	// Load the state from localstorage
	const persistedState = loadState()
	// Create the logger
	const loggerMiddleware = createLogger()

	// Create the store
	const store = createStore(
		rootReducer,
		persistedState,
		applyMiddleware(
			thunkMiddleware,
			loggerMiddleware
		)
 	)

	// Subscribe to changes in the store
	store.subscribe(() => {
		// Save changes in favorites to localstorage
		saveState({
			favorites: store.getState().favorites
		})
	})

 	// Return the default store object
 	return store
}