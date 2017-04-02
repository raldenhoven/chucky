import React, { PropTypes, Component } from 'react'

// Import Component
import Fact from '../Fact/Fact'

// Import Styling
import './FactList.scss'

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

// FactList propTypes
FactList.propTypes = {
	facts: PropTypes.array.isRequired,
	onFavoriteClick: PropTypes.func.isRequired
}