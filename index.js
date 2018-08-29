const express = require('express');
const app = express();
const path = require('path');
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname, 'home.html'));
});

app.get('/', (req, res) => {
	MongoClient.connect(url, function(err, client) {
		const db = client.db('exercises');
		const collection = db.collection('superheroes');

		collection.find({}).toArray((error, documents) => {
			client.close();
			res.render('index', { documents: documents });
		});
	});
});

app.listen(3000, function () {
    console.log('listening on port 3000');
});

app.get('/', function (request, response) {
    response.send('Hello node.js world');
});

