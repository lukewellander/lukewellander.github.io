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
                "startTown" : ["the path", "path", "town", "small town", "the village", "the small village"]
            },
            "items": {
                "rusty sword" : ["rusty sword"]
            },
            "inspectables" : {
                "bush" : {
                    "keywords": ["bush", "bushes"]
                }
            },
            "story": "The sun blinds you as you make your way out of the cave. Your eyes begin to adjust and you can make out a path leading down the mountain side to the east. It looks like it heads to a small village."
        },
        "startTown": {
            "locations": {
                "startCaveEntrance" : ["the mountain", "the cave", "mountain", "cave"],
            },
            "story": "As you aproach the town you notice it is very quite you dont hear anything except the wind blowing though the trees."
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

async function displayStory(location) {
    var text = data.locations[location].story;
    var display = document.getElementById("playArea");
    var para = document.createElement("p");

    var oldPara = document.getElementsByClassName("fade-in-text")[0];
    oldPara.classList.remove("fade-in-text");
    oldPara.classList.add("fade-out-text");
    await delay(2);
    display.removeChild(oldPara);

    display.appendChild(para);
    para.innerText = text;
    para.classList.add("fade-in-text");
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
                console.log(location);
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

function delay(n){
    return new Promise(function(resolve){
        setTimeout(resolve,n*1000);
    });
}

