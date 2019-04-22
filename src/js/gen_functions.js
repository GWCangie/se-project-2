//javascript for all pages
"use strict";

//changes save button when clicked
function change1()
{
    let plus = '\u2606';
    let minus = '\u2605';

    let sb = document.getElementById("vote");
    if ( sb.innerText ===plus ){
        sb.innerText = minus;
		}else{
        sb.innerText = plus;
		}
}

<<<<<<< HEAD

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
=======
function commentSubmitted(event){
    // Changes the html, creates divs necessary for a comment for consistency reasons.
    // Still needs to be inserted into the database alongside the date and time of
    // comment.
    // When database setup for this part is done, it would be nice to implement a
    // method that gets the elapsed time since comment was posted (not really necessary).
    let newHTML="";
    let rawDateTime = new Date();
    let strDateTime = rawDateTime.toISOString()
    strDateTime = strDateTime.substring(0, strDateTime.length-1);
    let commentDate = strDateTime.split('T');
    let justDate = commentDate[0].split('-');
    let justTime = commentDate[1].substring(0, commentDate[1].length-7);
    console.log(commentField.value);
    let commentStr = commentField.value;// this needs to be inserted into the db
    let contain = document.querySelector("#comment-section");
    newHTML += "<div class = \"media\"> \n  <div class = media-body>";
    newHTML += "<span class = \"text-muted\">\n <small class=\"text-muted\">";
    newHTML += monthNames[rawDateTime.getMonth()]+" "+justDate[2]+" ";
    newHTML += justDate[0]+", "+ justTime +" </small> \n</span>\n";
    newHTML += "<p>\n"+ commentStr +"\n</p>\n</div>\n</div>\n<hr>\n";
    contain.innerHTML += newHTML;
}
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
];
let commentField = document.querySelector("#comment-box");
let post_comment = document.querySelector("#comment-button");
//console.log("comment post button found: "+post_comment);
if(post_comment){
    console.log("adding event listener to comment button");
    post_comment.addEventListener("click", commentSubmitted);
}else{
    console.log("error, comment button was not recognized");
>>>>>>> 8c83fdea93275bd7829f778f965b9774f543ee0d
}
