import React from 'react'
import DogCard from './DogCard'

// functional declaration
function DisplayDog({ dog, handleFavouriteTodayClick }) {
    const style = {
        borderStyle: "solid",
        borderColor: "teal",
        borderWidth: "3px",
        borderRadius: "10px"
    }
    return(
        <div style={style} className="DisplayDogs">
            <DogCard dog={dog} />
            <button id={dog ? dog.id : "no-dog"} className="favourite-today-button" onClick={handleFavouriteTodayClick}>Favourite Today</button>
            <button id={dog ? dog.id : "no-dog"} className="foe-some-other-day-button" onClick={handleFavouriteTodayClick}>For Some Other Day</button>
        </div>
    )
}

export default DisplayDog