import React, { Component }  from 'react';
import './App.css';
import dogs from './dogs-data'
import FavouriteToday from './components/FavouriteToday'
import ForSomeOtherDay from './components/ForSomeOtherDay'
import CenterContainer from './components/CenterContainer'
class App extends Component {
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
  // functionality needs to live in App becouse App managing the state upon all other components relay
  
  // arrow function inherites "this" from the surrounding context on definition which means
  // that if I am inside the body of this function I'm binding appropriatly where I want this thing to be
  handleFavouriteTodayClick = (event) => {
        let newStatus
        if (event.target.tagName == "IMG") {newStatus = "undecided"}
        else  {newStatus = event.target.className === "favourite-today-button" ? "Favourite Today" : "For Some Other Day"}
        // console.log("event.target.id is", event.target.id)
        const dogs = this.state.dogs.map(dog => {
      // console.log(dog.id === event.target.id) - this will give me true or false 
        // console.log("dog id is", dog.id)
      // console.log(dog.id === event.target.id) strictly equal will give all folse
        // console.log(dog.id == event.target.id)
        if(dog.id == event.target.id || dog.id == event.target.className) {
        // we should not be using the deract assigment without making a copy with Object.assign and the assign new value for dog.status and return newDog
            const newDog = Object.assign({}, dog)
            newDog.status = newStatus
            return newDog
        } else {
            return dog
        }
        })
        this.setState({
        dogs: dogs
        }, ()=>console.log(this.state.dogs))
  }



  render () {

        return (
          <div className="App">
            <FavouriteToday dogs={this.state.dogs.filter(dog => dog.status === "Favourite Today")}/>
            <CenterContainer 
              handleFavouriteTodayClick={this.handleFavouriteTodayClick}
            //   handleForSomeOtherDayClick={this.handleForSomeOtherDayClick}
              dogs={this.state.dogs.filter(dog => dog.status === "undecided")}/>
            <ForSomeOtherDay handleChangeOfHeart={this.handleFavouriteTodayClick} dogs={this.state.dogs.filter(dog => dog.status === "For Some Other Day")}/>
          </div> 
        )
  }
}

export default App;
