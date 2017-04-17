var React = require('react');
var Clock = require('Clock');
var CountDownForm = require('CountDownForm');

module.exports = React.createClass({
  getInitialState: function () {
    return {
      count: 0
    };
  },
  handleSetCountDown: function (secs) {
    this.setState({
      count: secs
    });
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
