  $(document).ready(function(){
    $('.right-btn').click(function(){
      $('.slider-container').animate({scrollLeft: '+=200'}, 400);
    });
    
    $('.left-btn').click(function(){
      $('.slider-container').animate({scrollLeft: '-=200'}, 400);
    });
  });



  