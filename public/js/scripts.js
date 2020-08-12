"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var handleResize = function handleResize() {
  console.log('go');
  dark.style.display = getOrientation() === 'portrait' ? 'none' : 'flex';
};

var copyAddress = function copyAddress() {
  var copyText = document.getElementById('myInput');
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand('copy');
};

var getOrientation = function getOrientation() {
  return window.innerWidth > window.innerHeight ? 'landscape' : 'portrait';
};

window.onresize = function () {
  handleResize();
};

handleResize();
$(document).ready(function () {
  window.scrollTo(1, 0);
  $('.your-class').slick({
    infinite: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    centerMode: true,
    prevArrow: false,
    nextArrow: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    variableHeight: true
  });
  var mapBox = document.getElementById('section-map-box').getBoundingClientRect();

  var _iterator = _createForOfIteratorHelper(document.getElementsByClassName('map')),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var x = _step.value;
      x.height = mapBox.height.toString();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
});