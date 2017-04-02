import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from '../reducers/'

// Import the localStorage
import { loadState, saveState } from './localStorage'

const loggerMiddleware = createLogger()

export default function configureStore() {
	const persistedState = loadState()

	const store = createStore(
		rootReducer,
		persistedState,
		applyMiddleware(
			thunkMiddleware,
			loggerMiddleware
		)
 	)

 	store.subscribe(() => {
 		// Only remember the favorites
		saveState({
			favorites: store.getState().favorites
		})
	})

 	return store
}