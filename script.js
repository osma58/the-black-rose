
var pressed = true;
var secondpressed = false;

function myFunction() {
    
	if (pressed) {
		document.getElementById("tekstmidden").innerHTML = "This a website where you can order roses tshirt for somebody or for yourself. It is a rose T'shirt designed by Osman Yasin";
		secondpressed = true; 
		pressed = false;

	} else if (secondpressed) {
		document.getElementById("tekstmidden").innerHTML = "If you want to know more about us, what we are and what we do click down below.";
		secondpressed = false; 
		pressed = true;

	}

    
}

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function functie() {
  document.getElementById("foto1").src = "../rozen/roos1/roodroos1.png";

}

function functie2() {
  document.getElementById("foto1").src = "../rozen/roos1/geelroos1.png";

}

function functie3() {
  document.getElementById("foto1").src = "../rozen/roos1/blauw.png";

}

function functie4() {
  document.getElementById("foto1").src = "../rozen/roos1/zwartroos1.png";

}


