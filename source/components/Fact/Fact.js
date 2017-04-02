import React, { PropTypes, Component } from 'react'

// Import Component
import FavoriteButton from '../FavoriteButton/FavoriteButton'

// Import styling
import './Fact.scss'

export default class Fact extends Component {
	render() {
		const {fact, onFavoriteClick} = this.props

		// I know dangerouslySetInnerHTML should only be used if we 100% trust the injected data		
		return (
			<li className="fact">
				<FavoriteButton onClick={onFavoriteClick} fact={fact}/>
				<p className="fact__text" dangerouslySetInnerHTML={{__html: fact.joke}}></p>
			</li>
		)
	}
}

// Fact propTypes
Fact.propTypes = {
	fact: PropTypes.object.isRequired,
	onFavoriteClick: PropTypes.func.isRequired
}