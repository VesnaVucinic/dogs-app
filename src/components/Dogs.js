import React from 'react'
import dogs from './dogs-data'
import DogCard from './DogCard'

class Dogs extends React.Component {
    constructor() {
        super()
        this.state = {
            dogs: []
        }
    }
    // mocking a fetch request
    componentDidMount() {
        // fetch the dogs ("www.dogs.com")
        //  .then(r=>r.json())
        //  .then(dogs => this.setState({dogs: dogs}))
        this.setState({
            dogs: dogs
        })
    }

    render(){
        // console.log(dogs)
        // map is not destructive
        // I am passing down each member of the dogs arry from state I am passing to my DogCard component
        //  for every dog object that lives in state arry I am going to create DogCard component passed down as props the dog and I'm going to call it dog
        const dogCards = this.state.dogs.map(dog => <DogCard key={dog.name} dog={dog}/>)
        return (
            <div className="Dogs">
                {/* I am telling JS grad that variable dogCards and return it, now dogCards is arry of react components*/}
                { dogCards }
            </div>
        )
    }
}

export default Dogs