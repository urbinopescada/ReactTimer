var React = require('react');

module.exports = React.createClass({
  onSubmit: function(e){
    e.preventDefault();
    var strSecs = this.refs.txtSeconds.value;
    if(strSecs.match(/^[0-9]*$/)) {
      this.refs.txtSeconds.value = "";
      this.props.onSetCountDown(parseInt(strSecs,10));
    }
  },
  render: function () {
    return (
      <div>
        <form ref="form" onSubmit={this.onSubmit} className="cowntdown-form">
          <div>
            <input type="text" ref="txtSeconds" placeholder="enter time in seconds"></input>
          </div>
          <button className="button expanded">Start</button>
        </form>
      </div>
    );
  }
});
