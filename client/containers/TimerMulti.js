import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CountdownTimerMulti from './CountdownTimerMulti';
import StartButtonMulti from './StartButtonMulti';
import { endGame, leavePage } from '../actions/index';

class TimerMulti extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tenthSeconds: 0,
      seconds: 0,
      minutes: 0,
      message: 'Click the start button to begin!',
      timerOn: false,
      winner: ''
    }
  };

  startTimer() {
    this.setState({
      timerOn: true,
      message: '0.0'
    });

    this.intervalID = setInterval(function() {
      var tenthSeconds = this.state.tenthSeconds + 1;
      var seconds = this.state.seconds;
      var minutes = this.state.minutes;

      if (tenthSeconds > 9) {
        seconds++;
        tenthSeconds = 0;
      }

      if (seconds > 59) {
        minutes++;
        seconds = 0;
      }

      this.setState({
        tenthSeconds : tenthSeconds,
        seconds : seconds,
        minutes: minutes,
        message: minutes + ':' + seconds + '.' + tenthSeconds
      });
    }.bind(this), 100);
  };

  componentDidUpdate() {
    // On game end, stop timer and send time elapsed to Singleplayer
    if (this.props.multiGame === 'END_GAME') {
      clearInterval(this.intervalID);

      this.props.saveTimeElapsed(this.state.tenthSeconds, this.state.seconds, this.state.minutes, this.state.winner);
    }

    // On game start, start if not already running
    if (this.props.multiGame === 'START_GAME' && !this.state.timerOn) {
      this.startTimer();
    }

    // Listen for a 'game over' event from socket
    if (this.props.multiGame !== 'END_GAME') {
      this.props.socket.on('game over', function(value) {
        this.setState({winner: value});
        this.props.endGame();
      }.bind(this));
    }
  };

  componentWillUnmount() {
    this.props.leavePage();
  };
  
  render() {
    return (
      <div className="container">
        <div className="row">
          <h2 className="text-center">{this.state.message}</h2>
        </div>
        <StartButtonMulti socket={this.props.socket} />
        <CountdownTimerMulti />
      </div>
    );
  };
};

function mapStateToProps(state) {
  return {
    multiGame: state.multiGame
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ leavePage: leavePage, endGame: endGame }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TimerMulti);