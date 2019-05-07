window.onload = function() {

    let sliders = document.querySelectorAll('#slides .container-item');
    console.log(sliders);
    let currentSlide = 0;
    const slideInterval = setInterval(nextSlide, 5000);

    function nextSlide() {
        sliders[currentSlide].className = 'container-item';
        currentSlide = (currentSlide + 1) % sliders.length;
        sliders[currentSlide].className = 'container-item show';

    }
}