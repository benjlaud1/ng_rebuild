// requires
var express = require( 'express' );
var app = express();
var bodyParser = require( 'body-parser' );
var routes = require( './modules/routes.js' );

// uses
app.use( bodyParser.urlencoded( { extended: true } ));
app.use( bodyParser.json() );
app.use( express.static( 'public' ) );

// globals
var port = 6789;

// spin up Server
app.listen( port, function () {
  console.log( 'server up on port ', port );
}); // end app.listen

// routes
app.use( '/', routes );
