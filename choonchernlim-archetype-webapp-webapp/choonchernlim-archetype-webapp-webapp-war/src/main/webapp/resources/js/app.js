(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

// the only way to get Bootstrap working is to make jQuery global... couldn't get
// browserify-shim to work with Bootstrap and jQuery.

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _bootstrap = require('bootstrap');

var _bootstrap2 = _interopRequireDefault(_bootstrap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

global.jQuery = _jquery2.default;

// getting scroll-spy content to align properly on menu click
var offset = 100;
(0, _jquery2.default)('#home-left-navbar').find('li a').click(function (e) {
    var $a = (0, _jquery2.default)(this);
    var $li = (0, _jquery2.default)(this).parent();

    e.preventDefault();

    (0, _jquery2.default)($a.attr('href'))[0].scrollIntoView();
    scrollBy(0, -offset);

    $a.blur();

    $li.addClass('active').siblings().removeClass('active');
});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"bootstrap":"bootstrap","jquery":"jquery"}]},{},[1]);
