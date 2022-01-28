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


/*

class App extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <h1>🚀 Timers 🚀</h1>
    )
  }
}

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      showTimer: true
    }
  }

  handleClick = () => {
    this.setState((prevState) => {
      return {
        showTimer: !prevState.showTimer
      }
    })
  }


  render(){
    return (
      <div className='container'>
        <h1>🚀 Timers 🚀</h1>
        {
          this.state.showTimer ?
            <Time handleClick={this.handleClick} />
          : 
            <button onClick={this.handleClick}>Show Time Component</button>
        }
      </div>
    )
  }
}


class Time extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      date: new Date()
    }
    this.timer = null
  }

  componentDidMount(){
    this.timer = setInterval(() => {
      this.setState({date: new Date()});
    }, 1000)
  }

  componentWillUnmount(){
    clearInterval(this.timer);
  }

  render(props){
    return (
      <>
        <h2>The time is : {this.state.date.toLocaleTimeString()}</h2>
        <button onClick={this.props.handleClick}>Hide Time Component</button>
      </>
    )
  }
}

*/