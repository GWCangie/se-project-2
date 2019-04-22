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


//test the output of quill function
function getEditorContents() 
{
    console.log( "Retrieving contents..." );
    var html = quill.root.innerHTML;
    console.log( html );

     //using jquery to put editor contents into database
    $.post(
        //url section
        "submitPost.php",
        //data section
        {
            htmlData: html;
        },
        //function section
        function( data, status )
        {
            alert( "Data: " + data + "\nStatus: " + status );
        } 
    );
}
