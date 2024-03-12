import React, { Component } from 'react';

class CountdownTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      targetDate: new Date(props.targetDate),
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.updateCountdown, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  updateCountdown = () => {
    const now = new Date();
    const timeDifference = this.state.targetDate - now;

    if (timeDifference <= 0) {
      clearInterval(this.interval);
    } else {
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      this.setState({
        days,
        hours,
        minutes,
        seconds,
      });
    }
  };

  render() {
    const { days, hours, minutes, seconds } = this.state;

    return (
      <div className='countTimer'>
        <div className="daysHours">
       <div className="days">
      <div className="times">
      <span className='time'>{days} 
       </span>
       <span className='point'>:</span>
      </div>
        <span className='clock'>Days</span>
       </div>
      <div className="days">
      <div className="times">
      <span className='time'>{hours} 
       </span>
       <span className='point hoursPoint'>:</span>
      </div>
        <span className='clock'>Hours</span>
      </div>

        </div>
        <div className="minutesSeconds">
       <div className="days">
       <div className="times">
      <span className='time'>{minutes} 
       </span>
       <span className='point'>:</span>
      </div>
        <span className='clock'>Minutes</span>
       </div>
       <div className="days">
        <span className='time'>{seconds} </span>
        <span className='clock'>Seconds</span>
       </div>

        </div>
      </div>
    );
  }
}

export default CountdownTimer;
