var Books = React.createClass ({
	render : function() {
		var books = this.props.bookList;
		console.log(books);
		return (
			<div className="container-fluid">
			<div className="row">
				<div className="col-md-10 col-md-offset-2">
					<h1> Currently Reading... </h1>
				</div>
			</div>
			<br></br> <br></br>
			{
				books.map(function(book){
					var name = book.name;
					var author = book.author;
					var date = book.date;
					var summary = book.summary;
					var image = book.image;

					return (
						<div className="row">
							<div className="col-md-3">
								<img src={image} className="book-image"/>
							</div>
							<div className="col-md-6">
								<div className="row">
									<div id="icon" className="col-sm-1">
										<img src="../static/css/icons/glyphicons-4-user.png"/>
									</div>
									<div className="col-md-4">
										<h2> {author} </h2>
									</div>
								</div>
								<div className="row">
									<div id="icon" className="col-sm-1">
										<img src="../static/css/icons/glyphicons-46-calendar.png"/>
									</div>
									<div className="col-md-2">
										<h2 id="date"> {date} </h2>
									</div>
								</div>
							</div>
						</div> 
					)
				})
			}
			</div>
		)
	}
});

var listOfBooks = [{"name" : "A Man Called Ove", "author" : "Fredrik Backman", "date" : "2014/07/15", "image": "../static/css/book_images/a-man-called-ove.jpg", "summary" : "A grumpy yet loveable man finds his solitary world turned on its head when a boisterous young family moves in next door. <br> <br> Meet Ove. He's a curmudgeon, the kind of man who points at people he dislikes as if they were burglars caught outside his bedroom window. He has staunch principles, strict routines, and a short fuse. People call him the bitter neighbor from hell, but must Ove be bitter just because he doesn't walk around with a smile plastered to his face all the time? <br> <br> Behind the cranky exterior there is a story and a sadness. So when one November morning a chatty young couple with two chatty young daughters move in next door and accidentally flatten Ove's mailbox, it is the lead-in to a comical and heartwarming tale of unkempt cats, unexpected friendship, and the ancient art of backing up a U-Haul. All of which will change one cranky old man and a local residents' association to their very foundations."}];
ReactDOM.render(<Books bookList={ listOfBooks }/>, document.getElementById('books'));