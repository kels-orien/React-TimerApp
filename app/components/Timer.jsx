var React = require('react');
var Clock = require('Clock');
var Controls =  require('Controls');


var Timer = React.createClass({
  getInitialState: function () {
    return {
      count: 0,
      timerStatus: 'stopped'
    };
  },

//called after props or state gets updated
  componentDidUpdate: function (prevProps, prevState) {
    if (this.state.timerStatus !== prevState.timerStatus) {
      switch (this.state.timerStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({count: 0});
          //this.setState({timerStatus: 'paused'});
        case 'paused':
          clearInterval(this.timer)
          this.timer = undefined;

          break;
      }
    }
  },
  handleStatusChange: function (newTimerStatus) {
    this.setState({timerStatus: newTimerStatus});
     //timerStatus: newStatus;
    // console.log(newStatus);
     //console.log(this.state.timerStatus);

  },
  componentWillUnMount: function () {
     clearInterval(this.timer);
   },
  startTimer: function () {
    this.timer = setInterval(() => {

      this.setState({
        count : this.state.count + 1

      });

    }, 1000);
  },
render: function () {
    var {count, timerStatus} = this.state;
  var renderControlArea = () => {

      return <Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange}/>;




};
  return (

    <div>
      <h1 className ='page-title'>Timer App</h1>
      <Clock totalSeconds={count}/>
      {renderControlArea()}
    </div>

  );
}

});

module.exports = Timer;
