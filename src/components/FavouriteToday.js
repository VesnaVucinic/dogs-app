import React from 'react'
import DogCard from './DogCard'

const FavouriteToday = ({ dogs }) => {
    const dogCards = dogs.map(dog => <DogCard key={dog.name} dog={dog}/>)
        return (
            <div className="FavouriteToday">
                <h2>Favourite Today</h2>
                { dogCards }
            </div>
        )
}

export default FavouriteToday