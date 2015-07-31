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
            (function ( global ) {
                'use strict';

                // the only way to get Bootstrap working is to make jQuery global... couldn't get
                // browserify-shim to work with Bootstrap and jQuery.
                global.jQuery = require( 'jquery' );

                require( 'bootstrap' );
            }).call( this,
                typeof global !==
                "undefined" ?
                    global :
                    typeof self !==
                    "undefined" ?
                        self :
                        typeof window !==
                        "undefined" ?
                            window :
                        {} )
            //# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2pzL2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuLy8gdGhlIG9ubHkgd2F5IHRvIGdldCBCb290c3RyYXAgd29ya2luZyBpcyB0byBtYWtlIGpRdWVyeSBnbG9iYWwuLi4gY291bGRuJ3QgZ2V0XG4vLyBicm93c2VyaWZ5LXNoaW0gdG8gd29yayB3aXRoIEJvb3RzdHJhcCBhbmQgalF1ZXJ5LlxuZ2xvYmFsLmpRdWVyeSA9IHJlcXVpcmUoICdqcXVlcnknICk7XG5cbnJlcXVpcmUoICdib290c3RyYXAnICk7Il19
        }, {"bootstrap" : "bootstrap", "jquery" : "jquery"}
    ]
}, {}, [1] )
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9qcy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIoZnVuY3Rpb24gKGdsb2JhbCl7XG4ndXNlIHN0cmljdCc7XG5cbi8vIHRoZSBvbmx5IHdheSB0byBnZXQgQm9vdHN0cmFwIHdvcmtpbmcgaXMgdG8gbWFrZSBqUXVlcnkgZ2xvYmFsLi4uIGNvdWxkbid0IGdldFxuLy8gYnJvd3NlcmlmeS1zaGltIHRvIHdvcmsgd2l0aCBCb290c3RyYXAgYW5kIGpRdWVyeS5cbmdsb2JhbC5qUXVlcnkgPSByZXF1aXJlKCAnanF1ZXJ5JyApO1xuXG5yZXF1aXJlKCAnYm9vdHN0cmFwJyApO1xufSkuY2FsbCh0aGlzLHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30pXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldDp1dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1TDJwekwyRndjQzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pTzBGQlFVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVpTENKbWFXeGxJam9pWjJWdVpYSmhkR1ZrTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpZDFjMlVnYzNSeWFXTjBKenRjYmx4dUx5OGdkR2hsSUc5dWJIa2dkMkY1SUhSdklHZGxkQ0JDYjI5MGMzUnlZWEFnZDI5eWEybHVaeUJwY3lCMGJ5QnRZV3RsSUdwUmRXVnllU0JuYkc5aVlXd3VMaTRnWTI5MWJHUnVKM1FnWjJWMFhHNHZMeUJpY205M2MyVnlhV1o1TFhOb2FXMGdkRzhnZDI5eWF5QjNhWFJvSUVKdmIzUnpkSEpoY0NCaGJtUWdhbEYxWlhKNUxseHVaMnh2WW1Gc0xtcFJkV1Z5ZVNBOUlISmxjWFZwY21Vb0lDZHFjWFZsY25rbklDazdYRzVjYm5KbGNYVnBjbVVvSUNkaWIyOTBjM1J5WVhBbklDazdJbDE5Il19
