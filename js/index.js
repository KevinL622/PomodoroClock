var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var TimerSet = function (_React$Component) {_inherits(TimerSet, _React$Component);function TimerSet() {_classCallCheck(this, TimerSet);return _possibleConstructorReturn(this, (TimerSet.__proto__ || Object.getPrototypeOf(TimerSet)).apply(this, arguments));}_createClass(TimerSet, [{ key: "render", value: function render()
    {
      return (
        React.createElement("div", { className: "container", id: this.props.timerSetId },
          React.createElement("div", { id: this.props.buttonLabel },
            this.props.textLabel,
            React.createElement("p", { id: this.props.idLength }, this.props.setLength),
            React.createElement("button", { id: this.props.incrementType, onClick: this.props.incrementClick }, "+1 Min"),
            React.createElement("button", { id: this.props.decrementType, onClick: this.props.decrementClick }, "-1 Min"))));



    } }]);return TimerSet;}(React.Component);
;var

DisplaySession = function (_React$Component2) {_inherits(DisplaySession, _React$Component2);function DisplaySession() {_classCallCheck(this, DisplaySession);return _possibleConstructorReturn(this, (DisplaySession.__proto__ || Object.getPrototypeOf(DisplaySession)).apply(this, arguments));}_createClass(DisplaySession, [{ key: "render", value: function render()
    {var _this3 = this;
      return (
        React.createElement("div", { className: "container", id: this.props.displayId },
          React.createElement("div", { id: this.props.label },
            this.props.textLabel,
            React.createElement("p", { id: this.props.timeLabel }, this.props.timeLeft),
            React.createElement("audio", { id: this.props.audioId, preload: "auto", src: "https://sampleswap.org/samples-ghost/SFX%20and%20UNUSUAL%20SOUNDS/alarm%20sounds/49[kb]squeaky-clown-horn.wav.mp3", ref: function ref(audio) {_this3.alarmSound = audio;} }),
            React.createElement("button", { id: this.props.playButtonId, onClick: this.props.playClick }, this.props.playLabel),
            React.createElement("button", { id: this.props.resetButtonId, onClick: this.props.resetClick }, this.props.resetLabel))));



    } }]);return DisplaySession;}(React.Component);
;

var minuteConverter = function minuteConverter(timeInMinutes) {
  var totalTime = timeInMinutes * 60;
  var minutes = timeInMinutes;
  var seconds = Math.floor(totalTime % 60);
  minutes < 10 ? minutes = "0" + minutes : minutes = minutes;
  seconds < 10 ? seconds = "0" + seconds : seconds = seconds;
  var timeString = minutes + ":" + seconds;
  return timeString;
};

var secondsConverter = function secondsConverter(timeInSeconds) {
  var totalTime = timeInSeconds;
  var minutes = Math.floor(totalTime / 60);
  var seconds = Math.floor(totalTime % 60);
  minutes < 10 ? minutes = "0" + minutes : minutes = minutes;
  seconds < 10 ? seconds = "0" + seconds : seconds = seconds;
  var timeString = minutes + ":" + seconds;
  return timeString;
};var

