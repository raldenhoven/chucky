import React, { Component, PropTypes } from 'react'

// Import styling
import './LoadMoreFactsButton.scss'

export default class LoadMoreFactsButton extends Component {
	render () {
		const { onClick } = this.props

		return (
			<button className="load-more-facts-button" onClick={ e => onClick() }>
				Get more Chuck Norris Facts
			</button>
		)
	}
}

// LoadMoreFactsButton propTypes
LoadMoreFactsButton.propTypes = {
  onClick: PropTypes.func.isRequired
}