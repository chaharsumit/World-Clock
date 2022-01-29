import React from 'react';
import Header from './Header';
import Stopwatch from './Stopwatch';
import Countdown from './Countdown';


class App extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className='container'>
        <Header />
        <div className='body-container'>
          <Stopwatch />
          <Countdown />
        </div>
      </div>
    )
  }
}


export default App;