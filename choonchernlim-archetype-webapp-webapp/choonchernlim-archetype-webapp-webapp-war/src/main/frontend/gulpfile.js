/**
 * Breaks Gulp tasks into different files.
 */

'use strict';

var requireDir = require( 'require-dir' );

requireDir( './gulp/tasks', {recurse : true} );

