import React from 'react'
import DogCard from './DogCard'

// functional declaration
function DisplayDog({ dog }) {
    const style = {
        borderStyle: "solid",
        borderColor: "teal",
        borderWidth: "3px",
        borderRadius: "10px"
      }
    return(
        <div style={style} clasName="DisplayDogs">
            <DogCard dog={dog} />
            <button>Favourite Today</button>
            <button>For Some Other Day</button>
        </div>
    )
}

export default DisplayDog