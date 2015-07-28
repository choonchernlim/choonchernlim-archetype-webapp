/**
 * Breaks Gulp tasks into different files.
 *
 * @type {*|exports|module.exports}
 */

var requireDir = require( 'require-dir' );

requireDir( './gulp-tasks', {recurse : true} );

