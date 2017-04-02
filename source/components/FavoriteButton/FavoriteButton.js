import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'

import './FavoriteButton.scss'

export default class FavoriteButton extends Component {
	render() {
		const { fact, onClick } = this.props

		return (
			<button className="favorite-button" onClick={ () => onClick(fact) }>
			</button>
		)
	}	
}

FavoriteButton.propTypes = {
	onClick: PropTypes.func.isRequired,
	fact: PropTypes.object.isRequired
}