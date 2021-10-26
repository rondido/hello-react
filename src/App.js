import React, { Component } from 'react';
import MyComponent from './MyComponent';

class App extends Component {
  render() {

    return (
      <div >
        <MyComponent name="React" favoriteNumber={1}>리액트</MyComponent>
      </div>
    );
  }
}

export default App;