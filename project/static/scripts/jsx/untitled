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

var videoList = [{"url": "https://www.youtube.com/embed/9EMAst0liKE", "video_description": "Dance is meant to be a medium to convey your ideas in the most physically beautiful way. I love pieces that combine costume theme, color scheme, prop work, lightwork, shadows and aesthetics to convey a message. <br> <br> This piece talks about an abusive relationship and how greed, ego and complacency plays into the relationship. +1 for costume color and props. <br> <br> +1 for Jade Chynoweth who is a bad ass and kills it at every dance number. "}, {"url": "https://www.youtube.com/embed/-rxSL0DTiPU", "video_description": "This piece has become my most favorite piece of artwork. The song is in Kannada which is a South Indian language (and my mother tounge), and the dance form is modern with tones of contemporary. The music starts around 0:47s and dance starts around 1:18s. <br> <br> All lifts are effortless and the stunt at 0:48 is my favorite. <br> <br> Props to the girl for doing floorwork in a dress. (My legs are all black and blue from doing floorwork in a studio -_-) <br> <br> +1 for drone shot"}, {"url" : "https://www.youtube.com/embed/Xcn-JhB7C78", "video_description" : "I was a part of a competitive dance team called Carnegie Mellon Raasta in college (and for a year when I was out of college). <br> <br> I've definitely had my most formative moments with this team, but to watch something you've built continue beyond you is a humbling and satisfying feeling.<br> <br> This is us at Raas All Stars National Championship 2015. It's been a great time dancing with this wonderful team."}];
var pinVideoList = [{"url": "https://www.youtube.com/embed/91A3i6spzf4", "video_description": "I performed with some lovely ladies at the Mona Khan Dance Company dance show. <br> <li> Dancer knee pads are a blessing <br> <br> <li> I want to wear the costume 24/7.<br> <br> <li> My dance instructor Sumana is an amazing human. <br> <br> <li> Check out <a href=\"http://www.monakhancompany.com/home.html\"> http://www.monakhancompany.com/home.html </a>. I dance in the Mountain View Advanced class and teach 1 class in Cupertino/San Jose and 2 classes in Santa Clara. </p>"}]
ReactDOM.render(<DanceVideos pinVideoList={ pinVideoList } videoList={ videoList }/>, document.getElementById('dance'));