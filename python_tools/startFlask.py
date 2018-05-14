from flask import Flask
from flask_cors import CORS, cross_origin
import json
from scrapeOT import scrapeOT

app = Flask(__name__)
CORS(app, support_credentials=True)

@app.route("/<path:rest_id>")
def handler(rest_id):
	print "got request for " + rest_id
	rest = scrapeOT("http://www.opentable.com/" + rest_id)
	return json.dumps(rest)