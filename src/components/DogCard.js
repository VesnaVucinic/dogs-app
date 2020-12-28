import React from 'react'

// const DogCard = ({ dog }) => {
//     return (
//         <div>
//             <img src={dog.url} alt=""/>
//             <p>{dog.name}</p>
//         </div>
//     )
// }

// anonymus function expression/ standard exp.
const DogCard = function(props) {
    console.log(props)
    return (
        <div className="DogCard">
            <img src={props.dog.url} hight="100px" width="100px" alt={props.dog.name}/>
            <p>{props.dog.name}</p>
            <br/><br/>
        </div>
    )
}

export default DogCard
