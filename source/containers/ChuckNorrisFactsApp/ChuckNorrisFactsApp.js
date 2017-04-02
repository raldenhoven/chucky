// Not a component this should be moved to containers
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { fetchFactsIfNeeded, fetchFacts } from '../../actions/facts'
import { addFavorite, removeFavorite } from '../../actions/favorites'

import FactList from '../../components/FactList/FactList'
import LoadMoreFactsButton from '../../components/LoadMoreFactsButton/LoadMoreFactsButton'

class ChuckNorrisFactsApp extends Component {

	constructor(props) {
		super(props)
		this.handleFetchClick = this.handleFetchClick.bind(this)
		this.handleAddToFavoriteClick = this.handleAddToFavoriteClick.bind(this)
		this.handleRemoveFromFavoriteClick = this.handleRemoveFromFavoriteClick.bind(this)
	}

	componentDidMount() {
		const { dispatch } = this.props
		dispatch(fetchFactsIfNeeded())
	}

	handleFetchClick() {
		const { dispatch } = this.props
		dispatch(fetchFacts())
	}

	handleAddToFavoriteClick(fact) {
		const { dispatch } = this.props
		dispatch(addFavorite(fact))
	}

	handleRemoveFromFavoriteClick(fact) {
		const { dispatch } = this.props
		dispatch(removeFavorite(fact))
	}

	render() {
		const { randomFacts, favorites } = this.props

		return (
			<div>
				<LoadMoreFactsButton onClick={this.handleFetchClick} />
				{randomFacts.facts &&
					<FactList facts={randomFacts.facts} onFavoriteClick={this.handleAddToFavoriteClick}/>
				}
				{favorites.facts &&
					<FactList facts={favorites.facts} onFavoriteClick={this.handleRemoveFromFavoriteClick}/>
				}
			</div>
		)
	}
}

ChuckNorrisFactsApp.proptypes = {
	randomFacts: PropTypes.object.isRequired,
	favorites: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
	randomFacts: state.randomFacts || {},
	favorites: state.favorites || {}
})

export default connect(mapStateToProps)(ChuckNorrisFactsApp)