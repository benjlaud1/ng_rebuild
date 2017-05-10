var express = require( 'express' );
var router = express.Router();
var path = require( 'path' );
var bodyParser = require( 'body-parser' );

var addedObjects = [];

router.get( '/', function ( req, res ) {
  // console.log( 'base URL hit in routes' );
  res.sendFile( path.resolve( 'public/views/index.html' ) );
}); // end base URL GET

router.post( '/addname', function ( req, res ) {
  console.log( 'in addname:', req.body );
  addedObjects.push( req.body );
  res.send( addedObjects );
}); // end addName POST

module.exports = router;
