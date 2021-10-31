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
                "rusty sword" : ["the rusty sword", "rusty sword"]
            },
            "inspectables" : {
                "bush" : {
                    "keywords": ["bush", "bushes", "the bush", "the bushes"],
                    "findings": "You look closer at the bushes and find a rusty sword hidden in one. \n\n (Try: pick up rusty sword)",
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
        "look at" : "inspect",
        "inspect" : "inspect",
        "search" : "inspect",
        "check out" : "inspect",
        "pick up" : "pick up",
        "grab" : "pick up",
        "get" : "pick up",
        "equip" : "equip",
        "wear" : "equip",
        "hold" : "equip",
    },
    "items": {
        "rusty sword":{
            "damage" : 1,
            "type" : "weapon",
            "action" : "swing",
            "description" : "a rusty sword that you found in a bush.",
        },
        "leather armor" : {
            "protection": 1,
            "type" : "armor",
            "description" : "leather armor, its not very protective.",
        },
        "wooden shield" : {
            "protection": 1,
            "type": "shield",
            "description" : "a wooden sheild, it's better than nothing.",
        }
    }
}
var player = {
    inventory: [],
    weapon: null,
    armor: null,
    shield: null,
}

start();

function start() {
    moveTo("startCave");
    refreshInventory();
}

function playerPower() {
    var power = 0;
    if (player.weapon != null) {
        power += data.items[player.weapon].damage;
    }
    if (player.armor != null) {
        power += data.items[player.armor].protection;
    }
    if (player.shield != null) {
        power += data.items[player.shield].protection;
    }
    return power;
}

function equip(item) {

    if (player.inventory.some(x => x == item)) {
        if (data.items[item].type == "weapon") {
            if (player.weapon != null) {
                player.inventory.unshift(player.weapon);
            }
            player.weapon = item;
            player.inventory.pop(item);
        }
        else if (data.items[item].type == "armor") {
            if (player.armor != null) {
                player.inventory.unshift(player.armor);
            }
            player.armor = item;
            player.inventory.pop(item);
        }
        else if (data.items[item].type == "shield") {
            if (player.shield != null) {
                player.inventory.unshift(player.shield);
            }
            player.shield = item;
            player.inventory.pop(item);
        }
        else {
            console.log("this is not equipable");
        }
    }
    else {
        console.log("player does not have this item");
    }
    refreshInventory();
}

function refreshInventory() {
    var text = "<div class='equiped'>power: " + playerPower() + "<br>";
    if (player.weapon != null) {
        text += player.weapon;
    }
    if (player.armor != null) {
        text += player.armor;
    }
    if (player.shield != null) {
        text += player.shield;
    }
    text += "</div> <br>"
    for (var i = 0; i < player.inventory.length; i ++) {
        text += player.inventory[i] + "\n";
    }
    document.getElementById("inventory").innerHTML = text;
}

async function changeSubText(text) {
    var display = document.getElementById("playArea");
    var subText = document.createElement("p");
    var oldSubText = document.getElementsByClassName("fade-in-text")[1];

    oldSubText.classList.remove("fade-in-text");
    oldSubText.classList.add("fade-out-text");

    await delay(2);
    display.removeChild(oldSubText);

    display.appendChild(subText);
    subText.innerText = text;
    subText.classList.add("fade-in-text");
}

function pickUp(item) {
    player.inventory.unshift(item);
    delete data.locations[player.location].items[item];
    var text = "You found the " + item;
    if (item == "rusty sword") {
        text += "\n\n (Try: equip rusty sword)";
    }

    changeSubText(text);
    refreshInventory();
}

function inspect(inspectable) {
    var text = data.locations[player.location].inspectables[inspectable].findings;
    changeSubText(text);
}

function moveTo(location) {
    player.location = location;
    displayStory(location);
}

async function displayStory(location) {

    var text;
    // check it the location has been visited if not display the story text 
    // for the location
    if (data.locations[location].visited == false) {
        text = data.locations[location].story;
        data.locations[location].visited = true;
    }
    // otherwise display the return story fot this location
    else {
        text = data.locations[location].returnStory;
    }
    // create two new paragraphs for this scene
    var display = document.getElementById("playArea");
    var para = document.createElement("p");
    var newSubText = document.createElement("p");

    // find the old paragraphs that will be replaced 
    var oldPara = document.getElementsByClassName("fade-in-text")[0];
    var oldSubText = document.getElementsByClassName("fade-in-text")[1];

    // set the old paragraphs to fade out of the scene
    oldPara.classList.remove("fade-in-text");
    oldSubText.classList.remove("fade-in-text");
    oldPara.classList.add("fade-out-text");
    oldSubText.classList.add("fade-out-text");

    // wait two seconds and delete them 
    await delay(0.9);
    display.removeChild(oldPara);
    display.removeChild(oldSubText);

    // add the new paragraphs to the scene and have them fade in
    display.appendChild(para);
    display.appendChild(newSubText);
    para.innerText = text;
    para.classList.add("fade-in-text");

    // this paragraph is just a place holder
    newSubText.classList.add("fade-in-text");
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
                    inspect(toInspect);
                }
                else {
                    console.log("Invalid inspectable");
                }
            }
            else if (data.commands[command] == "pick up" && data.locations[player.location].items != undefined) {
                var toPickUp = input.replace(command + " ", "");
                console.log(toPickUp);
                toPickUp = Object.keys(data.locations[player.location].items).filter(item => Object.values(data.locations[player.location].items[item]).some(x => x == toPickUp));
                if (data.locations[player.location].items[toPickUp] != undefined) {
                    console.log("pick up " + toPickUp);
                    pickUp(toPickUp);
                }
                else {
                    console.log("Invalid item");
                }
            }
            else if (data.commands[command] == "equip") {
                var toEquip = input.replace(command + " ", ""); 
                console.log(toEquip);
                equip(toEquip);
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

