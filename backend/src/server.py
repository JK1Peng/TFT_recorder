from flask import Flask, jsonify, request, send_from_directory
from pymongo.mongo_client import MongoClient
from dotenv import load_dotenv
from flask_cors import CORS
from function import Function
from pymongo.errors import PyMongoError
import os

load_dotenv()
function = Function()

app = Flask(__name__, static_folder='../../frontend', static_url_path='')
CORS(app)


uri = os.getenv("mongodb_link")

mongo_client = MongoClient(uri)

try:
    mongo_client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)

DATABASE_NAME = 'Data_Collection'
COLLECTION_NAME = 'test_db'
db = mongo_client[DATABASE_NAME]


@app.route('/')
def login():
    return send_from_directory(app.static_folder, 'login.html')


@app.route('/submit', methods=['POST'])
def submit_data():
    data = request.json  
    try:
        transformed_data = function.transform_data(data)
        result = db['test_db'].insert_one(transformed_data)
        return jsonify(message="Data submitted successfully", id=str(result.inserted_id)), 201
    except PyMongoError as e:
        print(f"Error submitting data: {e}")
        return jsonify(message="Data submission failed", error=str(e)), 500

@app.route('/login', methods=['POST'])
def login_submit():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    user = db.account.find_one({'username': username, 'password': password})

    if user:
        return jsonify({'success': True, 'message': 'Login successful', 'user': {'username': user['username']}}), 200
    else:
        return jsonify({'success': False, 'message': 'Invalid username or password'}), 401    


if __name__ == '__main__':
    app.run(debug=True)

