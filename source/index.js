// Import React Library
import React from 'react'
// Import the render method from ReactDom Library to render elements to dom, 
import { render } from 'react-dom'
// Import the createStore method from redux so we can have a predictable state through the complete app
import { createStore } from 'redux'
// Import the Provider object from the Redux to React bindings
import { Provider } from 'react-redux'

// Import the base styling
import './style.scss'

// Import the reducers used in the store
import reducer from './reducers'

// Import the ChuckNorris App
import App from './components/ChuckNorrisFactsApp/ChuckNorrisFactsApp.js'

// Create a imutable global store for the 
const store = createStore(reducer)

// Render app the dom
render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('main')
);