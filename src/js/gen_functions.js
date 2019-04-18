//javascript for all pages
"use strict";			

//changes save button when clicked
function change1()
{
	var plus = '\u2606';
	var minus = '\u2605';

    var sb = document.getElementById("vote");
    if ( sb.innerText == plus ) 
    	sb.innerText = minus;
    else 
    	sb.innerText = plus;
}

