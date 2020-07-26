"use strict";

var coverCanvas = document.getElementById('cover-canvas');
var ctxCover = coverCanvas.getContext('2d');
ctxCover.beginPath();
ctxCover.arc(20, 1, 10, 0, 2 * Math.PI);
ctxCover.stroke();
ctxCover.fillStyle = '#fffaf3';
ctxCover.fill();