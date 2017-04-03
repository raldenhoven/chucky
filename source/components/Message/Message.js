import React, { PropTypes, Component } from 'react'

// Import styling
import './Messages.scss'

export default class Message extends Component {
	render() {
		const {msg, state} = this.props

		const className = state === 'hidden' ? 'warning warning--hidden' : 'warning'

		// I know dangerouslySetInnerHTML should only be used if we 100% trust the injected data		
		return (
			<div className={className}>
				<p className="warning__text" dangerouslySetInnerHTML={{__html: msg}}></p>
			</div>
		)
	}
}

// Define default props
Message.proptypes = {
	items: PropTypes.array.isRequired,
	state: PropTypes.bool.isRequired
}