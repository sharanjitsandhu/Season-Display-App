import React, { Component } from 'react';
import SeasonDisplay from './SeasonDisplay';

class App extends Component {


  /** constructor(props) { It is a special function i.e. going to be called any time any instance(of the app component and show it on the screen) of this CLASS is created.
      super(props); //It is a reference to the parent's constructor function.
      //initializing a state
      this.state = { lat: null,
        errorMessage: ''
      };
      }*/
  
      //We can truncate the above code like this.
      state = { lat: null,
        errorMessage: ''
      };
      //LIFECYCLE methods: componentDidMount() and componentDidUpdate()
      componentDidMount() {
        window.navigator.geolocation.getCurrentPosition (
          position => {
            this.setState({lat: position.coords.latitude}); //State can only be updated using the function 'setState'
          },
          error => {
            this.setState({errorMessage: error.message});
          }
        );

      }

      componentDidUpdate() {

      }

  //REACT says we have to define render!!
render() {
  
      if (this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>;
          } if (!this.state.errorMessage && this.state.lat) {
            // return <div>Latitude: {this.state.lat}</div>;
            return <SeasonDisplay latitude={this.state.lat} />
          } else {
            return <div>Loading!</div>;
          }
}
}

export default App;
