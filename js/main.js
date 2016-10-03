/**
 * jTinder initialization
 */
var result = 4;
var timedOut = false;


$("#tinderslide").jTinder({
	// dislike callback
    onDislike: function (item) {
	    // set the status text
	    if (timedOut == false) {
		    if (item.index()+1 == 15 || item.index()+1 == 11 || item.index()+1 == 9 || item.index()+1 == 4) {
		    	result --;
		    }
		}
        if (item.index()+1 == 1) {
        	// document.location.href = "results.html";
        	console.log(result);
  			// // document.getElementById("result").textContent=String(result);
  			// $("#result").replaceWith(String(result));
  			// console.log(location.pathname.split('/').slice(-1)[0]);
  			// console.log($(document));
  			// console.log($('#result').html());
  			$("#results").html(String(result));
  			$( ".wrap" ).replaceWith("<h2>Thank you!</h2>");

        	
        }
    },
	// like callback
    onLike: function (item) {
	    // set the status text
	    if (item.index()+1 == 15 || item.index()+1 == 11 || item.index()+1 == 9 || item.index()+1 == 4) {
	    	result ++;
	    }
        if (item.index()+1 == 1) {
        	console.log(result);
        	// document.location.href = "results.html";
			// document.getElementById("result").textContent=String(result);
			// console.log(location.pathname.split('/').slice(-1)[0]);
			// console.log($(document));
			// $("#result").replaceWith(String(result));
			// console.log($('#result').html());
			$("#results").html(String(result));
			 $( ".wrap" ).replaceWith("<h2>Thank you!</h2> ");

        }
    },
	animationRevertSpeed: 200,
	animationSpeed: 400,
	threshold: 1,
	likeSelector: '.like',
	dislikeSelector: '.dislike'
});

/**
 * Set button action to trigger jTinder like & dislike.
 */
$('.actions .like, .actions .dislike').click(function(e){
	e.preventDefault();
	console.log($(this).attr('class'));
	$("#tinderslide").jTinder($(this).attr('class'));
});

// $('document').keypress(function (e) {
//  var key = (event.keyCode ? event.keyCode : event.which);
//  console.log("help");
//  if(key == '73')  // the enter key code
//   {
//   	console.log('i');
//     $("#tinderslide").jTinder(like);
//   }
//   if(key == '69')  // the enter key code
//   {
//   	console.log('e');
//     $("#tinderslide").jTinder(dislike);
//   }
// });   

document.addEventListener("keydown", keyDownTextField, false);

function keyDownTextField(e) {
var keyCode = e.keyCode;
  if(keyCode==73) {
  	$("#tinderslide").jTinder("like");
  	clearInterval(myTimer);
	myTimer = setInterval(myFn, 1750);
  } else if (keyCode==69){
  	timedOut = false;
  	$("#tinderslide").jTinder("dislike");
  	clearInterval(myTimer);
	myTimer = setInterval(myFn, 1750);	
  }
}

function myFn() {$("#tinderslide").jTinder("dislike"); timedOut = true;}

var myTimer = setInterval(myFn, 1750);






