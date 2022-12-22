from flask import Flask, jsonify, request
import Pairing as pair

# creating a Flask app
app = Flask(__name__)

# on the terminal type: curl http://127.0.0.1:5000/
# returns hello world when we use GET.
# returns the data that we send when we use POST.


@app.route('/', methods=['GET', 'POST'])


def home():
	if request.method == 'GET':

		data = "Donor ID Push is at /Pair/"
		return jsonify({'data': data})


# A simple function to calculate the square of a number
# the number to be squared is sent in the URL when we use GET
# on the terminal type: curl http://127.0.0.1:5000 / home / 10
# this returns 100 (square of 10)

@app.route('/pair/<string:donor_id>', methods=['GET'])
def disp(donor_id):
	#thread call
	process(donor_id)
	return jsonify({'message': 'Request Acknowledged'})


def process(donor_id):
	post1 = pair.pair(donor_id)


# driver function
if __name__ == '__main__':
	app.run(debug=True)




