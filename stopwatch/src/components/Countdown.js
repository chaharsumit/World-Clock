import React from 'react';

class Countdown extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      show: false
    }
  }

  handleClick = () => {
    this.setState((prevState) => {
      return {
        show: !prevState.show
      }
    })
  }

  handleClose = () => {
    this.setState((prevState) => {
      return {
        show: !prevState.show
      }
    })
  }

  render(){
    return (
      <>
        {
          !this.state.show 
          ? 
            <button className='btn' onClick={this.handleClick}>Show Countdown</button>
          : 
            <div className='watch'>
              <h2>StopWatch</h2>
              <div className='time-container'>
                <span>00 :</span>
                <span> 00 :</span>
                <span> 00 :</span>
                <span> 00</span>
              </div>
              <button className='btn-watch'>Start</button>
              <span onClick={this.handleClose} className='cross'>X</span>
            </div>
        }
      </>
    )
  }
}

export default Countdown;