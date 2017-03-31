import React from 'react'

import Fact from '../Fact/Fact'

const FavoriteList = () => (
	<section className="favorite-list">
		<h1>Your favorite Chuck Norris facts</h1>
		<ul className="list">
			<Fact />
			<Fact />
			<Fact />
			<Fact />
		</ul>
	</section>
)

export default FavoriteList