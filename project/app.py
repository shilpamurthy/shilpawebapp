from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/hello')
def hello():
    return render_template('hello.html')

@app.route('/places')
def places():
	return render_template('places.html')

@app.route('/dance')
def dance():
	return render_template('dance.html')

@app.route('/books')
def books():
	return render_template('books.html')


if __name__ == '__main__':
    app.run(debug=True)
