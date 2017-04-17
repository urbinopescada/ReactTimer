var React = require('react');
var Clock = require('Clock');
var CountDownForm = require('CountDownForm');
var Controls = require('Controls');

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

  componentWillMount: function(){
    console.log("componentWillMount");
  },
  componentDidMount: function(){
    console.log("componentDidMount");
  },
  componentWillUpdate: function(nextProps, NextState) {

  },
  componentDidUpdate: function (prevProps, prevState) {
    if (this.state.countdownStatus !== prevState.countdownStatus) {
      switch (this.state.countdownStatus ) {
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
        var newCount = this.state.count-1;
        this.setState({
            count: newCount>=0 ? newCount : 0
        });
        if (newCount<=0) {
          this.setState({
            countdownStatus: 'stopped'
          });
          clearInterval(this.timer);
          this.timer== null;
        }
    },1000);
  },
  handeStatusChange: function (newStatus) {
    this.setState({countdownStatus: newStatus})
  },
  render: function () {
    var {count, countdownStatus} = this.state;

    var renderFormOrControls =() =>{
      if(countdownStatus!=="stopped"){
        return <Controls countdownStatus={countdownStatus} onStatusChange={this.handeStatusChange}/>
      }
      else{
        return <CountDownForm onSetCountDown={this.handleSetCountDown}/>
      }
    }
    return (
      <div>
        <Clock totalSeconds={count}/>
        {renderFormOrControls()}

      </div>
    );
  }
});
