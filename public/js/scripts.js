"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function initMap() {
  var apelgamo = {
    lat: 37.574825,
    lng: 126.979138
  };
  var mapGoogle = new google.maps.Map(document.getElementById('map-google'), {
    center: apelgamo,
    zoom: 16
  });
  var markerGoogle = new google.maps.Marker({
    position: apelgamo,
    map: mapGoogle
  });
}

var handleResize = function handleResize() {
  var isPortrait = getOrientation() === 'portrait';
  dark.style.display = isPortrait ? 'none' : 'flex'; //setTimeout(() => {
  //    console.log(window.innerWidth, window.innerHeight);
  //    const cont = document.getElementById('detailed-image-container');
  //    cont.style.width = `${window.innerWidth}px`;
  //    cont.style.height = `${window.innerHeight}px`;
  //    for(let x of cont.getElementsByClassName('slick-list')) {
  //        cont.style.height = `${window.innerHeight}px`;
  //    }
  //    for(let x of cont.getElementsByClassName('slick-track')) {
  //        cont.style.height = `${window.innerHeight}px`;
  //    }
  //    for (let x of document.getElementsByClassName('detail-image')) {
  //        if (isPortrait) {
  //            //x.style.maxHeight = null;
  //            x.style.width = `${window.innerWidth}px`;
  //            x.style.height = null;
  //        } else {
  //            //x.style.maxHeight = '100vw';
  //            x.style.height = `${window.innerHeight*0.5}px`;
  //            x.style.width = null
  //            //x.style.width = 'auto';
  //        }
  //    }
  //}, 100);
};

var copyAddress = function copyAddress() {
  var copyText = document.getElementById('myInput');
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand('copy');
  showCopyMessage();
};

var getOrientation = function getOrientation() {
  return window.innerWidth > window.innerHeight ? 'landscape' : 'portrait';
};

window.onresize = function () {
  handleResize();
};

handleResize();

var mapShow = function mapShow(id) {
  document.getElementById(id).style.zIndex = 15;

  var _iterator = _createForOfIteratorHelper(document.getElementsByClassName('section-map-box-internal')),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var x = _step.value;
      if (x.id !== id) x.style.zIndex = 1;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};

var canHideWarning = false;
var imWarning = document.getElementById('im-warning');

var imWarningLoaded = function imWarningLoaded() {
  var x = document.getElementById('dark2');
  x.style.opacity = 0;
  x.style.display = 'flex';
  $('#dark2').animate({
    opacity: 1
  }, 800);
  setTimeout(function () {
    return canHideWarning = true;
  }, 800);
};

if (imWarning.complete) {
  imWarningLoaded();
} else {
  imWarning.addEventListener('load', imWarningLoaded);
  imWarning.addEventListener('error', function () {
    console.log('error loading warning image');
  });
}

var hideWarning = function hideWarning() {
  if (!canHideWarning) return;
  $('#dark2').animate({
    opacity: 0
  }, 500);
  setTimeout(function () {
    return document.getElementById('dark2').style.display = 'none';
  }, 500);
};

var showGallery = function showGallery() {};

var showCopyMessage = function showCopyMessage() {
  var x = document.getElementById('dark3');
  x.style.opacity = 0;
  x.style.display = 'flex';
  $('#dark3').animate({
    opacity: 1
  }, 300);
  setTimeout(function () {
    $('#dark3').animate({
      opacity: 0
    }, 1000);
    setTimeout(function () {
      return document.getElementById('dark3').style.display = 'none';
    }, 1000);
  }, 800);
};

var hideGallery = function hideGallery() {};

$(document).ready(function () {
  window.scrollTo(1, 0);
  $('.your-class').slick({
    infinite: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 6000,
    centerMode: true,
    lazyLoad: 'ondemand',
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    variableHeight: true,
    prevArrow: $('.prev'),
    nextArrow: $('.next')
  });
  $('#detailed-image-container').slick({
    infinite: true,
    dots: false,
    autoplay: false,
    centerMode: true,
    lazyLoad: 'ondemand',
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    variableHeight: true,
    prevArrow: false,
    nextArrow: false //adaptiveHeight: true

  });
  var sectionMapBox = document.getElementById('section-map-box');
  var mapBox = sectionMapBox.getBoundingClientRect();
  var mapContainerKakao = document.getElementById('map-kakao');
  var options = {
    center: new kakao.maps.LatLng(37.574825, 126.979138),
    level: 3
  };
  var mapKakao = new kakao.maps.Map(mapContainerKakao, options);
  mapContainerKakao.style.width = mapBox.width;
  mapContainerKakao.style.height = mapBox.height;
  var markerPosKakao = new kakao.maps.LatLng(37.574825, 126.979138);
  var markerKakao = new kakao.maps.Marker({
    position: markerPosKakao
  });
  markerKakao.setMap(mapKakao);
  var naverMapOptions = {
    center: new naver.maps.LatLng(37.574825, 126.979138),
    zoom: 16
  };
  var mapNaver = new naver.maps.Map('map-naver', naverMapOptions);
  var markerNaver = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.574825, 126.979138),
    map: mapNaver
  });
  var mapTmap = new Tmapv2.Map('map-tmap', {
    center: new Tmapv2.LatLng(37.574825, 126.979138),
    // 지도 초기 좌표
    width: "".concat(mapBox.width, "px"),
    height: "".concat(mapBox.height, "px"),
    zoom: 16
  });
  var marker = new Tmapv2.Marker({
    position: new Tmapv2.LatLng(37.574825, 126.979138),
    map: mapTmap
  });
});