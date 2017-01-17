var Modal = ReactBootstrap.Modal;
var Button = ReactBootstrap.Button;
var Image = ReactBootstrap.Image;

var Travel = React.createClass({

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
      <div>
        <div className="container-fluid">
          <div className="row" id="video_heading">
              <h1> Travel </h1> 
          </div>
          <div className="row" id="travel_heading">
            <div className="col-sm-3">
              <h1 onClick={() => {this.changePlace("Iceland")}}> Iceland </h1> 
            </div>
            <div className="col-sm-3">
              <h1 onClick={() => {this.changePlace("France")}}> France </h1> 
            </div>
            <div className="col-sm-3">
              <h1 onClick={() => {this.changePlace("Switzerland")}}> Switzerland </h1> 
            </div>
            <div className="col-sm-3">
              <h1 onClick={() => {this.changePlace("Scandanavia")}}> Scandanavia </h1> 
            </div>
          </div>
          <div className="row" id="travel_heading">
              <h2> {currentPlace} </h2> 
          </div>
        </div>
          <div id="wrapper">
            <div id="columns">
            {
              files.map(function(image){
                return (
                    <div className="pin">
                      <Image src={ image } id="image" />
                    </div>
                );
              })
            }
            </div>
          </div>
      </div>
    );
  }
});

var myTravels = {"Iceland": ["static/css/images/travel/iceland/107.jpg","static/css/images/travel/iceland/116.jpg","static/css/images/travel/iceland/125.jpg","static/css/images/travel/iceland/131.jpg","static/css/images/travel/iceland/137.jpg","static/css/images/travel/iceland/138.jpg","static/css/images/travel/iceland/147.jpg","static/css/images/travel/iceland/150.jpg","static/css/images/travel/iceland/154.jpg","static/css/images/travel/iceland/165.jpg","static/css/images/travel/iceland/168.jpg","static/css/images/travel/iceland/169.jpg","static/css/images/travel/iceland/175.jpg","static/css/images/travel/iceland/70.jpg","static/css/images/travel/iceland/73.jpg","static/css/images/travel/iceland/74.jpg","static/css/images/travel/iceland/79.jpg","static/css/images/travel/iceland/81.jpg","static/css/images/travel/iceland/99.jpg"],
"France": ["static/css/images/travel/france/38.jpg","static/css/images/travel/france/41.jpg","static/css/images/travel/france/43.jpg","static/css/images/travel/france/45.jpg","static/css/images/travel/france/46.jpg","static/css/images/travel/france/52.jpg","static/css/images/travel/france/57.jpg","static/css/images/travel/france/59.jpg","static/css/images/travel/france/62.jpg"],
"Scandanavia": ["static/css/images/travel/Scandanavia/1.jpg","static/css/images/travel/Scandanavia/2.jpg","static/css/images/travel/Scandanavia/3.jpg","static/css/images/travel/Scandanavia/4.jpg","static/css/images/travel/Scandanavia/5.jpg","static/css/images/travel/Scandanavia/6.jpg","static/css/images/travel/Scandanavia/7.jpg","static/css/images/travel/Scandanavia/8.jpg"],
"Switzerland": ["static/css/images/travel/switzerland/1.jpg","static/css/images/travel/switzerland/11.jpg","static/css/images/travel/switzerland/13.jpg","static/css/images/travel/switzerland/14.jpg","static/css/images/travel/switzerland/15.jpg","static/css/images/travel/switzerland/16.jpg","static/css/images/travel/switzerland/17.jpg","static/css/images/travel/switzerland/2.jpg","static/css/images/travel/switzerland/21.jpg","static/css/images/travel/switzerland/22.jpg","static/css/images/travel/switzerland/23.jpg","static/css/images/travel/switzerland/4.jpg","static/css/images/travel/switzerland/5.jpg","static/css/images/travel/switzerland/7.jpg","static/css/images/travel/switzerland/8.jpg","static/css/images/travel/switzerland/9.jpg"]};

ReactDOM.render(<Travel />, document.getElementById('videos'));