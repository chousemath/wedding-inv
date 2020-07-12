"use strict";

document.addEventListener('DOMContentLoaded', function () {
  new Splide('.splide', {
    type: 'loop',
    pagination: false,
    height: '100vh'
  }).mount();
  var c = document.createElement('canvas');
  var ctx = c.getContext('2d');
  var w = window.innerWidth;
  var h = window.innerHeight;
  c.width = w;
  c.height = h;
  document.body.appendChild(c);
  setTimeout(function () {
    //window.scrollTo(0, document.body.scrollHeight);
    window.scrollTo(0, 1); //document.body.style.overflow = 'hidden';

    alert('done');
  }, 1000);
});