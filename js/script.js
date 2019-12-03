// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
$("#rock").click(function(){
    
    let com = Math.random();

    if ( com >= 2/3 && com <= 1) {
        $("#computerChoice").text("Scissors");
        alert("You Win!");
    } else if (com >= 1/3 && com < 2/3) {
        $("#computerChoice").text("Rock");
        alert("Tie!");
    } else if (com < 1/3) {
        $("#computerChoice").text("Paper");
        alert("You lost...");
    } else {
        alert("rps broke");
    }

    $("#userChoice").html("Rock");

});

$("#paper").click(function(){
    
    let com = Math.random();

    if ( com >= 2/3 && com <= 1) {
        $("#computerChoice").text("Rock");
        alert("You Win!");
    } else if (com >= 1/3 && com < 2/3) {
        $("#computerChoice").text("Paper");
        alert("Tie!");
    } else if (com < 1/3) {
        $("#computerChoice").text("Scissors");
        alert("You lost...");
    } else {
        $("body").alert("rps broke");
    }
    $("#userChoice").html("Paper");

});

$("#scissors").click(function(){
    
    let com = Math.random();

    if ( com >= 2/3 && com <= 1) {
        $("#computerChoice").text("Rock");
        alert("You Win!");
    } else if (com >= 1/3 && com < 2/3) {
        $("#computerChoice").text("Scissors");
        alert("Tie!");
    } else if (com < 1/3) {
        $("#computerChoice").text("Paper");
        alert("You lost...");
    } else {
        $("body").alert("rps broke");
    }

    $("#userChoice").html("Scissors");

});

// DOCUMENT READY FUNCTION BELOW

