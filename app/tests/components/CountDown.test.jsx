var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var CountDown = require('CountDown');

describe('CountDown', () =>{
  it('should exist', () => {
    expect(CountDown).toExist();
  });

  describe('handleSetCountDown', ()=>{
    //done par must be used and invoked, because qhe are using async
    it('should set state to started and countdown', (done) => {
      var countdown = TestUtils.renderIntoDocument(<CountDown/>);
      countdown.handleSetCountDown(10);
      expect(countdown.state.count).toBe(10);
      expect(countdown.state.countdownStatus).toBe('started');

      setTimeout(()=>{
        expect(countdown.state.count).toBe(9);
        done();
      }, 1001)
    });

    it('should never be negative', (done) => {
      var countdown = TestUtils.renderIntoDocument(<CountDown/>);
      countdown.handleSetCountDown(1);

      setTimeout(()=>{
        expect(countdown.state.count).toBe(0);
        done();
      }, 2001)
    });

    it('should pause countdown on paused status', (done) => {
      var countdown = TestUtils.renderIntoDocument(<CountDown/>);
      countdown.handleSetCountDown(3);
      countdown.handeStatusChange('paused');
      setTimeout(()=>{
        expect(countdown.state.count).toBe(3);
        expect(countdown.state.countdownStatus).toBe('paused');
        done();
      }, 1001)
    });

    it('should reset count on stop', (done) => {
      var countdown = TestUtils.renderIntoDocument(<CountDown/>);
      countdown.handleSetCountDown(3);
      countdown.handeStatusChange('stopped');
      setTimeout(()=>{
        expect(countdown.state.count).toBe(0);
        expect(countdown.state.countdownStatus).toBe('stopped');
        done();
      }, 1001)
    });

  });

});
