// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

$(function(){
  $('.selectpicker').selectpicker({});
  
  $(document).on('change','.dropdown-menu inner',function(e){
    var img = $('selectpicker option:selected').attr('data-xxx');
    alert(img);
  });
});
