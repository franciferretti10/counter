import React from 'react';

class App extends React.Component{
  constructor(){
   super();
     this.state = {
          counter: 0
      }
    }

    renderButtonComponent = (text, callback) => {
      return(
        <button onClick = { callback }>{text}</button>
      );
    }

  
  render(){
    return(
      <div>
      <h1>Counter: {this.state.counter} </h1>
        { this.renderButtonComponent('Increment',() => this.setState({ counter: this.state.counter +1})) }
        { this.renderButtonComponent('Decrement',() => this.setState( {counter: this.state.counter -1})) } 
      </div>
    );

  }
  
}

export default App;
