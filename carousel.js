
// const next = document.getElementById('next-btn')
// const back = document.getElementById('back-btn')



// let index = 0 
// next.addEventListener('click', function(event) {
//     event.preventDefault()
//     index ++
// })

// function imageCarousel(n){

// }
// if (index > carousel.length) { index = 0}
// if (index < carousel.length) {index = carousel.length}


// for (index = 0; index < carousel.length; index++){
//     carousel[index].style.display = 'block';
// }
let slidePosition = 1;
CarouselShow(slidePosition);

// forward/Back controls
function plusSlides(n) {
CarouselShow(slidePosition += n);
}

//  images controls
function currentSlide(n) {
CarouselShow(slidePosition = n);
}

function CarouselShow(n) {
    let i;
    const carousel = document.getElementsByClassName('carousel-item')
    var circles = document.getElementsByClassName("dots");
    if (n > carousel.length) {slidePosition = 1}
    if (n < 1) {slidePosition = carousel.length}
    for (i = 0; i < carousel.length; i++) {
        carousel[i].style.display = "none";
    }
    for (i = 0; i < circles.length; i++) {
        circles[i].className = circles[i].className.replace(" enable", "");
    }
    carousel[slidePosition-1].style.display = "block";
    circles[slidePosition-1].className += " enable";
  } 


const forward = document.getElementById('forward')
forward.addEventListener('click', function(event){
    event.preventDefault()
    plusSlides(1)
})

const back = document.getElementById('Back')
back.addEventListener('click', function(event){
    event.preventDefault()
    plusSlides(-1)
})