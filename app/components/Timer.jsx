var React = require('react');
var Clock = require('Clock');
var CountDownForm = require('CountDownForm');
var Controls = require('Controls');

module.exports = React.createClass({
  getInitialState: function () {
    return {
      count: 0,
      timerStatus: 'stopped'
    };
  },
  componentDidUpdate: function (prevProps, prevState) {
    if (this.state.timerStatus !== prevState.timerStatus) {
      switch (this.state.timerStatus ) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({ count: 0 });
        case 'paused':
          clearInterval(this.timer);
          this.timer== null;
          break;
      }
    }
  },
  componentWillUnmount: function (){
    console.log("CcomponentWillUnmount");
    if (this.timer) {
      clearInterval(this.timer);
      this.timer== null;
    }
  },
  startTimer: function () {
    this.timer = setInterval(()=>{
        var newCount = this.state.count +1;
        this.setState({
            count: newCount
        });
    },1000);
  },
  handeStatusChange: function (newStatus) {
    this.setState({timerStatus: newStatus})
  },
  render: function () {
    var {count, timerStatus} = this.state;

    return (
      <div>
        <h1 className="page-title">Timer App</h1>
        <Clock totalSeconds={count}/>
        <Controls countdownStatus={timerStatus} onStatusChange={this.handeStatusChange}/>
      </div>
    );
  }
});
