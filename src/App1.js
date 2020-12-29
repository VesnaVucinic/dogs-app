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

      // wheh add a property to this paticular instance of this class handleForSomeOtherDayClick alwause biunde to the instance
    this.handleForSomeOtherDayClick = this.handleForSomeOtherDayClick.bind(this)
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
    console.log("event.target.id is", event.target.id)
    const dogs = this.state.dogs.map(dog => {
      // console.log(dog.id === event.target.id) - this will give me true or false 
      console.log("dog id is", dog.id)
      // console.log(dog.id === event.target.id) strictly equal will give all folse
      console.log(dog.id == event.target.id)
      if(dog.id == event.target.id) {
        // we should not be using the deract assigment without making a copy with Object.assign and the assign new value for dog.status and return newDog
        const newDog = Object.assign({}, dog)
        newDog.status = "Favourite Today"
        return newDog
      } else {
        return dog
      }
    })
    this.setState({
      dogs: dogs
    }, ()=>console.log(this.state.dogs))
    // ()=>console.log(this.state.dogs.find(dog => dog.id ===event.target.id))
    // setState can take second argument callback function that will be invoced as soon as state is actually changed,
    // I want to se dog whose id is  (dog=>dog.id) same as event .target.id
  }

  // my "this" reference might not be apropriate by the time I call "this" back and I have to use arrow functions or bind method in constructor
  handleForSomeOtherDayClick(event) {
    alert("ForSomeOtherDay")
    console.log("event.target.id is", event.target.id)
    const dogs = this.state.dogs.map(dog => {
      // console.log(dog.id === event.target.id) - this will give me true or false 
      console.log("dog id is", dog.id)
      // console.log(dog.id === event.target.id) strictly equal will give all folse
      console.log(dog.id == event.target.id)
      if(dog.id == event.target.id) {
        // we should not be using the deract assigment without making a copy with Object.assign and the assign new value for dog.status and return newDog
        const newDog = Object.assign({}, dog)
        newDog.status = "For Some Other Day"
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
    // return (
    //   <div className="App">
    //     <h1>For the Love of Shih Tzu</h1>
    //     { this.state.dogs.length === 0 
    //     ?
    //       "LOADING..."
    //     :
    //       <div>
    //         <DisplayDog dog={this.state.dogs[0]}/>
    //         <Dogs dogs={this.state.dogs}/>
    //       </div>
    //     }
        
    //   </div>
    // );
        return (
          <div className="App">
            {/* <FavouriteToday dogs={dogs.slice(0,2)}/>s
            <CenterContailner dogs={dogs.slice(10,13)}/>
            <ForSomeOtherDay dogs={dogs.slice(4,8)}/>    */}
            <FavouriteToday dogs={this.state.dogs.filter(dog => dog.status === "Favourite Today")}/>
            <CenterContainer 
              handleFavouriteTodayClick={this.handleFavouriteTodayClick}
              handleForSomeOtherDayClick={this.handleForSomeOtherDayClick}
              dogs={this.state.dogs.filter(dog => dog.status === "undecided")}/>
            <ForSomeOtherDay dogs={this.state.dogs.filter(dog => dog.status === "For Some Other Day")}/>
          </div> 
        )
  }
}

export default App;
