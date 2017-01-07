from flask import Flask, render_template
import os

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('hello.html')


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

@app.route('/gwc')
def gwc():
	return render_template('gwc.html')


if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)
