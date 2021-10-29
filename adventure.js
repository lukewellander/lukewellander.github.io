var data = {
    "locations":{
        "startCave": {
            "visited" : false,
            "locations": {
                "startCaveEntrance" : ["the light", "the faint light", "faint light", "light", "entrance", "the entrance", "the cave entrance"]
            },
            "story": "You wake up in a dark cave, all that you can see is a faint light coming from the cave entrance. \n\n(Try: \"go to the cave entrance\")",
            "returnStory": "You're back in the cave that you woke up in, it's too dark to see much though."
        },
        "startCaveEntrance" : {
            "visited" : false,
            "locations": {
                "startCave" : ["the cave", "cave"],
                "startTown" : ["the path", "path", "town", "small town", "the village", "the small village"]
            },
            "items": {
                "rusty sword" : ["rusty sword"]
            },
            "inspectables" : {
                "bush" : {
                    "keywords": ["bush", "bushes", "the bush", "the bushes"],
                    "findings": "You look closer at the bushes and find a rusty sword hidden in one.",
                    "item": "rusty sword",
                },
            },
            "story": "The sun is blinding as you make your way out of the cave. Your eyes begin to adjust and you can make out a path leading down the mountain side to the east. It heads to a small village. The sun is reflecting off something in the bushes. \n\n(Try: search the bushes)",
            "returnStory": "The sun is blinding as you make your way out of the cave. Your eyes begin to adjust and you can make out a path leading down the mountain side to the east. It heads to a small village."
        },
        "startTown": {
            "visited" : false,
            "locations": {
                "startCaveEntrance" : ["the mountain", "the cave", "mountain", "cave"],
            },
            "story": "As you aproach the town you notice it is very quite and seems abandoned. You continue into the small town untill you stumble upon an oger complaining about his pet donkey. \n\n(Try: attack the oger)"
        }
    },
    "commands": {
        "go to":"move",
        "follow":"move",
        "enter":"move",
        "exit":"move",
        "walk to":"move",
        "move to" : "move",
        "move" : "move",
        "head" : "move",
        "go" : "move",
        "look at" : "inspect",
        "inspect" : "inspect",
        "search" : "inspect",
        "check out" : "inspect",
    }
}
var player = {
    inventory: [],
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
    var text;
    if (data.locations[location].visited == false) {
        text = data.locations[location].story;
        data.locations[location].visited = true;
    }
    else {
        text = data.locations[location].returnStory;
    }
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
                if (data.locations[location] != undefined) {
                    console.log("move to " + location);
                    moveTo(location);
                }
                else {
                    console.log("Invalid location");
                }
            }
            else if (data.commands[command] == "inspect" && data.locations[player.location].inspectables != undefined){
                var toInspect = input.replace(command + " ", "");
                console.log(toInspect);
                toInspect = Object.keys(data.locations[player.location].inspectables).filter(inspect => Object.values(data.locations[player.location].inspectables[inspect].keywords).some(x => x == toInspect));
                if (data.locations[player.location].inspectables[toInspect] != undefined) {
                    console.log("inspect " + toInspect);
                    //inspect 
                }
                else {
                    console.log("Invalid inspectable");
                }
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

