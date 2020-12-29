import React from 'react'
import DogCard from './DogCard'

const NextUpDogs = ({ dogs }) => {
    const dogCards = dogs.map(dog => <DogCard key={dog.name} dog={dog}/>)
        return (
            <div className="NextUpDogs">
                { dogCards }
            </div>
        )
}

export default NextUpDogs 