var React = require('react');
var ReactDOM = require('react-dom');

import {Route, Router, IndexRoute, hashHistory} from 'react-router';
var Main = require("Main");
var CountDown = require("CountDown");
var Timer = require("Timer");

//Load foundation using the css laoder (ie: css!) and inject the styles into our html, we do that chaining the loaders
require('style!css!foundation-sites/dist/css/foundation.min.css');
//Fire up foundation
$(document).foundation();

require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="/countdown" component={CountDown}  />
      <IndexRoute component={Timer}  />
    </Route>
  </Router>,
  document.getElementById('app')
);
