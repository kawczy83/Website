$(function() {
		var $interest = $('.interest');  // declares the interest variable
		$('.interest + ul').hide();		// hides the <ul> elements that are descended from the interest class
		$interest.append('<br><br> <a class="btn btn-lg" id="show">Reveal</a>');  // adds a Reveal button below the text
		
		$interest.on('click',function(){	// On click, the <li> items fadesIn into view within 500ms (0.5 seconds)
			$interest.next().fadeIn(500);
			$interest.find('a').fadeOut(500);	// Reveal button fadesOut of view within 500ms (0.5 seconds)
			$( ".interest" ).fadeOut(500);  // H3 with the class, interest, fadesOut of view within 500ms (0.5 seconds)
		});
	
	});
