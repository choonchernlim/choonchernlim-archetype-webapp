!function r( e, n, o ) {
    function t( i, a ) {
        if ( !n[i] ) {
            if ( !e[i] ) {
                var p = "function" == typeof require && require;
                if ( !a && p ) {
                    return p( i, !0 );
                }
                if ( u ) {
                    return u( i, !0 );
                }
                var f = new Error( "Cannot find module '" + i + "'" );
                throw f.code = "MODULE_NOT_FOUND", f
            }
            var d = n[i] = {exports : {}};
            e[i][0].call( d.exports, function ( r ) {
                var n = e[i][1][r];
                return t( n ? n : r )
            }, d, d.exports, r, e, n, o )
        }
        return n[i].exports
    }

    for ( var u = "function" == typeof require && require, i = 0; i < o.length; i++ ) {
        t( o[i] );
    }
    return t
}( {
    1 : [
        function ( r, e, n ) {
            "use strict";
            var o = r( "jquery" ), t = r( "lodash" ), u = r( "moment" ), i = r( "bluebird" );
            o( function () {
                var r = o( "body" );
                r.append( "<h1>Testing jQuery, LoDash, Moment</h1>" ), r.append( "<p>Moment: " +
                                                                                 u().format() +
                                                                                 "</p>" ), r.append( "<p>" +
                                                                                                     i +
                                                                                                     "</p>" ), t.each( [
                    1,
                    2
                ],
                    function ( e ) {
                        r.append( "<p>LoDash: " + e + "</p>" )
                    } )
            } )
        }, {bluebird : "bluebird", jquery : "jquery", lodash : "lodash", moment : "moment"}
    ]
}, {}, [1] );