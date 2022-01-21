// Our Service
const serviceMenu = document.querySelector('.our-service-menu');
const serviceDescription = document.querySelectorAll('.our-servise-description');

serviceMenu.addEventListener('click', function(event) {
    const serviceMenuTarget = event.target;

    serviceMenuTarget.closest('ul').querySelector('.service-items-active').classList.remove('service-items-active');
    serviceMenuTarget.classList.add('service-items-active');

    serviceDescription.forEach((item) => {
        item.classList.remove('services-description-active');
        if (item.id === serviceMenuTarget.dataset.clickService) {
            item.classList.add('services-description-active')
        }
    })
})

// Amazing Work
const amazingList = document.querySelector('.amazing-work-list');
const amazingImage = document.querySelectorAll('.amazing-work-img');
const loadMore = document.querySelector('.load-more-btn');

amazingList.addEventListener('click', function(event) {
    const amazingItemTarget = event.target;

    amazingItemTarget.closest('ul').querySelector('.amazing-work-item-active').classList.remove('amazing-work-item-active');
    amazingItemTarget.classList.add('amazing-work-item-active');
    if (amazingItemTarget.dataset.workFilter === 'All') {
        amazingImage.forEach((item) => {
            item.classList.remove('amazing-img-hidden');
            loadMore.remove();
        })
    } else {
        amazingImage.forEach((item) => {
            item.classList.add('amazing-img-hidden');
            if (item.dataset.filter === amazingItemTarget.dataset.workFilter) {
                item.classList.remove('amazing-img-hidden');
            }
        })
    }
})

loadMore.addEventListener('click', function(event) {
    amazingImage.forEach((item) => {
        if (item.classList.contains('amazing-img-hidden')) {
            item.classList.remove('amazing-img-hidden');
        }

    })
    loadMore.remove();
})

// What People Say About theHam
$(document).ready(function() {
    $('.slider-person-info').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 3000,
        easing: 'linear',
        arrows: false,
        asNavFor: ".people-slider",
        infinite: false
    })
    $('.people-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 3000,
        easing: 'linear',
        arrows: true,
        asNavFor: ".slider-person-info",
        focusOnSelect: true,
        infinite: false
    });
});