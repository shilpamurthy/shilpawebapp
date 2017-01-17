(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Modal = ReactBootstrap.Modal;
var Button = ReactBootstrap.Button;
var Image = ReactBootstrap.Image;

var Travel = React.createClass({displayName: "Travel",

  getInitialState: function() {
        return { place: "Iceland" };
    },
  changePlace: function(region){
    console.log("CALLED");
    this.setState({ place: region });
  },
  render: function(){
    console.log(this.state.place);
    var currentPlace = this.state.place;
    var files = myTravels[this.state.place];
    console.log(files);
    return (
      React.createElement("div", null, 
        React.createElement("div", {className: "container-fluid"}, 
          React.createElement("div", {className: "row", id: "video_heading"}, 
              React.createElement("h1", null, " Travel ")
          ), 
          React.createElement("div", {className: "row", id: "travel_heading"}, 
            React.createElement("div", {className: "col-sm-3"}, 
              React.createElement("h1", {onClick: () => {this.changePlace("Iceland")}}, " Iceland ")
            ), 
            React.createElement("div", {className: "col-sm-3"}, 
              React.createElement("h1", {onClick: () => {this.changePlace("France")}}, " France ")
            ), 
            React.createElement("div", {className: "col-sm-3"}, 
              React.createElement("h1", {onClick: () => {this.changePlace("Switzerland")}}, " Switzerland ")
            ), 
            React.createElement("div", {className: "col-sm-3"}, 
              React.createElement("h1", {onClick: () => {this.changePlace("Scandanavia")}}, " Scandanavia ")
            )
          ), 
          React.createElement("div", {className: "row", id: "travel_heading"}, 
              React.createElement("h2", null, " ", currentPlace, " ")
          )
        ), 
          React.createElement("div", {id: "wrapper"}, 
            React.createElement("div", {id: "columns"}, 
            
              files.map(function(image){
                return (
                    React.createElement("div", {className: "pin"}, 
                      React.createElement(Image, {src:  image, id: "image"})
                    )
                );
              })
            
            )
          )
      )
    );
  }
});

var myTravels = {"Iceland": ["static/css/images/travel/iceland/107.jpg","static/css/images/travel/iceland/116.jpg","static/css/images/travel/iceland/125.jpg","static/css/images/travel/iceland/131.jpg","static/css/images/travel/iceland/137.jpg","static/css/images/travel/iceland/138.jpg","static/css/images/travel/iceland/147.jpg","static/css/images/travel/iceland/150.jpg","static/css/images/travel/iceland/154.jpg","static/css/images/travel/iceland/165.jpg","static/css/images/travel/iceland/168.jpg","static/css/images/travel/iceland/169.jpg","static/css/images/travel/iceland/175.jpg","static/css/images/travel/iceland/70.jpg","static/css/images/travel/iceland/73.jpg","static/css/images/travel/iceland/74.jpg","static/css/images/travel/iceland/79.jpg","static/css/images/travel/iceland/81.jpg","static/css/images/travel/iceland/99.jpg"],
"France": ["static/css/images/travel/france/38.jpg","static/css/images/travel/france/41.jpg","static/css/images/travel/france/43.jpg","static/css/images/travel/france/45.jpg","static/css/images/travel/france/46.jpg","static/css/images/travel/france/52.jpg","static/css/images/travel/france/57.jpg","static/css/images/travel/france/59.jpg","static/css/images/travel/france/62.jpg"],
"Scandanavia": ["static/css/images/travel/Scandanavia/1.jpg","static/css/images/travel/Scandanavia/2.jpg","static/css/images/travel/Scandanavia/3.jpg","static/css/images/travel/Scandanavia/4.jpg","static/css/images/travel/Scandanavia/5.jpg","static/css/images/travel/Scandanavia/6.jpg","static/css/images/travel/Scandanavia/7.jpg","static/css/images/travel/Scandanavia/8.jpg"],
"Switzerland": ["static/css/images/travel/switzerland/1.jpg","static/css/images/travel/switzerland/11.jpg","static/css/images/travel/switzerland/13.jpg","static/css/images/travel/switzerland/14.jpg","static/css/images/travel/switzerland/15.jpg","static/css/images/travel/switzerland/16.jpg","static/css/images/travel/switzerland/17.jpg","static/css/images/travel/switzerland/2.jpg","static/css/images/travel/switzerland/21.jpg","static/css/images/travel/switzerland/22.jpg","static/css/images/travel/switzerland/23.jpg","static/css/images/travel/switzerland/4.jpg","static/css/images/travel/switzerland/5.jpg","static/css/images/travel/switzerland/7.jpg","static/css/images/travel/switzerland/8.jpg","static/css/images/travel/switzerland/9.jpg"]};

ReactDOM.render(React.createElement(Travel, null), document.getElementById('videos'));

},{}]},{},[1]);
