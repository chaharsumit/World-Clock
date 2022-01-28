import React from 'react';

class Stopwatch extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      show: false,
      timerStart: false,
      currTime: 0,
    }
    this.timer = null;
  }

  startTimer = () => {
    this.setState({
      timerStart: true
    })
    this.timer = setInterval(() => {
      this.setState((prevState) => {
        return {
          currTime: prevState.currTime + 15
        }
      })
    }, 15);
  }

  stopTimer = () => {
    this.setState({
      timerStart: false
    })
    clearInterval(this.timer);
  }

  resetTimer = () => {
    this.timer = null;
    this.setState({
      currTime: 0
    })
  }

  handleClick = () => {
    this.setState((prevState) => {
      return {
        show: !prevState.show
      }
    })
  }

  handleClose = () => {
    clearInterval(this.timer);
    this.timer = null;
    this.setState((prevState) => {
      return {
        show: false,
        timerStart: false,
        currTime: 0
      }
    })
  }

  render(){
    let milliseconds = Math.floor((this.state.currTime % 1000) / 10);
    let seconds = Math.floor((this.state.currTime / 1000) % 60);
    let minutes = Math.floor((this.state.currTime / (1000 * 60)) % 60);
    let hours = Math.floor((this.state.currTime / (1000 * 60 * 60)) % 24);
    let millis = milliseconds;
    let hDisplay = hours;
    let mDisplay = minutes;
    let sDisplay = seconds;
    return (
      <>
        {
          !this.state.show
          ?
            <button className='btn' onClick={this.handleClick}>Show Stopwatch</button>
          :
            <div className='watch'>
              <h2>StopWatch</h2>
              <div className='time-container'>
                <span>{hDisplay < 10 ? '0' + hDisplay : '00'} :</span>
                <span> {mDisplay < 10 ? '0' + mDisplay : mDisplay} :</span>
                <span> {sDisplay < 10 ? '0' + sDisplay : sDisplay} :</span>
                <span> {millis < 10 ? '0' + millis : millis}</span>
              </div>
              {
                !this.state.timerStart ? <> <button onClick={this.startTimer} className='btn-watch'>Start</button> <button onClick={this.resetTimer} className='btn-watch'>Reset</button></>  : <button onClick={this.stopTimer} className='btn-watch'>Stop</button>
              }
              <span onClick={this.handleClose} className='cross'>X</span>
            </div>
        }
      </>
    )
  }
}

export default Stopwatch;