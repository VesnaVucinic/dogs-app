import React from 'react'
import DisplayDog from './DisplayDog'
import NextUpDogs from './NextUpDogs'

// functional declaration
const CenterContainer = ({ dogs, handleFavouriteTodayClick }) => {
        return(
            <div className="CenterContainer">
                <DisplayDog 
                    dog={dogs[0]}
                    handleFavouriteTodayClick={handleFavouriteTodayClick}
                />
                {/* grab next 3 images */}
                <NextUpDogs dogs={dogs.slice(1, 4)}/>
            </div>
        )
}

export default CenterContainer