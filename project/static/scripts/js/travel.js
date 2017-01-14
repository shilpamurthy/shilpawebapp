(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Modal = ReactBootstrap.Modal;
var Button = ReactBootstrap.Button;
var Image = ReactBootstrap.Image;

var Travel = React.createClass({displayName: "Travel",
  render: function(){
    return (
      React.createElement("div", null, 
        React.createElement("div", {className: "container-fluid"}, 
          React.createElement("div", {className: "row", id: "video_heading"}, 
              React.createElement("h1", null, " Travel ")
          )
        ), 
          React.createElement("div", {id: "wrapper"}, 
            React.createElement("div", {id: "columns"}, 
            
              myTravels.map(function (travel){
                var files = travel.files;
                var place = travel.place;
                var result = files.map(function(image){
                  return (
                      React.createElement("div", {className: "pin"}, 
                        React.createElement(Image, {src:  image, id: "image"})
                      )
                    );
                })
                console.log(result);
                return result;
              })
            
            )
          )
      )
    );
  }
});

var myTravels = [{"place": "Iceland", "files": ["static/css/images/travel/iceland/107.jpg","static/css/images/travel/iceland/116.jpg","static/css/images/travel/iceland/125.jpg","static/css/images/travel/iceland/131.jpg","static/css/images/travel/iceland/137.jpg","static/css/images/travel/iceland/138.jpg","static/css/images/travel/iceland/147.jpg","static/css/images/travel/iceland/150.jpg","static/css/images/travel/iceland/154.jpg","static/css/images/travel/iceland/165.jpg","static/css/images/travel/iceland/168.jpg","static/css/images/travel/iceland/169.jpg","static/css/images/travel/iceland/175.jpg","static/css/images/travel/iceland/70.jpg","static/css/images/travel/iceland/73.jpg","static/css/images/travel/iceland/74.jpg","static/css/images/travel/iceland/79.jpg","static/css/images/travel/iceland/81.jpg","static/css/images/travel/iceland/99.jpg"]}];

ReactDOM.render(React.createElement(Travel, null), document.getElementById('videos'));

},{}]},{},[1]);
