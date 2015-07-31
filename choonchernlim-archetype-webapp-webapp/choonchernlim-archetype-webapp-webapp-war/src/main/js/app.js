'use strict';

// the only way to get Bootstrap working is to make jQuery global... couldn't get
// browserify-shim to work with Bootstrap and jQuery.
var $ = global.jQuery = require( 'jquery' );

require( 'bootstrap' );

// getting scroll-spy content to align properly on menu click
var offset = 100;
$( '#home-left-navbar' ).find( 'li a' ).click( function ( e ) {
    e.preventDefault();

    $( $( this ).attr( 'href' ) )[0].scrollIntoView();
    scrollBy( 0, -offset );
} );
