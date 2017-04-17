var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var CountDownForm = require('CountDownForm');

describe('CountdownForm', () =>{
  it('should exist', () => {
    expect(CountDownForm).toExist();
  });

  it('should call onSetCountDown if valid data entered', () =>{
    var spy = expect.createSpy();
    var countDownForm = TestUtils.renderIntoDocument(<CountDownForm onSetCountDown={spy}/>);
    var $el = $(ReactDOM.findDOMNode(countDownForm));

    // Set a value to the textbox
    countDownForm.refs.txtSeconds.value = '109';

    //Press submit button;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(109);
  });
  it('should not call onSetCountDown if invalid data entered', () =>{
    var spy = expect.createSpy();
    var countDownForm = TestUtils.renderIntoDocument(<CountDownForm onSetCountDown={spy}/>);
    var $el = $(ReactDOM.findDOMNode(countDownForm));

    // Set a value to the textbox
    countDownForm.refs.txtSeconds.value = '109e2';

    //Press submit button;
    TestUtils.Simulate.submit($el.find('form')[0]);
    expect(spy).toNotHaveBeenCalled();
  });
});
