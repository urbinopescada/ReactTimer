var React = require('react');
var Clock = require('Clock');
var CountDownForm = require('CountDownForm');

module.exports = React.createClass({
  getInitialState: function () {
    return {
      count: 0,
      countdownStatus: 'stopped'
    };
  },
  handleSetCountDown: function (secs) {
    this.setState({
      count: secs,
      countdownStatus: 'started'
    });
  },
  componentDidUpdate: function (prevProps, prevState) {
    if (this.state.countdownStatus !== prevState.countdownStatus) {
      switch (this.state.countdownStatus ) {
        case 'started':
          this.startTimer();
          break;
      }
    }
  },
  startTimer: function () {
    this.timer = setInterval(()=>{
        var newCount = this.state.count-1; 
        this.setState({
            count: newCount>=0 ? newCount : 0
        });
        if (newCount<=0) {clearInterval(this.timer);}
    },1000);
  },
  render: function () {
    var count = this.state.count;
    return (
      <div>
        <Clock totalSeconds={count}/>
        <CountDownForm onSetCountDown={this.handleSetCountDown}/>
      </div>
    );
  }
});
