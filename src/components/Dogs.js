import React from 'react'
import DogCard from './DogCard'

// // becouse state is removed to App as parent who are passing props to children tis does not long need to be class component
// class Dogs extends React.Component {
//     render(){
//         // console.log(dogs)
//         // map is not destructive
//         // I am passing down each member of the dogs arry from state I am passing to my DogCard component
//         //  for every dog object that lives in state arry I am going to create DogCard component passed down as props the dog and I'm going to call it dog
//         const dogCards = this.props.dogs.map(dog => <DogCard key={dog.name} dog={dog}/>)
//         return (
//             <div className="Dogs">
//                 {/* I am telling JS grad that variable dogCards and return it, now dogCards is arry of react components*/}
//                 { dogCards }
//             </div>
//         )
//     }
// }/s

// export default Dogs

// anonymus function expression/ arrow function exp.
const Dogs = ({ dogs }) => {
        // console.log(dogs)
        // map is not destructive
        // I am passing down each member of the dogs arry from state I am passing to my DogCard component
        //  for every dog object that lives in state arry I am going to create DogCard component passed down as props the dog and I'm going to call it dog
        const dogCards = dogs.map(dog => <DogCard key={dog.id} dog={dog}/>)
        return (
            <div className="Dogs">
                {/* I am telling JS grad that variable dogCards and return it, now dogCards is arry of react components*/}
                { dogCards }
            </div>
        )
}

export default Dogs