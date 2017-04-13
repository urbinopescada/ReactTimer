import React from 'react';
import {Link, IndexLink} from 'react-router';

module.exports = (props) => {
    return (
        <div className="top-bar">
          <div className="top-bar-left">
            <ul className="menu">
              <li className="menu-text">
                byU's
              </li>
              <li>
                <IndexLink to="/" activeClassName="active-link">Timer</IndexLink>
              </li>
              <li> 
                <IndexLink to="/countdown" activeClassName="active-link">Countdown</IndexLink> 
              </li>
            </ul>
          </div>
          <div className="top-bar-right">
            <ul className="menu">
              <li className="menu-text">
                Created by <a href="https://github.com/urbinopescada" target="_blank">Urbino Pescada</a>
              </li>
            </ul>
          </div>
        </div>
    );
};
