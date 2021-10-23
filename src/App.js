import React, { Component } from 'react';
import Myname from './Myname';
import Counter from './Counter';

class App extends Component {
  render() {
    // const value = 1;
    // const style = {
    //   backgroundColor:'blue'
    // };
    return (
      <div >

        <Myname rol="리액트"/>
        <Counter/>

        {/* {
          (() => {
              if(value === 1)return(<div>하나</div>)
              if(value === 2)return(<div>둘</div>)
              if(value === 3)return(<div>셋</div>)
          })()
        } */}
      </div>
    );
  }
}

export default App;