let posit = 0;

export function autoSlider () {
    let time;
    time = setTimeout (function() {
        const sliderLine = document.querySelector('.sliderL');
        posit = posit + 100;
        if (posit > 1200) {
            posit = 0;
            clearTimeout(time);
        }
        sliderLine.style.left = -posit + 'px';
        autoSlider();
    }, 1000);
}
