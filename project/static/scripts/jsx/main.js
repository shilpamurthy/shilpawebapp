var DanceVideos = React.createClass ({

    render : function() {
    	var danceVideos = this.props.videoList;
    	var pinVideoList = this.props.pinVideoList;
       	return (
        <div>
          	<div className="row">
        		<div className="col-sm-2" id="pinIcon">
          			<img src='static/css/icons/glyphicons-239-pin.png'/>
        		</div>
        		<div className="col-sm-6">
         			<h1 id="heading"> Pinned Videos (New show on Nov 20th!) </h1>
        		</div>
     		</div>
     		{ pinVideoList.map(function(danceVideo) {
              function getInnerHtml() {return {__html: danceVideo.video_description};};
              return (
                <div className="row" id="video">
                  <div className="col-sm-6">
                      <iframe width="500" height="281" id="yt_video" src={ danceVideo.url } frameborder="0" allowfullscreen></iframe>
                  </div>
                  <div className="col-sm-6" id="video_description" dangerouslySetInnerHTML={getInnerHtml()}>
                  </div>
                </div>
              )}) 
          	}
          	<div className="row">
        		<div className="col-sm-6 col-sm-offset-2">
         			<h1 id="heading"> Few of my favorite things </h1>
        		</div>
     		</div>
     		<br></br>
            { danceVideos.map(function(danceVideo) {
              function getInnerHtml() {return {__html: danceVideo.video_description};};
              return (
                <div className="row" id="video">
                  <div className="col-sm-6">
                      <iframe width="500" height="281" id="yt_video" src={ danceVideo.url } frameborder="0" allowfullscreen></iframe>
                  </div>
                  <div className="col-sm-6" id="video_description" dangerouslySetInnerHTML={getInnerHtml()}>
                  </div>
                </div>
              )}) 
          	}
        </div>
        )
      }
    }); 

var videoList = [{"url": "https://www.youtube.com/embed/9EMAst0liKE", "video_description": "I love this piece because it sends a message about strength and choices."}, {"url": "https://www.youtube.com/embed/-rxSL0DTiPU", "video_description": "This piece shows how dance and breath come together in harmony."}, {"url" : "https://www.youtube.com/embed/YQkcnuZED7U", "video_description" : "I love this piece because it talks about strength, equality and comradarie."}];
var pinVideoList = [{"url": "https://www.youtube.com/embed/91A3i6spzf4", "video_description": "I performed with some lovely ladies at the Mona Khan Dance Company dance show. <br> <li> Dancer knee pads are a blessing <br> <br> <li> I want to wear the costume 24/7.<br> <br> <li> My dance instructor Sumana is an amazing human. <br> <br> <li> Check out <a href=\"http://www.monakhancompany.com/home.html\"> http://www.monakhancompany.com/home.html </a>. I dance in the Mountain View Advanced class and teach 1 class in Cupertino/San Jose and 2 classes in Santa Clara. </p>"}]
ReactDOM.render(<DanceVideos pinVideoList={ pinVideoList } videoList={ videoList }/>, document.getElementById('videos'));