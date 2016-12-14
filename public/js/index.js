
 $(function(){
   console.log('Load');
    $(".button-collapse").sideNav();
    Materialize.updateTextFields();

    $('.images').on('init', function(event, slick){
        console.log(slick);
        $('#projectDetail').html("Play Rock, Paper, Scissors");
        
    });

    $('.images').slick({
      dots:true
    
    });

    $('.images').on('afterChange', function(event, slick, currentSlide){
      console.log(currentSlide);
      if (currentSlide === 0){
        $('#projectDetail').html("Play Rock, Paper, Scissors");
      } else if (currentSlide === 1){
        $('#projectDetail').html("My individual project");
      } else if (currentSlide === 2){
        $('#projectDetail').html("WeConverge: a website to encourage women to get into tech");
      }
    });

    $('#projectRPS').click(function (){
      window.open("https://github.com/lcostello/rockpaperscissors", '_blank');
    });

    // $('').click(function(){
    //   window.open("", '_blank');
    // });

    $('#projectWC').click(function (){
      window.open("http://annebyrne.github.io/CFG-Project/index.html", '_blank');
    });
 });


