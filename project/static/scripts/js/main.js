(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var DanceVideos = React.createClass ({displayName: "DanceVideos",

    render : function() {
    	var danceVideos = this.props.videoList;
    	var pinVideoList = this.props.pinVideoList;
       	return (
        React.createElement("div", null, 
          	React.createElement("div", {className: "row"}, 
        		React.createElement("div", {className: "col-sm-2", id: "pinIcon"}, 
          			React.createElement("img", {src: "static/css/icons/glyphicons-239-pin.png"})
        		), 
        		React.createElement("div", {className: "col-sm-6"}, 
         			React.createElement("h1", {id: "heading"}, " Pinned Videos (New show on Nov 20th!) ")
        		)
     		), 
     		 pinVideoList.map(function(danceVideo) {
              function getInnerHtml() {return {__html: danceVideo.video_description};};
              return (
                React.createElement("div", {className: "row", id: "video"}, 
                  React.createElement("div", {className: "col-sm-6"}, 
                      React.createElement("iframe", {width: "500", height: "281", id: "yt_video", src:  danceVideo.url, frameborder: "0", allowfullscreen: true})
                  ), 
                  React.createElement("div", {className: "col-sm-6", id: "video_description", dangerouslySetInnerHTML: getInnerHtml()}
                  )
                )
              )}), 
          	
          	React.createElement("div", {className: "row"}, 
        		React.createElement("div", {className: "col-sm-6 col-sm-offset-2"}, 
         			React.createElement("h1", {id: "heading"}, " Few of my favorite things ")
        		)
     		), 
     		React.createElement("br", null), 
             danceVideos.map(function(danceVideo) {
              function getInnerHtml() {return {__html: danceVideo.video_description};};
              return (
                React.createElement("div", {className: "row", id: "video"}, 
                  React.createElement("div", {className: "col-sm-6"}, 
                      React.createElement("iframe", {width: "500", height: "281", id: "yt_video", src:  danceVideo.url, frameborder: "0", allowfullscreen: true})
                  ), 
                  React.createElement("div", {className: "col-sm-6", id: "video_description", dangerouslySetInnerHTML: getInnerHtml()}
                  )
                )
              )}) 
          	
        )
        )
      }
    }); 

var videoList = [{"url": "https://www.youtube.com/embed/9EMAst0liKE", "video_description": "I love this piece because it sends a message about strength and choices."}, {"url": "https://www.youtube.com/embed/-rxSL0DTiPU", "video_description": "This piece shows how dance and breath come together in harmony."}, {"url" : "https://www.youtube.com/embed/YQkcnuZED7U", "video_description" : "I love this piece because it talks about strength, equality and comradarie."}];
var pinVideoList = [{"url": "https://www.youtube.com/embed/91A3i6spzf4", "video_description": "I performed with some lovely ladies at the Mona Khan Dance Company dance show. <br> <li> Dancer knee pads are a blessing <br> <br> <li> I want to wear the costume 24/7.<br> <br> <li> My dance instructor Sumana is an amazing human. <br> <br> <li> Check out <a href=\"http://www.monakhancompany.com/home.html\"> http://www.monakhancompany.com/home.html </a>. I dance in the Mountain View Advanced class and teach 1 class in Cupertino/San Jose and 2 classes in Santa Clara. </p>"}]
ReactDOM.render(React.createElement(DanceVideos, {pinVideoList:  pinVideoList, videoList:  videoList }), document.getElementById('videos'));

},{}]},{},[1]);
