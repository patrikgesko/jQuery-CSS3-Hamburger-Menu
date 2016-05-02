$(function(){

  menuToggle();

});

function menuToggle(){
  $('.menu-plate').on('click', function(e){
    e.stopPropagation();
  });

  $('.close-button, .open-button, .menu-overlay').on('click', function(){
    $('html').toggleClass('menu-open');
  });
}

