var data = {
    "locations":{
        "startCave": {
            "visited" : false,
            "locations": {
                "startCaveEntrance" : ["light", "faint light", "entrance", "cave entrance"]
            },
            "story": "You wake up in a dark cave, all you can see is a faint light coming from the cave entrance. \n\n(Try: \"go to the cave entrance\")",
            "returnStory": "You're back in the cave that you woke up in, it's too dark to see anything other than the cave entrance."
        },
        "startCaveEntrance" : {
            "visited" : false,
            "locations": {
                "startCave" : ["cave"],
                "startTown" : ["east", "path", "town", "small town", "village", "small village"]
            },
            "items": ["rusty sword",],
            "inspectables" : {
                "bush" : {
                    "keywords": ["bush", "bushes",],
                    "findings": "You look closer at the bushes and find a rusty sword hidden in one. \n\n (Try: pick up the rusty sword)",
                },
            },
            "story": "The sun is blinding as you make your way out of the cave. Your eyes begin to adjust and you can make out a path leading down the mountain side to the east. It heads to a small village. The sun is reflecting off something in the bushes. \n\n(Try: search the bushes)",
            "returnStory": "You're back at the entrance to the cave you can either enter the cave or go to the small village. There may also be something hidden in the bushes."
        },
        "startTown": {
            "visited" : false,
            "locations": {
                "startCaveEntrance" : ["cave", "west", "western path", "west facing path"],
                "bridge" : ["river", "south", "downstream", "southern path", "south facing path", "bridge"],
                "startOfMountains" : ["mountains", "mountain", "north", "northern path", "north facing path", "deep into mountains", "deep in mountains",],
            },
            "enemies" : {
                "ogre": {
                    "health" : 1,
                    "story" : {
                        "success":"The ogre falls to his knees defeated, his wooden sheild falls to the ground beside him. Three paths lead out of this town the west facing path leads to the cave where your journey began, the north facing path leads deep into the mountains, and the southern path follows the river downstream. ",
                        "failure":"The ogre is much more powerful than you expected. You decide the best course of action is to just run away!\n\n(Try: run)\n(Try: equip the rusty sword)\n(You need more power go find and equip the rusty sword)"
                    },
                    "drops": "wooden shield",
                },
            },
            "story": "As you aproach the town you notice it is very quite and seems abandoned. You continue into the small town untill you stumble upon an ogre complaining about his pet donkey. \n\n(Try: attack the ogre)",
            "returnStory": "As you enter the town you see the body of a once great ogre laying dead on the side of the road. Three paths lead out of this town the west facing path leads to the cave where your journey began, the north facing path leads deep into the mountains, and the southern path follows the river downstream."
        },
        "bridge":{
            "visited" : false,
            "locations": {
                "startTown" : ["east", "path", "town", "small town", "village", "small village"],
            },
            "enemies" : {
                "wolf": {
                    "health" : 3,
                    "story" : {
                        "success":"The wolf lunges at you attempting to sink it's teeth into your leg. You blindly thrust you sword in the direction of the wolf piercing it's side. Letting out a final cry the wolf collapses to the ground.",
                        "failure":"The wolf growls as you approach, it chases you back to the begining of the bridge. It looks like you will have to go a different direction until you're powerful enough to defeat the wolf."
                    },
                },
            },
            "story": "You follow the path along the river until you come across a stone bridge leading over the river. You start to cross the bridge but notice a wolf blocking the other side of the bridge.",
            "returnStory" : "Now that the wold is gone you can cross over the bridge easily",
        },
        "startOfMountains":{
            "visited" : false,
            "locations": {
                "startTown" : ["east", "path", "town", "small town", "village", "small village", "hike back", "hike back down", "back"],
                "mountains" : ["mountains", "mountain", "north", "northern path", "north facing path", "deeper into mountains", "right"],
                "mineshaft" : ["into mineshaft", "mine", "into mine", "mineshaft", "left", "west",]
            },
            "story": "You head up the path that leads into the mountains, you reach a fork in the road, the left path leads to a mineshaft, the right path leads deeper into the mountains, and of course you can always hike back down to the town.",
            "returnStory" : "The road splits here, one path leads to a mineshaft, another leads deep into the mountains, yet another leads to a small town.",
        },
        "mineshaft": {
            "visited" : false,
            "locations" : {
                "startOfMountains" : ["mountains", "mountain", "mineshaft", "outside", "out", "path", "entrance", "mine entrance", "entrance mine", "back"],
                "mineshaftLevelOneA" : ["down ladder", "ladder", "down", "further", "further into mine", "past skeleton", "down further into mine"],
            },
            "items": ["leather armor",],
            "inspectables": {
                "skeleton" : {
                    "keywords":["skeleton", "dead guy", "dead skeleton", "armor", "leather armor",],
                    "findings": "This guy was wearing leather armor when he died, it clearly didn't do much for him. Maybe you'll have better luck."
                }
            },
            "story": "You decide to leave the path and enter the mineshaft. Once inside you are greeted by the skeleton of a dead man, wearing leather armor as if it was still his job to make sure no one could enter or exit the mine. Behind you the entrance of the mine leads outside into the mountains, and just past the skeleton is a ladder that leads down further into the mine.",
            "returnStory": "The skeleton lays lifeless on the ground. The entrance of the mine leads outside into the mountains, and just past the skeleton is the ladder that leads down further into the mine.",
        },
        "mineshaftLevelOneA" : {

        },
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
    },
    "commands": {
        "go":"move",
        "follow":"move",
        "enter":"move",
        "exit":"move",
        "walk":"move",
        "move" : "move",
        "head" : "move",
        "climb" : "move",
        "look at" : "inspect",
        "inspect" : "inspect",
        "search" : "inspect",
        "check out" : "inspect",
        "pick up" : "pick up",
        "grab" : "pick up",
        "get" : "pick up",
        "take" : "pick up",
        "equip" : "equip",
        "wear" : "equip",
        "hold" : "equip",
        "attack" : "attack",
        "run" : "run",
        "back" : "run",
    },
}
var player = {
    location: "startCave",
    previousLocation: "startCave",
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

async function attack(enemy) {
    if (data.locations[player.location].enemies[enemy] != undefined) {
        if (playerPower() >= data.locations[player.location].enemies[enemy].health) {
            data.locations[player.location].story = data.locations[player.location].enemies[enemy].story.success;
            data.locations[player.location].visited = false;
            displayStory(player.location);
            data.locations[player.location].visited = true;
            if (data.locations[player.location].enemies[enemy].drops != undefined) {
                if (data.locations[player.location].items == undefined) {
                    data.locations[player.location].items = [];
                }
                data.locations[player.location].items.push(data.locations[player.location].enemies[enemy].drops);
            }
            // remove the enemy from this scene
            delete data.locations[player.location].enemies[enemy];
            // if there are no more enemies in this scene remove the category
            if (data.locations[player.location].enemies.length = 0) {
                delete data.locations[player.location].enemies;
            }
        }
        // if the player fails to kill the enemy show the failure story and set this scene like 
        // we never visited so that the story will show up again
        else {
            changeSubText(data.locations[player.location].enemies[enemy].story.failure);
            data.locations[player.location].visited = false;
        }
    }
}

function refreshInventory() {
    var text = "<div class='equiped'>power: " + playerPower() + "<br>";
    if (player.weapon != null) {
        text += player.weapon + "<br>";
    }
    if (player.armor != null) {
        text += player.armor + "<br>";
    }
    if (player.shield != null) {
        text += player.shield + "<br>";
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
    var index = data.locations[player.location].items.indexOf(item);
    if (data.locations[player.location].items[index] != undefined)
    {
        player.inventory.unshift(item);
        delete data.locations[player.location].items[index];
        var text = "You found the " + item;

        changeSubText(text);
        refreshInventory();
    }
    else {
        console.log("Item not here");
    }
}

function inspect(inspectable) {
    var text = data.locations[player.location].inspectables[inspectable].findings;
    changeSubText(text);
}

function moveTo(location) {
    // if there are no enemies the player can move otherwise "run" is the only option
    if (data.locations[player.location].enemies == undefined) {
        player.previousLocation = player.location;
        player.location = location;
        displayStory(location);
    }
}

function run () {
    if (player.location != null) {
        moveTo(player.previousLocation);
    }
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
        var input = inputArea.value.toLowerCase().replace(" to ", " ").replace(" the ", " ");

        inputArea.value = "";

        if (input != ""){
            inputAcceptedAnimation(inputArea);

            var command = Object.keys(data.commands).filter(command => input.startsWith(command));
            console.log(command);
            console.log(input);
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
                pickUp(toPickUp);
            }
            else if (data.commands[command] == "equip") {
                var toEquip = input.replace(command + " ", ""); 
                console.log(toEquip);
                equip(toEquip);
            }
            else if (data.commands[command] == "attack" && data.locations[player.location].enemies != undefined) {
                var enemy = input.replace(command + " ", ""); 
                console.log(enemy);
                attack(enemy);
            }
            else if (data.commands[command] == "run" && player.previousLocation != null) {
                run();
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

