// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
$("#rock").click(function(){
    
    let com = Math.random();

    if ( com >= 2/3 && com <= 1) {
        $("#computerChoice").text("Scissors");
    } else if (com >= 1/3 && com <= 2/3) {
        $("#computerChoice").text("Rock");
    } else if (com >= 1/3 && com <= 0) {
        $("#computerChoice").text("Paper");
    } else {
        $("body").alert("rps broke");
    }

    $("#userChoice").html("Rock");

});

$("#paper").click(function(){
   
});

$("#scissors").click(function(){

});

// DOCUMENT READY FUNCTION BELOW

