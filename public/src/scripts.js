const handleResize = () => {
    console.log('go');
    dark.style.display = getOrientation() === 'portrait' ? 'none' : 'flex';
};

const copyAddress = () => {
  const copyText = document.getElementById('myInput');
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand('copy');
}

const getOrientation = () => window.innerWidth > window.innerHeight ? 'landscape' : 'portrait';

window.onresize = function(){ handleResize() }

handleResize();

$(document).ready(function () {
    window.scrollTo(1, 0);
    $('.your-class').slick({
        infinite: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        lazyLoad: 'ondemand',
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        variableHeight: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next')
    });
    const mapBox = document.getElementById('section-map-box').getBoundingClientRect();
    for (let x of document.getElementsByClassName('map')) {
        x.height = mapBox.height.toString();
    }
});


