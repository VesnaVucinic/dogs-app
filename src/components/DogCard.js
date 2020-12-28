import React from 'react'

// const DogCard = ({ dog }) => {
//     return (
//         <div>
//             <img src={dog.url} alt=""/>
//             <p>{dog.name}</p>
//         </div>
//     )
// }

const DogCard = (props) => {
    console.log(props)
    return (
        <div>
            <img src={props.dog.url} alt=""/>
            <p>{props.dog.name}</p>
        </div>
    )
}

export default DogCard
