'use strict';

// the only way to get Bootstrap working is to make jQuery global... couldn't get
// browserify-shim to work with Bootstrap and jQuery.
global.jQuery = require( 'jquery' );

require( 'bootstrap' );