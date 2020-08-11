"use strict";

//const coverCanvas = document.getElementById('cover-canvas');
//const ctxCover = coverCanvas.getContext('2d');
//
//ctxCover.beginPath();
//// context.arc(x,y,r,sAngle,eAngle,counterclockwise);
//ctxCover.arc(2,1,1,0,2*Math.PI);
//ctxCover.stroke();
//ctxCover.fillStyle = 'red';
//ctxCover.fill();
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
  new daum.roughmap.Lander({
    'timestamp': '1597127240358',
    'key': '2zmnf',
    'mapWidth': mapBox.width.toString(),
    'mapHeight': mapBox.height.toString()
  }).render();
});

function copyAddress() {
  var copyText = document.getElementById('myInput');
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand('copy');
}