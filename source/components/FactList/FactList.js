import React from 'react'

import './FactList.scss'

import Fact from '../Fact/Fact'
import LoadMoreFactsButton from '../LoadMoreFactsButton/LoadMoreFactsButton'

const FactList = () => (
	<section className="fact-list">
		<h1>Random Chuck Norris Facts</h1>
		<ul className="list">
			<Fact />
			<Fact />
			<Fact />
			<Fact />
		</ul>
		<LoadMoreFactsButton />
	</section>
)

export default FactList