Timer = function (_React$Component3) {_inherits(Timer, _React$Component3);
  function Timer(props) {_classCallCheck(this, Timer);var _this4 = _possibleConstructorReturn(this, (Timer.__proto__ || Object.getPrototypeOf(Timer)).call(this,
    props));
    _this4.state = {
      breakLength: 5,
      sessionLength: 25,
      sessionTime: 1500,
      timeType: "Session",
      power: "off" };

    _this4.countDown = _this4.countDown.bind(_this4);
    _this4.reset = _this4.reset.bind(_this4);
    _this4.timeDecrement = _this4.timeDecrement.bind(_this4);
    _this4.stopCount = _this4.stopCount.bind(_this4);
    _this4.breakIncrement = _this4.breakIncrement.bind(_this4);
    _this4.sessionIncrement = _this4.sessionIncrement.bind(_this4);
    _this4.breakDecrement = _this4.breakDecrement.bind(_this4);
    _this4.sessionDecrement = _this4.sessionDecrement.bind(_this4);
    _this4.alarm = _this4.alarm.bind(_this4);
    _this4.timeSwitch = _this4.timeSwitch.bind(_this4);return _this4;
  }_createClass(Timer, [{ key: "timeDecrement", value: function timeDecrement()

    {
      this.setState({
        sessionTime: this.state.sessionTime - 1 });

    } }, { key: "breakIncrement", value: function breakIncrement()

    {
      if (this.state.power == "off" && this.state.breakLength < 60) {
        this.setState({
          breakLength: this.state.breakLength + 1 });

      }
    } }, { key: "sessionIncrement", value: function sessionIncrement()

    {
      if (this.state.sessionLength < 60 && this.state.power == "off") {
        this.setState({
          sessionLength: this.state.sessionLength + 1,
          sessionTime: this.state.sessionTime + 60 });

      }
    } }, { key: "breakDecrement", value: function breakDecrement()

    {
      if (this.state.power == "off" && this.state.breakLength > 1) {
        this.setState({
          breakLength: this.state.breakLength - 1 });

      }
    } }, { key: "sessionDecrement", value: function sessionDecrement()

    {
      if (this.state.sessionLength > 1 && this.state.power == "off") {
        this.setState({
          sessionLength: this.state.sessionLength - 1,
          sessionTime: this.state.sessionTime - 60 });

      }
    } }, { key: "stopCount", value: function stopCount(

    variableName) {
      if (variableName) {
        clearInterval(variableName);
      }
    } }, { key: "countDown", value: function countDown(

    event) {var _this5 = this;
      var counter;
      if (this.state.power == "on") {
        this.stopCount(this.counter);
        this.setState({
          power: "off" });

      } else {
        this.counter = setInterval(function () {
          _this5.timeDecrement();
          _this5.timeSwitch();
        }, 1000);
        this.setState({
          power: "on" });

      }
    } }, { key: "reset", value: function reset(

    event) {
      this.stopCount(this.counter);
      this.setState({
        breakLength: 5,
        sessionLength: 25,
        sessionTime: 1500,
        timeType: "Session",
        power: "off" });

      document.getElementById("beep").pause();
      document.getElementById("beep").currentTime = 0;
    } }, { key: "alarm", value: function alarm()

    {
      document.getElementById("beep").play();
    } }, { key: "timeSwitch", value: function timeSwitch()

    {
      if (this.state.sessionTime < 0 && this.state.timeType == "Session") {
        this.alarm();
        this.stopCount(this.counter);
        this.setState({
          sessionTime: this.state.breakLength * 60,
          timeType: "Break",
          power: "off" });

        this.countDown();
      } else if (this.state.sessionTime < 0 && this.state.timeType == "Break") {
        this.alarm();
        this.stopCount(this.counter);
        this.setState({
          sessionTime: this.state.sessionLength * 60,
          timeType: "Session",
          power: "off" });

        this.countDown();
      }
    } }, { key: "render", value: function render()

    {
      return (
        React.createElement("div", null,
          React.createElement("h1", null, "Pomodoro Clock"),
          React.createElement("div", { className: "box" },

            React.createElement(TimerSet, {
              timerSetId: "break-box",
              buttonLabel: "break-label",
              textLabel: "Break Length",
              idLength: "break-length",
              setLength: this.state.breakLength,
              incrementType: "break-increment",
              incrementClick: this.breakIncrement,
              decrementType: "break-decrement",
              decrementClick: this.breakDecrement }),

            React.createElement(TimerSet, {
              timerSetId: "session-box",
              buttonLabel: "session-label",
              textLabel: "Session Length",
              idLength: "session-length",
              setLength: this.state.sessionLength,
              incrementType: "session-increment",
              incrementClick: this.sessionIncrement,
              decrementType: "session-decrement",
              decrementClick: this.sessionDecrement }),

            React.createElement(DisplaySession, {
              displayId: "display-box",
              label: "timer-label",
              textLabel: this.state.timeType,
              timeLabel: "time-left",
              timeLeft: secondsConverter(this.state.sessionTime),
              audioId: "beep",
              playButtonId: "start_stop",
              playClick: this.countDown,
              playLabel: "Play/Pause",
              resetButtonId: "reset",
              resetClick: this.reset,
              resetLabel: "Reset" }))));




    } }]);return Timer;}(React.Component);
;

ReactDOM.render(React.createElement(Timer, null), document.getElementById('app'));
