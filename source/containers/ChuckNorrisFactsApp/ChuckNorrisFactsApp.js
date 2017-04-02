// Import react, include Component to extend, and Proptypes to declare default props
import React, { Component, PropTypes } from 'react'
// Import connect
import { connect } from 'react-redux'
// Import actions
import { fetchFactsIfNeeded, fetchFacts } from '../../actions/facts'
import { addToFavorites, removeFavorite } from '../../actions/favorites'
// Import Components
import FactList from '../../components/FactList/FactList'
import Message from '../../components/Message/Message'
import LoadMoreFactsButton from '../../components/LoadMoreFactsButton/LoadMoreFactsButton'
// Import styling
import './ChuckNorrisFactsApp.scss'

class ChuckNorrisFactsApp extends Component {
	// Constructer
	constructor(props) {
		// Call constructer from Component
		super(props)
		// Assign actions
		this.handleFetchClick = this.handleFetchClick.bind(this)
		this.handleAddToFavoriteClick = this.handleAddToFavoriteClick.bind(this)
		this.handleRemoveFromFavoriteClick = this.handleRemoveFromFavoriteClick.bind(this)
	}

	//  App is mounted, get facts if needed
	componentDidMount() {
		// Get dispatch
		const { dispatch } = this.props
		// Get facts
		dispatch(fetchFactsIfNeeded())
	}

	// Function to get more Facts when clicked by user
	handleFetchClick() {
		// Get dispatch
		const { dispatch } = this.props
		// Get facts
		dispatch(fetchFacts())
	}

	// Function to add fact to favorites when clicked by user
	handleAddToFavoriteClick(fact) {
		// Get dispatch
		const { dispatch } = this.props
		// Add fact to favorite
		dispatch(addToFavorites(fact))
	}

	// Function to remove fact from favorites when clicked by user
	handleRemoveFromFavoriteClick(fact) {
		// Get dispatch
		const { dispatch } = this.props
		// Remove fact from favorite
		dispatch(removeFavorite(fact))
	}

	// The html output
	render() {
		// Get randomFacts and favorites from props
		const { randomFacts, favorites, messages } = this.props

		// Return html output lists are only added to dom when there is content availeble
		return (
			<div className="app">
				<main className="app-facts">
					<header>
						<h1>Random Chuck Norris facts</h1>
					</header>
					{randomFacts.facts &&
						<FactList facts={randomFacts.facts} onFavoriteClick={this.handleAddToFavoriteClick}/>
					}
					<LoadMoreFactsButton onClick={this.handleFetchClick} />
				</main>

				<aside className="app-favorites">
					<h1>Your favorites</h1>
					{favorites.facts &&
						<FactList facts={favorites.facts} onFavoriteClick={this.handleRemoveFromFavoriteClick}/>
					}
				</aside>

				{messages.message &&
					<Message msg={messages.message}/>
				}
			</div>
		)
	}
}

// Define default props
ChuckNorrisFactsApp.proptypes = {
	randomFacts: PropTypes.object.isRequired,
	favorites: PropTypes.object.isRequired,
	messages: PropTypes.object.isRequired,
}

// Map state changes to App props
const mapStateToProps = (state) => ({
	randomFacts: state.randomFacts || {},
	favorites: state.favorites || {},
	messages: state.messages || {}
})

// Connect state changes to ChuckNorrisFactsApp and return
export default connect(mapStateToProps)(ChuckNorrisFactsApp)