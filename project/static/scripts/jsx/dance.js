var Modal = ReactBootstrap.Modal;
var Button = ReactBootstrap.Button;
var Image = ReactBootstrap.Image;

var DanceVideo = React.createClass({

  render: function(){
    var myVideoList = this.props.myVideoList;
    var videoList = this.props.videoList;
    return(
      <div>
        <div className="row" id="video_heading">
          <h1> Showcases </h1> 
        </div>
        <div className="row" id="video_row">
          {
            myVideoList.map(function(danceVideo){
              return (
                <div className="col-sm-3">
                  <VideoModal url={ danceVideo.url } about={ danceVideo.video_description } image_thumb={ danceVideo.image_thumb } date={ danceVideo.date }/>
                </div>
              );
            })
          }
        </div>
        <div className="row" id="video_heading">
          <h1> Some pieces I like </h1>
        </div>
        <div className="row" id="video_row">
          {
            videoList.map(function(danceVideo){
              return (
                <div className="col-sm-4">
                  <VideoModal url={ danceVideo.url } about={ danceVideo.video_description } image_thumb={ danceVideo.image_thumb } date={ danceVideo.date }/>
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
});
var VideoModal = React.createClass({
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
          <div className="app">
            <Image className="fade" width="270" height="200" onClick={this.openModal} src={ image_thumb }/>
            <h2 id="video_date"> { date } </h2>
            <Modal isOpen={this.state.isModalOpen} show={this.state.isModalOpen} id="modal_video">
              <div className="body">
                <iframe width="700" height="394" id="yt_video" src={ url } frameborder="0" allowfullscreen></iframe>
                <h2 id="video_blurb"> { about } </h2>
              </div>
              <Button onClick={this.closeModal}>Close modal</Button>
            </Modal>
          </div>
        );
    }
});
var videoList = [{"url": "https://www.youtube.com/embed/9EMAst0liKE", "video_description": "I love this piece because it sends a message about strength and choices.", "image_thumb": "http://i3.ytimg.com/vi/9EMAst0liKE/hqdefault.jpg", "date":"2016"}, {"url": "https://www.youtube.com/embed/-rxSL0DTiPU", "video_description": "This piece shows how dance and breath come together in harmony.", "image_thumb": "http://i3.ytimg.com/vi/-rxSL0DTiPU/hqdefault.jpg", "date":"2016"}, {"url" : "https://www.youtube.com/embed/YQkcnuZED7U", "video_description" : "I love this piece because it talks about strength, equality and comradarie.", "image_thumb": "http://i3.ytimg.com/vi/YQkcnuZED7U/hqdefault.jpg", "date":"2016"}];
var pinVideoList = [{"url": "https://www.youtube.com/embed/91A3i6spzf4", "video_description": "Mona Khan Dance Company Spring Showcase"}]
var myVideoList = [{"url": "https://www.youtube.com/embed/X5VbDdyhuDY", "video_description": "Mona Khan Dance Company Fall Show 2016", "image_thumb": "static/css/images/videoThumbnails/mkc2.jpg", "date": "Fall 2016"}, {"url": "https://www.youtube.com/embed/91A3i6spzf4?wmode=opaque", "video_description": "Mona Khan Dance Company Spring Showcase 2016", "image_thumb": "static/css/images/videoThumbnails/mkc1.jpg", "date": "Spring 2016"}, {"url": "https://www.youtube.com/embed/JsiLkZp99fQ?wmode=opaque", "video_description": "CMU Raasta Raas Royalty: 2016", "image_thumb": "static/css/images/videoThumbnails/raas1.jpg", "date": "Spring 2016"}, {"url": "https://www.youtube.com/embed/Xcn-JhB7C78?wmode=opaque", "video_description": "CMU Raasta National Championship: 2015", "image_thumb": "static/css/images/videoThumbnails/raas2.jpg", "date": "Spring 2015"}]
ReactDOM.render(<DanceVideo myVideoList={ myVideoList } videoList={ videoList }/>, document.getElementById('videos'));