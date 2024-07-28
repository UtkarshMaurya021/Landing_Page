document.addEventListener('DOMContentLoaded', function () {
    const slides = [
        {
            heading: "DISCOVERING<br/>THE WORLD.",
            paragraph: "Through travel, individuals have the opportunities to immerse themselves in different cultures and experiences.",
            background: "url('images/pexels-andreimike-1271619.jpg')" 
        },
        {
            heading: "ADVENTURE AWAITS.",
            paragraph: "Join us on an unforgettable journey to the most exciting destinations on the planet.",
            background: "url('images/pexels-pixabay-210012.jpg')"
        },
        {
            heading: "EXPLORE THE UNSEEN.",
            paragraph: "Discover hidden gems and off-the-beaten-path locations that will leave you in awe.",
            background: "url('images/pexels-quang-nguyen-vinh-222549-2131623.jpg')"
        },
        {
            heading: "NEW HORIZONS.",
            paragraph: "Experience the beauty of the world like never before with our exclusive travel packages.",
            background: "url('images/pexels-quang-nguyen-vinh-222549-2132180.jpg')" 
        }
    ];

    let currentSlide = 0;

    const headingElement = document.getElementById('main-heading');
    const paragraphElement = document.getElementById('main-paragraph');
    const chevronLeft = document.querySelector('.chev_left');
    const chevronRight = document.querySelector('.chev_right');
    const bodyElement = document.body;
    const trackerSpans = document.querySelectorAll('.button_tracker span');

    function updateSlide(index) {
        headingElement.innerHTML = slides[index].heading;
        paragraphElement.textContent = slides[index].paragraph;
        bodyElement.style.backgroundImage = slides[index].background;

        trackerSpans.forEach((span, i) => {
            span.classList.toggle('active', i === index);
        });
    }

    chevronLeft.addEventListener('click', function () {
        currentSlide = (currentSlide > 0) ? currentSlide - 1 : slides.length - 1;
        updateSlide(currentSlide);
    });

    chevronRight.addEventListener('click', function () {
        currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
        updateSlide(currentSlide);
    });

    trackerSpans.forEach((span, index) => {
        span.addEventListener('click', function () {
            currentSlide = index;
            updateSlide(currentSlide);
        });
    });

    updateSlide(currentSlide);
});
