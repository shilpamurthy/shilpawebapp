var App = React.createClass({
  render: function () {
    return <div><SmoothScroll /></div>;
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

var SmoothScroll = React.createClass({

  render: function () {
    return (
      <div className="smooth-scroll">
        <p className="self_tags" id="top" onClick={this.handleTopClick}>Get to Know Me</p>
        <div className="smooth-scroll--spacer" />
        <p id="bottom" onClick={this.handleBottomClick}></p>
      </div>
    );
  },

  handleTopClick: function () {
    smoothScroll.scrollTo('bottom');
  },

  handleBottomClick: function () {
    smoothScroll.scrollTo('top');
  }
});

ReactDOM.render(<App />, document.getElementById('videos'));