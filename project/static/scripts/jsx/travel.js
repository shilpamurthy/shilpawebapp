var Modal = ReactBootstrap.Modal;
var Button = ReactBootstrap.Button;
var Image = ReactBootstrap.Image;

var Travel = React.createClass({
  render: function(){
    return (
      <div>
        <div className="container-fluid">
          <div className="row" id="video_heading">
              <h1> Travel </h1> 
          </div>
        </div>
          <div id="wrapper">
            <div id="columns">
            {
              myTravels.map(function (travel){
                var files = travel.files;
                var place = travel.place;
                var result = files.map(function(image){
                  return (
                      <div className="pin">
                        <Image src={ image } id="image" />
                      </div>
                    );
                })
                console.log(result);
                return result;
              })
            }
            </div>
          </div>
      </div>
    );
  }
});

var myTravels = [{"place": "Iceland", "files": ["static/css/images/travel/iceland/107.jpg","static/css/images/travel/iceland/116.jpg","static/css/images/travel/iceland/125.jpg","static/css/images/travel/iceland/131.jpg","static/css/images/travel/iceland/137.jpg","static/css/images/travel/iceland/138.jpg","static/css/images/travel/iceland/147.jpg","static/css/images/travel/iceland/150.jpg","static/css/images/travel/iceland/154.jpg","static/css/images/travel/iceland/165.jpg","static/css/images/travel/iceland/168.jpg","static/css/images/travel/iceland/169.jpg","static/css/images/travel/iceland/175.jpg","static/css/images/travel/iceland/70.jpg","static/css/images/travel/iceland/73.jpg","static/css/images/travel/iceland/74.jpg","static/css/images/travel/iceland/79.jpg","static/css/images/travel/iceland/81.jpg","static/css/images/travel/iceland/99.jpg"]}];

ReactDOM.render(<Travel />, document.getElementById('videos'));