import React, { PropTypes, Component } from 'react'
// Import timeout
import ReactTimeout from 'react-timeout'

// Import styling
import './Messages.scss'

class Message extends Component {
	// Auto hide warning
	componentDidMount() {
		this.state = { show: false }
		this.hide = this.hide.bind(this)
		this.show = this.show.bind(this)
		this.props.setTimeout(this.show, 10)
	}

	componentWillUpdate(nextProps, nextState) {
		if (!nextState.hidden) {
			return;
		}

		const timeDif = new Date().getTime() - nextState.hidden

		if (timeDif > 100 ) {
			this.show()
		}
	}

	show() {
		this.setState({show: true, hidden: false})
		this.props.setTimeout(this.hide, 4000)
	}

	hide() {
    	this.setState({show: false, hidden: new Date().getTime() })
	}

	render() {
		const {msg} = this.props

		const className = this.state && this.state.show ? 'warning' : 'warning warning--hidden'

		// I know dangerouslySetInnerHTML should only be used if we 100% trust the injected data		
		return (
			<div className={className}>
				<p className="warning__text" dangerouslySetInnerHTML={{__html: msg}}></p>
			</div>
		)
	}
}

export default ReactTimeout(Message)