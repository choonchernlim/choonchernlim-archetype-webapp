(function e( t, n, r ) {
    function s( o, u ) {
        if ( !n[o] ) {
            if ( !t[o] ) {
                var a = typeof require == "function" && require;
                if ( !u && a ) {
                    return a( o, !0 );
                }
                if ( i ) {
                    return i( o, !0 );
                }
                var f = new Error( "Cannot find module '" + o + "'" );
                throw f.code = "MODULE_NOT_FOUND", f
            }
            var l = n[o] = {exports : {}};
            t[o][0].call( l.exports, function ( e ) {
                var n = t[o][1][e];
                return s( n ? n : e )
            }, l, l.exports, e, t, n, r )
        }
        return n[o].exports
    }

    var i = typeof require == "function" && require;
    for ( var o = 0; o < r.length; o++ ) {
        s( r[o] );
    }
    return s
})( {
    1 : [
        function ( require, module, exports ) {
            'use strict';

            var $ = require( 'jquery' );
            var _ = require( 'lodash' );
            var moment = require( 'moment' );
            var Promise = require( 'bluebird' );

            $( function () {
                var $body = $( 'body' );

                $body.append( '<h1>Testing jQuery, LoDash, Moment</h1>' );
                $body.append( '<p>Moment: ' + moment().format() + '</p>' );

                $body.append( '<p>' + Promise + '</p>' );

                _.each( [1, 2], function ( num ) {
                    $body.append( '<p>LoDash: ' + num + '</p>' );
                } );
            } );

        }, {"bluebird" : "bluebird", "jquery" : "jquery", "lodash" : "lodash", "moment" : "moment"}
    ]
}, {}, [1] );
