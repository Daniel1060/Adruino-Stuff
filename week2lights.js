var five = require("johnny-five");
var wait = require("wait-for-stuff");
var board = new five.Board({port:"COM5"});

board.on("ready", function(){
    var led1 = new five.Led(13);
    var led2 = new five.Led(8);
    var led3 = new five.Led(1);
    
    led1.on();
    led2.on();
    led3.on();
    












    
})