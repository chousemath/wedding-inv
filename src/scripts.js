document.addEventListener('DOMContentLoaded', function(){
    new Splide('.splide', {
        type: 'loop',
        pagination: false,
    }).mount();

    const c = document.createElement('canvas');
    const ctx = c.getContext('2d');
    const w = window.innerWidth;
	const h = window.innerHeight;
    c.width = w;
    c.height = h;
    document.body.appendChild(c);
});
