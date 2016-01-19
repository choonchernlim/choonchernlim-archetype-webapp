'use strict';

// the only way to get Bootstrap working is to make jQuery global... couldn't get
// browserify-shim to work with Bootstrap and jQuery.
import $ from 'jquery';
global.jQuery = $;

import 'bootstrap';

// getting scroll-spy content to align properly on menu click
const offset = 100;
$( '#home-left-navbar' ).find( 'li a' ).click( function ( e ) {
    const $a = $( this );
    const $li = $( this ).parent();

    e.preventDefault();

    $( $a.attr( 'href' ) )[0].scrollIntoView();
    scrollBy( 0, -offset );

    $a.blur();

    $li.addClass( 'active' ).siblings().removeClass( 'active' );
} );