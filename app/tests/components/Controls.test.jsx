var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
var Controls = require('Controls');

describe('Controls',()=>{
  it('should exist', () => {
    expect(Controls).toExist();
  });

  describe('render', () =>{
      var voidFunc= ()=>{};
      it('should render pause when started',()=>{ 
          var controls = TestUtils.renderIntoDocument(<Controls countdownStatus='started' onStatusChange={voidFunc}/>);
          //$el is going to store the root of our component,
          // ReactDOM.findDOMNode(clock)) converts our component into the actual HTML
          var $el = $(ReactDOM.findDOMNode(controls));
          // now we can use jquery to find the value;
          var $pauseButton = $el.find("button:contains(Pause)");

          expect($pauseButton.length).toBe(1); //length= number of buttons found by Jquerys
      });
      it('should render start when started',()=>{
          var controls = TestUtils.renderIntoDocument(<Controls countdownStatus='paused' onStatusChange={voidFunc}/>);
          //$el is going to store the root of our component,
          // ReactDOM.findDOMNode(clock)) converts our component into the actual HTML
          var $el = $(ReactDOM.findDOMNode(controls));
          // now we can use jquery to find the value;
          var $pauseButton = $el.find("button:contains(Start)");

          expect($pauseButton.length).toBe(1); //length= number of buttons found by Jquerys
      });
  });
});
