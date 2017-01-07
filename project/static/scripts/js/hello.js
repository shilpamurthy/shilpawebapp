(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var App = React.createClass({displayName: "App",
  render: function () {
    return React.createElement("div", null, React.createElement(SmoothScroll, null));
  }
});

var smoothScroll = {
  timer: null,

  stop: function () {
    clearTimeout(this.timer);
  },

  scrollTo: function (id, callback) {
    var settings = {
      duration: 1000,
      easing: {
        outQuint: function (x, t, b, c, d) {
          return c*((t=t/d-1)*t*t*t*t + 1) + b;
        }
      }
    };
    var percentage;
    var startTime;
    var node = document.getElementById(id);
    var nodeTop = node.offsetTop;
    var nodeHeight = node.offsetHeight;
    var body = document.body;
    var html = document.documentElement;
    var height = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    var windowHeight = window.innerHeight
    var offset = window.pageYOffset;
    var delta = nodeTop - offset;
    var bottomScrollableY = height - windowHeight;
    var targetY = (bottomScrollableY < delta) ?
      bottomScrollableY - (height - nodeTop - nodeHeight + offset):
      delta;
    targetY = 700;

    startTime = Date.now();
    percentage = 0;

    if (this.timer) {
      clearInterval(this.timer);
    }

    function step () {
      var yScroll;
      var elapsed = Date.now() - startTime;

      if (elapsed > settings.duration) {
        clearTimeout(this.timer);
      }

      percentage = elapsed / settings.duration;

      if (percentage > 1) {
        clearTimeout(this.timer);

        if (callback) {
          callback();
        }
      } else {
        yScroll = settings.easing.outQuint(0, elapsed, offset, targetY, settings.duration);
        window.scrollTo(0, yScroll);
        this.timer = setTimeout(step, 10);     
      }
    }

    this.timer = setTimeout(step, 10);
  }
};

var SmoothScroll = React.createClass({displayName: "SmoothScroll",

  render: function () {
    return (
      React.createElement("div", {className: "smooth-scroll"}, 
        React.createElement("p", {className: "self_tags", id: "top", onClick: this.handleTopClick}, "Get to Know Me"), 
        React.createElement("div", {className: "smooth-scroll--spacer"}), 
        React.createElement("p", {id: "bottom", onClick: this.handleBottomClick})
      )
    );
  },

  handleTopClick: function () {
    smoothScroll.scrollTo('bottom');
  },

  handleBottomClick: function () {
    smoothScroll.scrollTo('top');
  }
});

ReactDOM.render(React.createElement(App, null), document.getElementById('videos'));

},{}]},{},[1]);
