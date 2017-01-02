(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Books = React.createClass ({displayName: "Books",
	render : function() {
		var books = this.props.bookList;
		console.log(books);
		return (
			React.createElement("div", {className: "container-fluid"}, 
			React.createElement("div", {className: "row"}, 
				React.createElement("div", {className: "col-md-10 col-md-offset-2"}, 
					React.createElement("h1", null, " Currently Reading... ")
				)
			), 
			React.createElement("br", null), " ", React.createElement("br", null), 
			
				books.map(function(book){
					var name = book.name;
					var author = book.author;
					var date = book.date;
					var summary = book.summary;
					var image = book.image;

					return (
						React.createElement("div", {className: "row"}, 
							React.createElement("div", {className: "col-md-3"}, 
								React.createElement("img", {src: image, className: "book-image"})
							), 
							React.createElement("div", {className: "col-md-6"}, 
								React.createElement("div", {className: "row"}, 
									React.createElement("div", {id: "icon", className: "col-sm-1"}, 
										React.createElement("img", {src: "../static/css/icons/glyphicons-4-user.png"})
									), 
									React.createElement("div", {className: "col-md-4"}, 
										React.createElement("h2", null, " ", author, " ")
									)
								), 
								React.createElement("div", {className: "row"}, 
									React.createElement("div", {id: "icon", className: "col-sm-1"}, 
										React.createElement("img", {src: "../static/css/icons/glyphicons-46-calendar.png"})
									), 
									React.createElement("div", {className: "col-md-2"}, 
										React.createElement("h2", {id: "date"}, " ", date, " ")
									)
								)
							)
						) 
					)
				})
			
			)
		)
	}
});

var listOfBooks = [{"name" : "A Man Called Ove", "author" : "Fredrik Backman", "date" : "2014/07/15", "image": "../static/css/book_images/a-man-called-ove.jpg", "summary" : "A grumpy yet loveable man finds his solitary world turned on its head when a boisterous young family moves in next door. <br> <br> Meet Ove. He's a curmudgeon, the kind of man who points at people he dislikes as if they were burglars caught outside his bedroom window. He has staunch principles, strict routines, and a short fuse. People call him the bitter neighbor from hell, but must Ove be bitter just because he doesn't walk around with a smile plastered to his face all the time? <br> <br> Behind the cranky exterior there is a story and a sadness. So when one November morning a chatty young couple with two chatty young daughters move in next door and accidentally flatten Ove's mailbox, it is the lead-in to a comical and heartwarming tale of unkempt cats, unexpected friendship, and the ancient art of backing up a U-Haul. All of which will change one cranky old man and a local residents' association to their very foundations."}];
ReactDOM.render(React.createElement(Books, {bookList:  listOfBooks }), document.getElementById('books'));

},{}]},{},[1]);
