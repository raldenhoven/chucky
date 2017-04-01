import React from 'react'

// I probably could reuse the same list twice (and let them just use different data)
import FactList from '../FactList/FactList'
import FavoriteList from '../FavoriteList/FavoriteList'

const ChuckNorrisFactsApp = () => (
	<div>
		<FactList />
		<FavoriteList />
	</div>
)

export default ChuckNorrisFactsApp