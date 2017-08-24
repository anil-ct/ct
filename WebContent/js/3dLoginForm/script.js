$(function(){
	
	// Checking for CSS 3D transformation support
	$.support.css3d = supportsCSS3D();
	
	var formContainer = $('#formContainer');
	
	// Listening for clicks on the ribbon links
	$('.flipLinks').click(function(e){
		//console.log(e.currentTarget.id + " : " + this);
		if ("flipToRecover" == e.currentTarget.id) {
			// Flipping the forms
			formContainer.toggleClass('flipped', true);
			formContainer.toggleClass('flippedToRecover');
			
			// If there is no CSS3 3D support, simply
			// hide the login form (exposing the recover one)
			if(!$.support.css3d){
				$('#login').toggle();
			}
			flipToRecover();
		} else if ("flipToRegister" == e.currentTarget.id) {
			formContainer.toggleClass('flippedToRegister');
			
			formContainer.toggleClass('flipped', true);
			if(!$.support.css3d){
				$('#login').toggle();
			}
			flipToRegister();
		} else {
			formContainer.toggleClass('flipped', false);
			formContainer.toggleClass('flippedToRecover', false);
			formContainer.toggleClass('flippedToRegister', false);
			if(!$.support.css3d){
				$('#login').toggle();
			}
			flipToLogin();
		}
		e.preventDefault();
	});
	
//	formContainer.find('form').submit(function(e){
//		// Preventing form submissions. If you implement
//		// a backend, you might want to remove this code
//		e.preventDefault();
//	});
	
	
	// A helper function that checks for the 
	// support of the 3D CSS3 transformations.
	function supportsCSS3D() {
		var props = [
			'perspectiveProperty', 'WebkitPerspective', 'MozPerspective'
		], testDom = document.createElement('a');
		  
		for(var i=0; i<props.length; i++){
			if(props[i] in testDom.style){
				return true;
			}
		}
		
		return false;
	}
});
