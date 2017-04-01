import React from 'react'

import './Fact.scss'

import FavoriteButton from '../FavoriteButton/FavoriteButton'

const Fact = () => (
	<li className="fact">
		<FavoriteButton />
		<p>Chuck Norris once kicked a lorum so hard it became ipsum</p>
	</li>
)

export default Fact