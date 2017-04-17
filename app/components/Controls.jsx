var React = require('react');

module.exports = React.createClass({
  propTypes: {
    countDownStatus: React.PropTypes.string.isRequired
  },
  render: function () {
    var {countDownStatus} = this.props;
    var renderStartStop =()=>{
      if (countDownStatus==="started"){
        return <button className="button secondary hollow">Pause</button>
      }
      else if (countDownStatus==="paused") {
        return <button className="button primary hollow">Start</button>
      }
    };

    return (
      <div>
        {renderStartStop()}
        <button className="button alert hollow">Clear</button>
      </div>
    );
  }
});
