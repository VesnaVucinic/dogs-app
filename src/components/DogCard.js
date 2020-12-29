import React from 'react'

// anonymus function expression/ standard exp.
const DogCard = function({ dog, handleChangeOfHeart }) {
    // log I should see twice: once for initial rendering, other for arry of dogs
    // console.log("dog is", dog) 
    let returnVal
    if (dog){
        returnVal =  <div className="DogCard">
            {/* className={dog.id} becouse I can't have sane id on diferent elements like id={dog.id}*/}
                        <img 
                            className={dog.id} 
                            onClick={handleChangeOfHeart}  
                            src={dog.url} hight="100px" width="100px" 
                            alt={dog.name}/>
                        <p>{dog.name}</p>
                        <br/><br/>
                     </div> 
    } else {
        returnVal = <div className="DogCard">
                        "LOADING..."
                    </div>
    }
    return (
        returnVal
    )
}

export default DogCard
