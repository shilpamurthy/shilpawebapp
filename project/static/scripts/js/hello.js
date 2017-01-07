(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var DirectLink = Scroll.DirectLink;
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;

var SmoothScroll = React.createClass({displayName: "SmoothScroll",
  componentDidMount: function() {

    Events.scrollEvent.register('begin', function(to, element) {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function(to, element) {
      console.log("end", arguments);
    });

    scrollSpy.update();

  },
  componentWillUnmount: function() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  },
  scrollToTop: function() {
    scroll.scrollToTop();
  },
  scrollToBottom: function() {
    scroll.scrollToBottom();
  },
  scrollTo: function() {
    scroll.scrollTo(100);
  },
  scrollMore: function() {
    scroll.scrollMore(100);
  },
  handleSetActive: function(to) {
    console.log(to);
  },
  render: function () {
    return (
      React.createElement("div", null, 
        React.createElement("a", {onClick: this.scrollToTop}, "To the top!"), 
        React.createElement("br", null), 
        React.createElement("a", {onClick: this.scrollToBottom}, "To the bottom!"), 
        React.createElement("br", null), 
        React.createElement("a", {onClick: this.scrollTo}, "Scroll to 100px from the top"), 
        React.createElement("br", null), 
        React.createElement("a", {onClick: this.scrollMore}, "Scroll 100px more from the current position!")
      )
    );
  }
});

ReactDOM.render(
  React.createElement(SmoothScroll, null),
  document.getElementById('smoothscroll')
);

},{}]},{},[1]);
