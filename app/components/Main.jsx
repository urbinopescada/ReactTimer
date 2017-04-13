var React = require("react");
var Navbar = require('Navbar');

var Main = (props) => {
    return (
      <div>
        <Navbar></Navbar>
        <p></p>
        <p className="text-center">Main.jsx rendered</p>
        {props.children}
      </div>
    );
};

module.exports = Main;
