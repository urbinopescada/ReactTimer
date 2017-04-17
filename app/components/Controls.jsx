var React = require('react');

module.exports = React.createClass({
  propTypes: {
    countdownStatus: React.PropTypes.string.isRequired,
    onStatusChange: React.PropTypes.func.isRequired
  },
  onStatusChange: function(newStatus){
    //This function is called to generate duferent functions that will be called when each button is pressed;
    //is using closures...
    return () => {
      this.props.onStatusChange(newStatus);
    }
  },
  render: function () {
    var {countdownStatus} = this.props;
    var renderStartStop =()=>{
      if (countdownStatus==="started"){
        return <button className="button secondary " onClick={this.onStatusChange('paused')}>Pause</button>
      }
      else if (countdownStatus==="paused") {
        return <button className="button primary " onClick={this.onStatusChange('started')}>Start</button>
      }
    };

    return (
      <div className="controls">
        {renderStartStop()}
        <button className="button alert hollow" onClick={this.onStatusChange('stopped')}>Clear</button>
      </div>
    );
  }
});
