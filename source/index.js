// Import React Library
import React, { Component } from 'react'
// Import the render method from ReactDom Library to render elements to dom, 
import { render } from 'react-dom'
// Import the Provider object from the Redux to React bindings
import { Provider } from 'react-redux'

import configureStore from './store/configureStore'

// Import the ChuckNorris App
import App from './containers/ChuckNorrisFactsApp/ChuckNorrisFactsApp.js'

// Import the base styling
import './style.scss'


const store = configureStore()

// Render app the dom
render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('main')
);