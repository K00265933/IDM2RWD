// CAROUSEL READ MORE BUTTONS

function readFirstArticle() {
  const cardOneButton = '../html/20221120-how-to-write-a-poem.html';
  window.open(cardOneButton);
}

function readSecondArticle(){
  const cardTwoButton = '../html/20221126-event.html';
  window.open(cardTwoButton);
}

function readThirdArticle(){
  const cardThreeButton = '../html/20221129-writing-tips.html';
  window.open(cardThreeButton);
}

const articleOneBtn = document.getElementById('firstArticle');
const articleTwoBtn = document.getElementById('secondArticle');
const articleThreeBtn = document.getElementById('thirdArticle');

articleOneBtn.addEventListener('click', readFirstArticle);
articleTwoBtn.addEventListener('click', readSecondArticle);
articleThreeBtn.addEventListener('click', readThirdArticle);



// CAROUSEL FUNCTIONALITY
$(document).ready(function(){
    var pauseInterval = false;
  
    // set an interval for the slide to run on
    var interval = window.setInterval(rotateSlides, 20000) // Duration until slide changes (3sec)
  
    function rotateSlides(){
      // Get the first slide and store it
      var $firstSlide = $('#carousel').find('div.slide-card:first');
  
      // Get the width of the slide so we know how much to slide by
      var width = $firstSlide.width();
  
      // Animate the first slide to move to the left the length of the
      // width. Set 1000 (1sec) to be the length of the slide transition.
      $firstSlide.animate({marginLeft: -width}, 1000, function(){
        // Reorder slides - move the $firstSlide after the last slide
        var $lastSlide = $('#carousel').find('div.slide-card:last')
        $lastSlide.after($firstSlide);
  
        // Reset slide position to the end of the queue
        $firstSlide.css({marginLeft: 0})
      });
    }
  
    // Listen for click on arrows
    $('#left-arrow').click(previousSlide);
    $('#right-arrow').click(nextSlide);
    // Listen for click on slide image
    $('.slide-card').click(nextSlide);
  
    function previousSlide(){
      // Stop the interval from running
      window.clearInterval(interval);
      // Get the current slide
      var $currentSlide = $('#carousel').find('div.slide-card:first');
      // Get the width of the slide so we know how much to slide by
      var width = $currentSlide.width();
      // Get the previous slide
      var $previousSlide = $('#carousel').find('div.slide-card:last')
      // Move the previous slide's positition to the front of the queue
      $previousSlide.css({marginLeft: -width})
      $currentSlide.before($previousSlide);
      // Animate to the previous slide
      $previousSlide.animate({marginLeft: 0}, 1000, function(){
        // Resume the interval
        interval = window.setInterval(rotateSlides, 20000);
      });
    }
  
    function nextSlide(){
      // Stop the interval from running
      window.clearInterval(interval);
      // Get the current slide
      var $currentSlide = $('#carousel').find('div.slide-card:first');
      // Get the width of the slide so we know how much to slide by
      var width = $currentSlide.width();
      // Animate to the next slide
      $currentSlide.animate({marginLeft: -width}, 1000, function(){
        // Reorder slides - move the $firstSlide after the last slide
        var $lastSlide = $('#carousel').find('div.slide-card:last')
        $lastSlide.after($currentSlide);
        // Reset slide position to the end of the queue
        $currentSlide.css({marginLeft: 0})
        // Resume the interval
        interval = window.setInterval(rotateSlides, 20000);
      });
    }
  
  });
  