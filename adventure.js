var data = {
    "locations":{
        "startCave": {
            "locations": {
                "startCaveEntrance" : ["the light", "the faint light", "faint light", "light", "entrance", "the entrance", "the cave entrance"]
            },
            "story": "You wake up in a dark cave, all that you can see is a faint light comming from the cave entrance. "
        },
        "startCaveEntrance" : {
            "locations": {
                "startCave" : ["the cave", "cave"],
                "startTown" : ["the path", "path", "town", "small town"]
            },
            "items": {
                "rusty sword" : ["sword", "rusty sword"]
            },
            "inspectables" : {
                "bush" : {
                    "keywords": ["bush", "bushes"]
                }
            },
            "story": "The sun blinds you as you make your way out of the cave. As your eyes begin to adjust you make out a path leading down the mountain to the east. It looks like it heads to a small village."
        }
    },
    "commands": {
        "go to":"move",
        "follow":"move",
        "enter":"move",
        "exit":"move",
        "walk to":"move",
        "move to" : "move",
    }
}
var player = {
    
}

start();

function start() {
    moveTo("startCave");
}

function moveTo(location) {
    player.location = location;
    displayStory(location);
}

function displayStory(location) {
    var text = data.locations[location].story;
    var para = document.getElementById("story");

    para.classList.add("fade-out-text");
    para.classList.remove("fade-int-text");

    para.innerText = text;
    para.classList.add("fade-in-text");
    para.classList.remove("fade-out-text");
}


function clickEnter(e) {
    if (e.keyCode == 13) {
        var inputArea = e.target;
        var input = inputArea.value.toLowerCase();

        inputArea.value = "";

        if (input != ""){
            inputAcceptedAnimation(inputArea);

            var command = Object.keys(data.commands).filter(command => input.startsWith(command));
            console.log(command);
            if (data.commands[command] == "move") {
                var location = input.replace(command + " ", "");
                location = Object.keys(data.locations[player.location].locations).filter(loc => Object.values(data.locations[player.location].locations[loc]).some(x => x == location));
                console.log("move to " + location);
                moveTo(location);
                
            }
            else {
                // turn border red or something
            }
        }
    }
}

/** takes the input from the text box and parses it 
 *  so that it may be used as commans for the game
 */
function parseInput(input) {
    var valid = false;
    if (input == "help") {

    }
}

function inputAcceptedAnimation(inputArea) {
//     var inputClone = document.createElement("p");
//     inputClone.innerText = inputArea.value;
//     inputArea.value = "";

//     document.getElementById("inputArea").appendChild(inputClone);
//     inputClone.id = "inputClone";
//     inputClone.style.position = "relative";
//     inputClone.style.top = "-5.55vw";
    
}

