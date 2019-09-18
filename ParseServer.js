var express = require('express');
var ParseServer = require('parse-server').ParseServer;
var app = express();var api = new ParseServer({
  databaseURI: process.env.DATABASE_URI, // Connection string for your MongoDB database
  appId: process.env.APP_ID,
  masterKey: process.env.MASTER_KEY,
  serverURL: process.env.SERVER_URL,
});// Serve the Parse API on the /parse URL prefix

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8888');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use('/parse', api);app.listen(process.env.PORT || 5000, function() {
  console.log('parse-server-example running on port ' + process.env.PORT);
});