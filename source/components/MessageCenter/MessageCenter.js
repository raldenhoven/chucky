// Import react, include Component to extend, and Proptypes to declare default props
import React, { Component, PropTypes } from 'react'
// Import component
import Message from '../../components/Message/Message'

export default class MessageCenter extends Component {
	render () {
		const { items } = this.props

		return (
			<section className="message-center">
				{items.length > 0 && items.map((message, index) =>
					<Message msg={message.text} key={index}/>
				)}
			</section>
		)
	}
}

// Define default props
MessageCenter.proptypes = {
	items: PropTypes.array.isRequired,
}