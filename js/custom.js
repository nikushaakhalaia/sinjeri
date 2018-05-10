// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

$(document).ready(function(){

$(document).ready(function(){
  

$('.slaideri').slick({
        // dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 12,
        slidesToScroll: 3,
        responsive: [
          {
              breakpoint: 1200,
              settings: {
                  slidesToShow: 8,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
              }
          },
          {
              breakpoint: 1028,
              settings: {
                  slidesToShow: 6,
                  slidesToScroll: 2
              }
          },

          {
              breakpoint: 60,
              settings: {
                  slidesToShow: 4,
                  slidesToScroll: 2
              }
          },

          {
              breakpoint: 426,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1
              }
          }
        ]
    });

});	



});