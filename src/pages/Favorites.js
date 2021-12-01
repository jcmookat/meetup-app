import { useContext } from 'react'
import MeetupList from '../components/meetups/MeetupList'
import FavoritesContext from '../store/favorite-context'

const FavoritesPage = () => {
	const favoriteCtx = useContext(FavoritesContext)
	let content

	if (favoriteCtx.totalFavorites === 0) {
		content = <p>You do not have favorites. Add some!</p>
	} else {
		content = <MeetupList meetups={favoriteCtx.favorites} />
	}
	return (
		<section>
			<h1>My Favorites</h1>
			{content}
		</section>
	)
}

export default FavoritesPage
