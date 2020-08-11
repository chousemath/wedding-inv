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
        variableHeight: true,
    });
    const mapBox = document.getElementById('section-map-box').getBoundingClientRect();
    for (let x of document.getElementsByClassName('map')) {
        x.height = mapBox.height.toString();
    }
});
function copyAddress() {
  const copyText = document.getElementById('myInput');
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand('copy');
}
