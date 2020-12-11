
$(document).on('scroll', function() {
// the scrollTop method gives a pixel value for the current scroll position
  var pixelsFromTop = $(document).scrollTop()

  if (pixelsFromTop > 1100) {
    $('h1').css('color', '#ffffff')
    $('section h3').css('color', '#ffffff')
    $('section p').css('color', '#ffffff')
  } else {
    $('h1').css('color', '#000000')
    $('section h3').css('color', '#000000')
    $('section p').css('color', '#000000')
  }
  
  
   if (pixelsFromTop < 600) {
    $('body').css('background-color', '#CCDAF1')
   } 
  else if (pixelsFromTop < 1000) {
    $('body').css('background-color', '#7997C4')
   } 
  else if (pixelsFromTop < 1700) {
    $('body').css('background-color', '#1B3150')
   } 
  else if (pixelsFromTop < 3000) {
     $('body').css('background-color', '#112232')
  } 
  else {
     $('body').css('background-color', '#021E48')
   }

  var documentHeight = $(document).height()
  var windowHeight = $(window).height()
  var different = documentHeight - windowHeight
  
//  var percentage = 100 * pixelsFromTop / difference
    
})