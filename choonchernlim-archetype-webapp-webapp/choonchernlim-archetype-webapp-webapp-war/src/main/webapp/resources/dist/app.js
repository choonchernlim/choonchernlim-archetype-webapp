(function e( t, n, r ) {
    function s( o, u ) {
        if ( !n[o] ) {
            if ( !t[o] ) {
                var a = typeof require == "function" && require;
                if ( !u && a )return a( o, !0 );
                if ( i )return i( o, !0 );
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
    for ( var o = 0; o < r.length; o++ )s( r[o] );
    return s
})( {
    1 : [
        function ( require, module, exports ) {
            (function ( global ) {
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
            //# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2pzL2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG4vLyB0aGUgb25seSB3YXkgdG8gZ2V0IEJvb3RzdHJhcCB3b3JraW5nIGlzIHRvIG1ha2UgalF1ZXJ5IGdsb2JhbC4uLiBjb3VsZG4ndCBnZXRcbi8vIGJyb3dzZXJpZnktc2hpbSB0byB3b3JrIHdpdGggQm9vdHN0cmFwIGFuZCBqUXVlcnkuXG52YXIgJCA9IGdsb2JhbC5qUXVlcnkgPSByZXF1aXJlKCAnanF1ZXJ5JyApO1xuXG5yZXF1aXJlKCAnYm9vdHN0cmFwJyApO1xuXG4vLyBnZXR0aW5nIHNjcm9sbC1zcHkgY29udGVudCB0byBhbGlnbiBwcm9wZXJseSBvbiBtZW51IGNsaWNrXG52YXIgb2Zmc2V0ID0gMTAwO1xuJCggJyNob21lLWxlZnQtbmF2YmFyJyApLmZpbmQoICdsaSBhJyApLmNsaWNrKCBmdW5jdGlvbiAoIGUgKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgJCggJCggdGhpcyApLmF0dHIoICdocmVmJyApIClbMF0uc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICBzY3JvbGxCeSggMCwgLW9mZnNldCApO1xufSApO1xuIl19
        }, {"bootstrap" : "bootstrap", "jquery" : "jquery"}
    ]
}, {}, [1] )
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9qcy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIihmdW5jdGlvbiAoZ2xvYmFsKXtcbid1c2Ugc3RyaWN0JztcblxuLy8gdGhlIG9ubHkgd2F5IHRvIGdldCBCb290c3RyYXAgd29ya2luZyBpcyB0byBtYWtlIGpRdWVyeSBnbG9iYWwuLi4gY291bGRuJ3QgZ2V0XG4vLyBicm93c2VyaWZ5LXNoaW0gdG8gd29yayB3aXRoIEJvb3RzdHJhcCBhbmQgalF1ZXJ5LlxudmFyICQgPSBnbG9iYWwualF1ZXJ5ID0gcmVxdWlyZSggJ2pxdWVyeScgKTtcblxucmVxdWlyZSggJ2Jvb3RzdHJhcCcgKTtcblxuLy8gZ2V0dGluZyBzY3JvbGwtc3B5IGNvbnRlbnQgdG8gYWxpZ24gcHJvcGVybHkgb24gbWVudSBjbGlja1xudmFyIG9mZnNldCA9IDEwMDtcbiQoICcjaG9tZS1sZWZ0LW5hdmJhcicgKS5maW5kKCAnbGkgYScgKS5jbGljayggZnVuY3Rpb24gKCBlICkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICQoICQoIHRoaXMgKS5hdHRyKCAnaHJlZicgKSApWzBdLnNjcm9sbEludG9WaWV3KCk7XG4gICAgc2Nyb2xsQnkoIDAsIC1vZmZzZXQgKTtcbn0gKTtcblxufSkuY2FsbCh0aGlzLHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30pXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldDp1dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1TDJwekwyRndjQzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pTzBGQlFVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTSXNJbVpwYkdVaU9pSm5aVzVsY21GMFpXUXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpSjNWelpTQnpkSEpwWTNRbk8xeHVYRzR2THlCMGFHVWdiMjVzZVNCM1lYa2dkRzhnWjJWMElFSnZiM1J6ZEhKaGNDQjNiM0pyYVc1bklHbHpJSFJ2SUcxaGEyVWdhbEYxWlhKNUlHZHNiMkpoYkM0dUxpQmpiM1ZzWkc0bmRDQm5aWFJjYmk4dklHSnliM2R6WlhKcFpua3RjMmhwYlNCMGJ5QjNiM0pySUhkcGRHZ2dRbTl2ZEhOMGNtRndJR0Z1WkNCcVVYVmxjbmt1WEc1MllYSWdKQ0E5SUdkc2IySmhiQzVxVVhWbGNua2dQU0J5WlhGMWFYSmxLQ0FuYW5GMVpYSjVKeUFwTzF4dVhHNXlaWEYxYVhKbEtDQW5ZbTl2ZEhOMGNtRndKeUFwTzF4dVhHNHZMeUJuWlhSMGFXNW5JSE5qY205c2JDMXpjSGtnWTI5dWRHVnVkQ0IwYnlCaGJHbG5iaUJ3Y205d1pYSnNlU0J2YmlCdFpXNTFJR05zYVdOclhHNTJZWElnYjJabWMyVjBJRDBnTVRBd08xeHVKQ2dnSnlOb2IyMWxMV3hsWm5RdGJtRjJZbUZ5SnlBcExtWnBibVFvSUNkc2FTQmhKeUFwTG1Oc2FXTnJLQ0JtZFc1amRHbHZiaUFvSUdVZ0tTQjdYRzRnSUNBZ1pTNXdjbVYyWlc1MFJHVm1ZWFZzZENncE8xeHVYRzRnSUNBZ0pDZ2dKQ2dnZEdocGN5QXBMbUYwZEhJb0lDZG9jbVZtSnlBcElDbGJNRjB1YzJOeWIyeHNTVzUwYjFacFpYY29LVHRjYmlBZ0lDQnpZM0p2Ykd4Q2VTZ2dNQ3dnTFc5bVpuTmxkQ0FwTzF4dWZTQXBPMXh1SWwxOSJdfQ==
