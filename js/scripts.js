"use strict";

document.addEventListener('DOMContentLoaded', function () {
  new Splide('.splide', {
    type: 'loop',
    pagination: false
  }).mount();
  var c = document.createElement('canvas');
  var ctx = c.getContext('2d');
  var w = window.innerWidth;
  var h = window.innerHeight;
  c.width = w;
  c.height = h;
  document.body.appendChild(c);
  setTimeout(function () {
    window.scrollTo(0, document.body.scrollHeight);
    document.body.style.overflowY = 'hidden';
    console.log('done');
  }, 100);
});