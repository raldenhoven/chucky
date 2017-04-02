import React, { PropTypes, Component } from 'react'

import './FactList.scss'

import Fact from '../Fact/Fact'

export default class FactList extends Component {
	render() {
		const {facts, onFavoriteClick} = this.props

		return (
			<ul className="fact-list">
				{facts.map((fact) =>
					<Fact key={fact.id} fact={fact} onFavoriteClick={onFavoriteClick}/>
				)}
			</ul>
		)
	}
}

FactList.propTypes = {
	facts: PropTypes.array.isRequired,
	onFavoriteClick: PropTypes.func.isRequired
}