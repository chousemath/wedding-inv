function initMap() {
    const apelgamo = {lat: 37.574825, lng: 126.979138};
    const mapGoogle = new google.maps.Map(document.getElementById('map-google'), {center: apelgamo, zoom: 16});
    const markerGoogle = new google.maps.Marker({position: apelgamo, map: mapGoogle});
}

const handleResize = () => {
    const isPortrait = getOrientation() === 'portrait';
    dark.style.display = isPortrait ? 'none' : 'flex';
    //setTimeout(() => {
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

const copyAddress = () => {
    const copyText = document.getElementById('myInput');
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand('copy');
    showCopyMessage();
}

const getOrientation = () => window.innerWidth > window.innerHeight ? 'landscape' : 'portrait';

window.onresize = function(){ handleResize() }

handleResize();

const mapShow = (id) => {
    document.getElementById(id).style.zIndex = 15;
    for (let x of document.getElementsByClassName('section-map-box-internal')) {
        if (x.id !== id) x.style.zIndex = 1;
    }
};

let canHideWarning = false;
const imWarning = document.getElementById('im-warning');
const imWarningLoaded = () => {
    const x = document.getElementById('dark2');
    x.style.opacity = 0;
    x.style.display = 'flex';
    $('#dark2').animate({opacity: 1}, 800);
    setTimeout(() => canHideWarning = true, 800);
}
if (imWarning.complete) {
    imWarningLoaded();
} else {
    imWarning.addEventListener('load', imWarningLoaded)
    imWarning.addEventListener('error', function() {
        console.log('error loading warning image');
    });
}
const hideWarning = () => {
    if (!canHideWarning) return;
    $('#dark2').animate({opacity: 0}, 500);
    setTimeout(() => document.getElementById('dark2').style.display = 'none', 500);
}
const showGallery = () => {};
const showCopyMessage = () => {
    const x = document.getElementById('dark3');
    x.style.opacity = 0;
    x.style.display = 'flex';
    $('#dark3').animate({opacity: 1}, 300);
    setTimeout(() => {
        $('#dark3').animate({opacity: 0}, 1000);
        setTimeout(() => document.getElementById('dark3').style.display = 'none', 1000);
    }, 800);
}
const hideGallery = () => {
}

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
        nextArrow: false
        //adaptiveHeight: true
    });

    const sectionMapBox = document.getElementById('section-map-box');
    const mapBox = sectionMapBox.getBoundingClientRect();
    const mapContainerKakao = document.getElementById('map-kakao');
    const options = {
    	center: new kakao.maps.LatLng(37.574825, 126.979138),
    	level: 3
    };
    const mapKakao = new kakao.maps.Map(mapContainerKakao, options);
    mapContainerKakao.style.width = mapBox.width;
    mapContainerKakao.style.height = mapBox.height;

    const markerPosKakao  = new kakao.maps.LatLng(37.574825, 126.979138);
    const markerKakao = new kakao.maps.Marker({position: markerPosKakao});
    markerKakao.setMap(mapKakao);

    const naverMapOptions = {center: new naver.maps.LatLng(37.574825, 126.979138), zoom: 16};
    const mapNaver = new naver.maps.Map('map-naver', naverMapOptions);
    const markerNaver = new naver.maps.Marker({
        position: new naver.maps.LatLng(37.574825, 126.979138),
        map: mapNaver
    });

    const mapTmap = new Tmapv2.Map('map-tmap', {
        center: new Tmapv2.LatLng(37.574825, 126.979138), // 지도 초기 좌표
        width: `${mapBox.width}px`,
        height: `${mapBox.height}px`,
        zoom: 16
    });
    const marker = new Tmapv2.Marker({position: new Tmapv2.LatLng(37.574825, 126.979138), map: mapTmap});
});


