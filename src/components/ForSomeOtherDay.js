import React from 'react'
import DogCard from './DogCard'

const ForSomeOtherDay = ({ dogs, handleChangeOfHeart }) => {
    const dogCards = dogs.map(dog => <DogCard handleChangeOfHeart={handleChangeOfHeart} key={dog.name} dog={dog}/>)
        return (
            <div className="ForSomeOtherDay">
                <h2>For Some Other Day</h2>
                { dogCards }
            </div>
        )
}

export default ForSomeOtherDay