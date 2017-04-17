var React = require('react');

module.exports = React.createClass({
  getDefaulProps: function () {
    totalSeconds: 0
  },
  propTypes: function () {
    totalSeconds: React.propTypes.number
  },
  formatSeconds: function (totalSeconds) {
    var minutes = Math.floor(totalSeconds / 60);
    var seconds = totalSeconds % 60;
    if (minutes < 10) minutes = '0'+minutes;
    if (seconds < 10) seconds = '0'+seconds;

    return minutes +":" +seconds;
  },

  render: function () {
    var {totalSeconds} = this.props;

    return (
      <div className="clock">
        <span className="clock-text">
          {this.formatSeconds(totalSeconds)}
        </span>
      </div>
    );
  }
});
