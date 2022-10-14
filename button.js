var five = require("johnny-five");
var wait = require("wait-for-stuff");
var board = new five.Board({port:"COM5"});


board.on("ready", function(){
    console.log("BOARD STANDING BY!!!")
    
    var buzzer = new five.Piezo(2);

    var myButton = new five.Button(5);


    myButton.on("press", function(){
        console.log("Button Pressed!!!")
    });

    buzzer.play({
        song: [
            ["C4", 1 / 4],
            ["D4", 1 / 4],
            ["F4", 1 / 4],
            ["D4", 1 / 4],
            ["A4", 1 / 4],
            [null, 1 / 4],
            ["A4", 1],
            ["G4", 1],
            [null, 1 / 2],
            ["C4", 1 / 4],
            ["D4", 1 / 4],
            ["F4", 1 / 4],
            ["D4", 1 / 4],
            ["G4", 1 / 4],
            [null, 1 / 4],
            ["G4", 1],
            ["F4", 1],
            [null, 1 / 2]
          ],
          tempo: 100
    })
})

