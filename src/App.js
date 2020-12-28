import React, { Component }  from 'react';
import './App.css';
import Dogs from './components/Dogs'
import DisplayDog from './components/DisplayDog'
import dogs from './dogs-data'

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
  render () {
    return (
      <div className="App">
        <h1>For the Love of Shih Tzu</h1>
        { this.state.dogs.length === 0 
        ?
          "LOADING..."
        :
          <div>
            <DisplayDog dog={this.state.dogs[0]}/>
            <Dogs dogs={this.state.dogs}/>
          </div>
        }
        
      </div>
    );
  }
}

export default App;
