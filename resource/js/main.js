$(document).ready(function(){
	//sticky menu waypoint
	$('.js--service-section').waypoint(function(direction){
		if(direction == "down") {
			$('nav').addClass('sticky')
		} else {
			$('nav').removeClass('sticky')
		}

	})

	//mixitup  
	var mixer = mixitup('.container');



//smoth scroll for ie/ safari/ edge 
// Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });



});


// mobile menu onClick support js function
/*plain js code */
function openNav() {
	document.getElementById('mobilenav').style.width = "100%";
	console.log('open nav is cliking');
};
function clossNav() {
	document.getElementById('mobilenav').style.width = "0%";
	console.log('mobile nav is closing')
};


 