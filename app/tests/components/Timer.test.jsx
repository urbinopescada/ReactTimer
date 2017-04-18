var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe('Timer', () =>{
  it('should exist', () => {
    expect(Timer).toExist();
  });

  describe('handleSetCountDown', ()=>{
    it('should start/pause/clear when user clicks start/pause/clear', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      var $el = $(ReactDOM.findDOMNode(timer));

      var $startButton = $el.find("button:contains(Start)");
      var $pauseButton = $el.find("button:contains(Pause)");
      var $stopButton = $el.find("button:contains(Clear)");
      expect($startButton.length).toBe(1);
      expect($pauseButton.length).toBe(0);
      expect($stopButton.length).toBe(1);

      TestUtils.Simulate.click($startButton[0]);
      setTimeout(()=>{
        expect(timer.state.count).toBe(1);
        expect(timer.state.timerStatus).toBe('started');

        setTimeout(()=>{
          var $start = $el.find("button:contains(Start)");
          var $pause = $el.find("button:contains(Pause)");
          var $stop = $el.find("button:contains(Clear)");
          expect($start.length).toBe(0);
          expect($pause.length).toBe(1);
          expect($stop.length).toBe(1);

          TestUtils.Simulate.click($pause[0]);

          expect(timer.state.count).toBe(2);
          expect(timer.state.timerStatus).toBe('paused');

          TestUtils.Simulate.click($stop[0]);
          setTimeout(()=>{
            var $start = $el.find("button:contains(Start)");
            var $pause = $el.find("button:contains(Pause)");
            var $stop = $el.find("button:contains(Clear)");
            expect($start.length).toBe(1);
            expect($pause.length).toBe(0);
            expect($stop.length).toBe(1);


            expect(timer.state.count).toBe(0);
            expect(timer.state.timerStatus).toBe('stopped');


            done();
          }, 1010)
        }, 1010)
      }, 1010)

    });


  });

});
