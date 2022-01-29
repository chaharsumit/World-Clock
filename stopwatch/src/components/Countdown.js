import React from 'react';

class Countdown extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      show: false,
      countdownStart: false,
      isPaused: false,
      totalTime: 0,
    }
    this.timer = null;
  }

  startCountdown = () => {
    this.setState({
      countdownStart: true,
    })
    this.timer = setInterval(() => {
      this.setState((prevState) => {
        return {
          totalTime: prevState.totalTime - 1
        }
      })
    }, 1000);
  }

  stopCountdown = () => {
    clearInterval(this.timer);
    this.setState({
      countdownStart: false,
      isPaused: true,
    })
  }

  resumeCountdown = () => {
    this.setState({
      countdownStart: true,
      isPaused: false,
    })
    this.startCountdown();
  }

  handleClick = () => {
    this.setState((prevState) => {
      return {
        show: !prevState.show
      }
    })
  }

  handleClose = () => {
    this.timer = null;
    this.setState({
      countdownStart: false,
      isPaused: false,
      show: false,
      totalTime: 0
    })
  }

  resetCountdown = () => {
    this.timer = null;
    this.setState({
      totalTime: 0,
      isPaused: false,
    })
  }

  handleTime = ({ target }) => {
    if(this.state.countdownStart){
      return null;
    }
    if(target.innerText === "⬆" && target.id === 'hours'){
      this.setState({
        totalTime: this.state.totalTime + 3600
      });
    }else if(target.innerText === "⬆" && target.id === 'minutes'){
      this.setState({
        totalTime: this.state.totalTime + 60
      });
    }else if(target.innerText === "⬆" && target.id === 'seconds'){
      this.setState({
        totalTime: this.state.totalTime + 1
      });
    }else if(target.innerText === "⬇" && target.id === 'hours'){
      this.setState({
        totalTime: this.state.totalTime - 3600
      });
    }else if(target.innerText === "⬇" && target.id === 'minutes'){
      this.setState({
        totalTime: this.state.totalTime - 60
      });
    }else if(target.innerText === "⬇" && target.id === 'seconds'){
      this.setState({
        totalTime: this.state.totalTime - 1
      });
    }
  }
  
  handleButtons = () => {
    if(this.state.countdownStart){
      return <button className='btn-watch' onClick={this.stopCountdown}>Stop</button>
    }else if(!this.state.countdownStart && !this.state.isPaused){
      return (
        <button className='btn-watch' onClick={this.startCountdown}>Start</button>
      )
    }else if(!this.state.countdownStart && this.state.isPaused){
      return (
        <>
          <button className='btn-watch' onClick={this.resumeCountdown}>Resume</button>
          <button className='btn-watch' onClick={this.resetCountdown}>Reset</button>
        </>
      )
    }
  }

  render(){
    let timeArr = new Date(this.state.totalTime * 1000).toISOString().substr(11, 8).split(':');
    return (
      <>
        {
          !this.state.show 
          ? 
            <button className='btn' onClick={this.handleClick}>Show Countdown</button>
          : 
            <div className='watch'>
              <h2>CountDown</h2>
              <div className='time-container'>
                <div className='arrow-container'>
                  <span onClick={this.handleTime} className='arrow' id='hours'>⬆</span>
                  <span onClick={this.handleTime} className='arrow' id='minutes'>⬆</span>
                  <span onClick={this.handleTime} className='arrow' id='seconds'>⬆</span>
                </div>
                <span className='time'>{timeArr[0]} :</span>
                <span className='time'> {timeArr[1]} :</span>
                <span className='time'> {timeArr[2]}</span>
                <div className='arrow-container'>
                  <span onClick={this.handleTime} className='arrow' id='hours'>⬇</span>
                  <span onClick={this.handleTime} className='arrow' id='minutes'>⬇</span>
                  <span onClick={this.handleTime} className='arrow' id='seconds'>⬇</span>
                </div>
              </div>
              {
                this.handleButtons()
              }
              <span onClick={this.handleClose} className='cross'>X</span>
            </div>
        }
      </>
    )
  }
}

export default Countdown;