var express = require( 'express' );
var router = express.Router();
var path = require( 'path' );
var bodyParser = require( 'body-parser' );
var mongoose = require( 'mongoose' );

mongoose.connect( 'localhost:27017/psiInventory' );

var NameSchema = mongoose.Schema({
  firstName: String,
  lastName: String
}); // end NameSchema

var names = mongoose.model( 'names', NameSchema );

var addedObjects = [];

// router.use( bodyParser.urlencoded( { extended: true } ) )

router.get( '/', function ( req, res ) {
  // console.log( 'base URL hit in routes' );
  res.sendFile( path.resolve( 'public/views/index.html' ) );
}); // end base URL GET

router.post( '/addname', function ( req, res ) {
  console.log( 'in addname:', req.body );
  var newName = names( req.body );
  console.log(newName);
  newName.save().then( function () {
    res.sendStatus( 201 );
  }); // end save
  // addedObjects.push( req.body );
}); // end addName POST

router.get( '/getNames', function ( req, res ) {
  console.log( 'in getNames' );
  names.find().then( function ( data ) {
    res.send( data );
  }); // end names.find
}); // end getNames GET

module.exports = router;
