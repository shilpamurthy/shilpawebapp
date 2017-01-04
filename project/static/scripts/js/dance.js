(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Modal = ReactBootstrap.Modal;
var Button = ReactBootstrap.Button;
var Image = ReactBootstrap.Image;

var DanceVideo = React.createClass({displayName: "DanceVideo",

  render: function(){
    var myVideoList = this.props.myVideoList;
    var videoList = this.props.videoList;
    return(
      React.createElement("div", null, 
        React.createElement("div", {className: "row", id: "video_heading"}, 
          React.createElement("h1", null, " Showcases ")
        ), 
        React.createElement("div", {className: "row", id: "video_row"}, 
          
            myVideoList.map(function(danceVideo){
              return (
                React.createElement("div", {className: "col-sm-3"}, 
                  React.createElement(VideoModal, {url:  danceVideo.url, about:  danceVideo.video_description, image_thumb:  danceVideo.image_thumb, date:  danceVideo.date})
                )
              );
            })
          
        ), 
        React.createElement("br", null), 
        React.createElement("br", null), 
        React.createElement("br", null), 
        React.createElement("div", {className: "row", id: "marker_dance"}, 
          React.createElement("i", {className: "material-icons"}, "expand_more")
        ), 
        React.createElement("br", null), 
        React.createElement("div", {className: "row", id: "video_heading"}, 
          React.createElement("h1", null, " Some pieces I like ")
        ), 
        React.createElement("div", {className: "row", id: "video_row"}, 
          
            videoList.map(function(danceVideo){
              return (
                React.createElement("div", {className: "col-sm-3"}, 
                  React.createElement(VideoModal, {url:  danceVideo.url, about:  danceVideo.video_description, image_thumb:  danceVideo.image_thumb, date:  danceVideo.date})
                )
              );
            })
          
        )
      )
    );
  }
});
var VideoModal = React.createClass({displayName: "VideoModal",
    getInitialState: function() {
        return { isModalOpen: false };
    },

    openModal: function() {
      console.log(this.state.isModalOpen);
        this.setState({ isModalOpen: true });
    },

    closeModal: function() {
        this.setState({ isModalOpen: false });
    },

    render: function() {
      var url = this.props.url;
      var about = this.props.about;
      var image_thumb = this.props.image_thumb;
      var date = this.props.date
        return (
          React.createElement("div", {className: "app"}, 
            React.createElement(Image, {className: "fade", width: "270", height: "200", onClick: this.openModal, src:  image_thumb }), 
            React.createElement("h2", {id: "video_date"}, " ",  date, " "), 
            React.createElement(Modal, {isOpen: this.state.isModalOpen, show: this.state.isModalOpen, id: "modal_video"}, 
              React.createElement("div", {className: "body"}, 
                React.createElement("iframe", {width: "700", height: "394", id: "yt_video", src:  url, frameborder: "0", allowfullscreen: true}), 
                React.createElement("h2", {id: "video_blurb"}, " ",  about, " ")
              ), 
              React.createElement(Button, {onClick: this.closeModal}, "Close modal")
            )
          )
        );
    }
});
var videoList = [{"url": "https://www.youtube.com/embed/9EMAst0liKE", "video_description": "I love this piece because it sends a message about strength and choices.", "image_thumb": "http://i3.ytimg.com/vi/9EMAst0liKE/hqdefault.jpg", "date":"2016"}, {"url": "https://www.youtube.com/embed/-rxSL0DTiPU", "video_description": "This piece shows how dance and breath come together in harmony.", "image_thumb": "http://i3.ytimg.com/vi/-rxSL0DTiPU/hqdefault.jpg", "date":"2016"}, {"url" : "https://www.youtube.com/embed/YQkcnuZED7U", "video_description" : "I love this piece because it talks about strength, equality and comradarie.", "image_thumb": "http://i3.ytimg.com/vi/YQkcnuZED7U/hqdefault.jpg", "date":"2016"}];
var pinVideoList = [{"url": "https://www.youtube.com/embed/91A3i6spzf4", "video_description": "Mona Khan Dance Company Spring Showcase"}]
var myVideoList = [{"url": "https://www.youtube.com/embed/X5VbDdyhuDY", "video_description": "Mona Khan Dance Company Fall Show 2016", "image_thumb": "static/css/images/videoThumbnails/mkc2.jpg", "date": "Fall 2016"}, {"url": "https://www.youtube.com/embed/91A3i6spzf4?wmode=opaque", "video_description": "Mona Khan Dance Company Spring Showcase 2016", "image_thumb": "static/css/images/videoThumbnails/mkc1.jpg", "date": "Spring 2016"}, {"url": "https://www.youtube.com/embed/JsiLkZp99fQ?wmode=opaque", "video_description": "CMU Raasta Raas Royalty: 2016", "image_thumb": "static/css/images/videoThumbnails/raas1.jpg", "date": "Spring 2016"}, {"url": "https://www.youtube.com/embed/Xcn-JhB7C78?wmode=opaque", "video_description": "CMU Raasta National Championship: 2015", "image_thumb": "static/css/images/videoThumbnails/raas2.jpg", "date": "Spring 2015"}]
ReactDOM.render(React.createElement(DanceVideo, {myVideoList:  myVideoList, videoList:  videoList }), document.getElementById('videos'));

},{}]},{},[1]);
