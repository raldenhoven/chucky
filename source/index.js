// Import React Library
import React from 'react'
// Import the render method from ReactDom Library to render elements to dom, 
import { render } from 'react-dom'
// Import the Provider object from the Redux to React bindings
import { Provider } from 'react-redux'

// Import the configureStore function 
import configureStore from './store/configureStore'

// Import the ChuckNorris App
import App from './containers/ChuckNorrisFactsApp/ChuckNorrisFactsApp.js'

// Create the store
const store = configureStore()

// Render app the dom
render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);