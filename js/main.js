
// share modal window

var modal = document.getElementById('share-modal');
var btn = document.getElementById('share-btn');
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// video news

  var modal2 = document.getElementById('video-news');
  var btn1 = document.getElementById('video-news-link1');
  var btn2 = document.getElementById('video-news-link2');
  var btn3 = document.getElementById('video-news-link3');
  var btn4 = document.getElementById('video-news-link4');
  var span2 = document.getElementsByClassName("close-vid")[0];
  var link = document.getElementById("vid-news-img");
  var link2 = document.getElementById("vid-news-img2");
  var link3 = document.getElementById("vid-news-img3");
  var link4 = document.getElementById("vid-news-img4");
  btn1.onclick = function(){
      modal2.style.display = "block";
      link.style.filter = "blur(10px)";
  }
  btn2.onclick = function(){
      modal2.style.display = "block";
      link2.style.filter = "blur(10px)";
  }
  btn3.onclick = function(){
      modal2.style.display = "block";
      link3.style.filter = "blur(10px)";
  }
  btn4.onclick = function(){
      modal2.style.display = "block";
      link4.style.filter = "blur(10px)";
  }
  span2.onclick = function(){
      modal2.style.display = "none";
      link.style.filter = "";
      link2.style.filter = "";
      link3.style.filter = "";
      link4.style.filter = "";
  }

// slider

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

// dropdown menu

function dropdownFunc() {
    document.getElementById("dropdown-menu").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.dropdown-btn')) {
    var dropdowns = document.getElementsByClassName("dropdown-menu");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// gallery modal

function openGalleryModal() {
  document.getElementById('gallery-modal').style.display = "block";
}

function closeGalleryModal() {
  document.getElementById('gallery-modal').style.display = "none";
}

var gallerySlideIndex = 1;
showGallerySlides(gallerySlideIndex);

function plusGallerySlides(n) {
  showGallerySlides(gallerySlideIndex += n);
}

function currentGallerySlide(n) {
  showGallerySlides(gallerySlideIndex = n);
}

function showGallerySlides(n) {
  var i;
  var slides2 = document.getElementsByClassName("gallery-slides");
  var dots2 = document.getElementsByClassName("gallery-demo");
  if (n > slides2.length) {gallerySlideIndex = 1}
  if (n < 1) {gallerySlideIndex = slides2.length}
  for (i = 0; i < slides2.length; i++) {
    slides2[i].style.display = "none";
  }
  for (i = 0; i < dots2.length; i++) {
    dots2[i].className = dots2[i].className.replace(" active2", "");
  }
  slides2[gallerySlideIndex-1].style.display = "block";
  dots2[gallerySlideIndex-1].className += " active2";
}