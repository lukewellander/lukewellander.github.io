var won = false;

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
                "startTown" : ["east", "path", "town", "small town", "village", "small village", "down mountain side",]
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
                "startTown" : ["north", "path", "town", "small town", "village", "small village", "back", "other side", "other side of bridge", ],
                "forestEntrance" : ["forest", "dark forest", "forest path", "east", "east path"],
                "castleGate" : ["castle", "west", "west path", "large castle", "gate", "castle gate"],
            },
            "enemies" : {
                "wolf": {
                    "health" : 3,
                    "story" : {
                        "success":"The wolf lunges at you attempting to sink it's teeth into your leg. You blindly thrust you sword in the direction of the wolf piercing it's side. Letting out a final cry the wolf collapses to the ground. Now that the wolf is dead you cross over the bridge easily. The path on the other side of the bridge leads to the town, the path on this side of the bridge goes, two directions, the east path leads to a dark forest and the west path leads to a large castle.",
                        "failure":"The wolf growls as you approach, it chases you back to the begining of the bridge. It looks like you will have to go a different direction until you're powerful enough to defeat the wolf."
                    },
                },
            },
            "story": "You follow the path along the river until you come across a stone bridge leading over the river. You start to cross the bridge but notice a wolf blocking the other side of the bridge.",
            "returnStory" : "Now that the wolf is dead you can cross over the bridge easily. The path on the other side of the bridge leads to the town, the path on this side of the bridge goes, two directions, the east path leads to a dark forest and the west path leads to a large castle.",
        },
        "castleGate" : {
            "visited" : false,
            "locked" : {
                "red" : true,
                "blue" : true,
            },
            "locations" : {
                "castle" : ["open gate", "through gate", "gate", "castle", "inside", "path that leads castle"],
                "bridge" : ["back bridge", "bridge",]
            },
            "story" : "You follow the path that leads to the castle as you near the castle you see that the path leads to a large gate in the castle walls. The gate has two padlocks blue and red they prevent you from opening it. Until you find the keys and use them on the gate the only way to go is back to the bridge.",
            "returnStory" : "You're back outside the castle walls, there is a gate here it has a red lock and a blue lock. If the locks are unlocked there is a path that leads to the castle otherwise the only other path leads back to the bridge.",
        },
        "castle" : {
            "visited" : false,
            "locations" : {
                "castleGate" : ["back gate", "gate", "castle gate"],
            },
            "enemies" : {
                "dragon" : {
                    "headOneAlive" : true,
                    "headTwoAlive" : true,
                    "story" : {
                        "success" : "Congratulations you defeated the dragon and saved the kingdom!",
                        "failure" : "",
                    },
                },
            },
            "story" : "You make your way through the castle gate into a large stone courtyard, thats when you notice a massive two headed dragon. The first head notices you and shoots a fiery red flame in your direction. Now both heads have noticed you and the second head breaths an icey blue fire directly at you. ",
            "returnStory" : "",
        },
        "startOfMountains":{
            "visited" : false,
            "locations": {
                "startTown" : ["east", "path", "town", "small town", "village", "small village", "hike back", "hike back down", "back"],
                "mountainTemple" : ["mountains", "mountain", "north", "northern path", "north facing path", "deeper into mountains", "right"],
                "mineshaft" : ["in mine", "in mineshaft", "into mineshaft", "mine", "into mine", "mineshaft", "left", "west",]
            },
            "story": "You head up the path that leads into the mountains, you reach a fork in the road, the left path leads to a mineshaft, the right path leads deeper into the mountains, and of course you can always hike back down to the town.",
            "returnStory" : "The road splits here, one path leads to a mineshaft, another leads deep into the mountains, yet another leads to a small town.",
        },
        "mountainTemple":{
            "visited" : false,
            "locations":{
                "startOfMountains" : ["back down mountain", "down", "back", "south", "southern path", "south path", "down mountain"]
            },
            "enemies" : {
                "old man" : {
                    "health" : 900,
                    "story" : {
                        "success" : "You answer the old mans riddle correctly, he rewards you by offering you a gift of two swords, an ice sword and a fire sword. The only way to leave is down the mountain",
                        "failure" : "Don't attack old people it's not nice.",
                    },
                    "drops" : ["fire sword", "ice sword"]
                }
            },
            "story" : "You make your way up the path, you travel for what feels like forever trecking mile after mile up the steep mountain path. Eventually you come to an ancient mountain temple, in the court yard there stands an old man he turns to you. \n\n I am always hungry\nI must always be fed\n The finger I touch,\nWill soon turn red\nWhat am I?",
            "returnStory" : "The ancient temple is peaceful no wonder the old man seems to like it here so much. The only way back is down the mountain.",
        },
        "mineshaft": {
            "visited" : false,
            "locations" : {
                "startOfMountains" : ["mountains", "mountain", "mineshaft", "outside", "out", "path", "entrance", "mine entrance", "entrance mine", "back"],
                "mineshaftLevelOne" : ["down ladder", "ladder", "down", "further", "further into mine", "past skeleton", "down further into mine"],
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
        "mineshaftLevelOne" : {
            "visited" : false,
            "locations" : {
                "mineshaft" : ["up", "up ladder", "back", "surface", "surface level"],
                "mineshaftLevelTwo" : ["down ladder", "down", "further", "further into mine", "down further into mine", "next level", "down next level"],
            },
            "enemies" : {
                "giant spider": {
                    "health" : 2,
                    "story" : {
                        "success":"You quickly slice off the spiders legs before it could grab you with its big fangs. With one final stab you finish off the spider as it lay dead in a pile of legs. Beyond the spiders body you see a ladder leading down into the mine and an iron sword, perhaps it was dropped by the last adventurer that made their way into the mine.",
                        "failure":"You advance towards the spider, but the spider is too fast. It darts up the wall of the mineshaft before leaping directly down onto you. You manage to shove it off before it can get a bite out of you, you better run away before it attacks again."
                    },
                    "drops" : "iron sword",
                },
            },
            "story" : "You make your way down the ladder to the next level of the mine, when you reach the bottom you see a giant spider creep out of the shadows.",
            "returnStory" : "You are one level down in the mine. This is where you killed the spider, you can go up the ladder to the surface level or you can go down the ladder to the next level of the mine.",
        },
        "mineshaftLevelTwo" : {
            "visited" : false,
            "locations" : {
                "mineshaftLevelOne" : ["up", "up ladder", "back", "one", "level one", "one i came from"],
                "mineshaftLevelThree" : ["down ladder", "down", "further", "further into mine", "down further into mine", "next level", "down next level", "down next ladder"],
            },
            "enemies" : {
                "goblin": {
                    "health" : 3,
                    "story" : {
                        "success":"The goblin moves quick but you are able to overpower it quite easily. You quickly finish off the goblin, and notice in the stash of the goblins treasure there is some iron armor that may be of use. You see that you can go down the next ladder or back up the one you came from.",
                        "failure":"The goblin is jsut too quick, you can't seem to outmaneuver it. It might be best to just run."
                    },
                    "drops" : "iron armor",
                },
            },
            "story" : "You head down the next ladder and are surprised to see another monster waiting for you this time it's a goblin.",
            "returnStory" : "You're on the second level of the mine with all of the goblin treasure. You can go up the ladder or down the other ladder.",
        },
        "mineshaftLevelThree" : {
            "visited" : false,
            "locations" : {
                "mineshaftLevelTwo" : ["up", "up ladder", "back", "two", "level two", "ladder that leads up"],
                "mineshaftLevelFour" : ["down ladder", "down other ladder", "down", "further", "further into mine", "ladder that leads down", "down further into mine", "next level", "down next level"],
            },
            "enemies" : {
                "orc": {
                    "health" : 5,
                    "story" : {
                        "success":"The orc swings at you with its club, luckly the orc is very slow and you are able to dodge his attack, get behind him, and slice him up from behind. The orc falls to his knees before colapsing all the way to the ground. The orc drops his iron shield as he falls. You can only see to ways to go on, the ladder that leads up, and a ladder that leads down.",
                        "failure":"The orc hits you on the head knocking you out ... when you finaly come to the orc is accross the mineshaft paying no attention to you. Now would be a good time to run."
                    },
                    "drops" : "iron shield",
                },
            },
            "story" : "You climb down to the next level wondering how much further this mineshaft goes. At the bottom of the ladder you turn around to find an orc living in this section of the mine.",
            "returnStory" : "You are back at the third level of the mine where the orc had been living. You can go up the ladder or down the other ladder.",
        },
        "mineshaftLevelFour" : {
            "visited" : false,
            "locations" : {
                "mineshaftLevelThree" : ["up", "up ladder", "back", "three", "level three"],
                "mineshaftLevelFive" : ["continue down ladder", "down another ladder", "down ladder", "down", "further", "further into mine", "down further into mine", "next level", "down next level", "fifth level"],
            },
            "enemies" : {
                "rock golem": {
                    "health" : 6,
                    "story" : {
                        "success":"You lure the rock golem into a dead end tunnel before rolling between its legs. You jump up off the ground and push over a wooden support, causing the ceiling of this tunnel to colapse on top of the rock golem. Next to the pile of rubble there is a set of knight armor. You can continue down another ladder, or go back up the ladder to the third level.",
                        "failure":"The rock golem throws a huge boulder directly at you, knocking you back to the bottom of the ladder you better use this opportunity to run."
                    },
                    "drops" : "knight armor",
                },
            },
            "story" : "You make your way down to the fourth level tired of fighting monsters, you are disappointed when you reach the bottom of the ladder and standing not far from you is a rock golem.",
            "returnStory" : "This is the fourth level of the mine where you burried the rock golem, you can go down a ladder to the fifth level, or you can go up a ladder to the third level of the mineshaft.",
        },
        "mineshaftLevelFive" : {
            "visited" : false,
            "locations" : {
                "mineshaftLevelFour" : ["up", "up ladder", "back", "back up ladder", "three", "level four"],
            },
            "items" : ["blue key",], 
            "story" : "You head down yet another ladder relieved to see that there is no monster waiting here for you, instead there is a blue key sitting on top of a stone column. The only way out is back up the ladder.",
            "returnStory" : "You're back at the lowest level of the mine, this is where you discovered the blue key. The only way out is back up the ladder.",
        },
        "forestEntrance" : {
            "visited" : false,
            "locations" : {
                "bridge" : ["bridge", "back bridge",],
                "maze1" : ["maze",],
            },
            "story" : "You follow the path into the dark forest until you come upon a large hedge maze you dont know what is hidden in the maze but you think it could be helpful, you can enter the maze or head back to the bridge.",
            "returnStory" : "You are in the forest on the path that leads to both the maze and the bridge.",
        },
        "maze1" : {
            "visited" : false,
            "locations" : {
                "maze2" : ["south", "s"],
                "maze11" : ["north", "n"],
                "forestEntrance" : ["exit", "forest", "back forest", "dark forest", "go west", "maze", "entrance"]
            },
            "story" : "You are at the entrance of the maze facing east, the path goes to the north, to the south, or to the west to leave the maze.",
            "returnStory" : "You're back at the entrance to the maze the exit is to the west, the maze leads both north and south.",
        },
        "maze2" : {
            "visited" : false,
            "locations" : {
                "maze1" : ["north", "n"],
                "maze3" : ["south", "s"],
                "maze25" : ["east", "e"],
            },
            "story" : "You reach a three way crossroad, the maze leads north, east, and south.",
            "returnStory" : "You reach a three way crossroad, the maze leads north, east, and south.",
        },
        "maze3" : {
            "visited" : false,
            "locations" : {
                "maze2" : ["north", "n"],
                "maze4" : ["east", "e"],
            },
            "story" : "You end up at a corner, the maze leads north and east.",
            "returnStory" : "You end up at a corner, the maze leads north and east.",
        },
        "maze4" : {
            "visited" : false,
            "locations" : {
                "maze3" : ["west", "w"],
                "maze5" : ["east", "e"],
                "maze15" : ["north", "n"],
            },
            "story" : "You make your way to a three way crossroad, the maze leads north, east, and west.",
            "returnStory" : "You make your way to a three way crossroad, the maze leads north, east, and west.",
        },
        "maze5" : {
            "visited" : false,
            "locations" : {
                "maze4" : ["west", "w"],
                "maze6" : ["north", "n"],
            },
            "story" : "You go until you hit a corner, the maze leads north and west.",
            "returnStory" : "You go until you hit a corner, the maze leads north and west.",
        },
        "maze6" : {
            "visited" : false,
            "locations" : {
                "maze7" : ["west", "w"],
                "maze5" : ["south", "s"],
                "maze8" : ["east", "e"],
            },
            "story" : "You end up at a three way crossroad, the maze leads east, south, and west.",
            "returnStory" : "You end up at a three way crossroad, the maze leads east, south, and west.",
        },
        "maze7" : {
            "visited" : false,
            "locations" : {
                "maze6" : ["east", "e"],
            },
            "story" : "You reach a dead end, the maze only leads to the east.",
            "returnStory" : "You reach a dead end, the maze only leads to the east.",
        },
        "maze8" : {
            "visited" : false,
            "locations" : {
                "maze6" : ["west", "w"],
                "maze9" : ["south", "s"],
            },
            "story" : "You reach a corner, the maze leads south, and west.",
            "returnStory" : "You reach a corner, the maze leads south, and west.",
        },
        "maze9" : {
            "visited" : false,
            "locations" : {
                "maze10" : ["west", "w"],
                "maze8" : ["north", "n"],
            },
            "story" : "You end up at a corner, the maze leads north, and west.",
            "returnStory" : "You end up at a corner, the maze leads north, and west.",
        },
        "maze10" : {
            "visited" : false,
            "locations" : {
                "maze9" : ["east", "e"],
            },
            "story" : "You reach a dead end, the maze only leads to the east.",
            "returnStory" : "You reach a dead end, the maze only leads to the east.",
        },
        "maze11" : {
            "visited" : false,
            "locations" : {
                "maze12" : ["east", "e"],
                "maze1" : ["south", "s"],
            },
            "story" : "You end up at a corner, the maze leads east and south.",
            "returnStory" : "You end up at a corner, the maze leads east and south.",
        },
        "maze12" : {
            "visited" : false,
            "locations" : {
                "maze13" : ["east", "e"],
                "maze14" : ["south", "s"],
                "maze11" : ["west", "w"],
            },
            "story" : "You're at a three way crossroad, the maze leads east, south, and west.",
            "returnStory" : "You're at a three way crossroad, the maze leads east, south, and west.",
        },
        "maze13" : {
            "visited" : false,
            "locations" : {
                "maze12" : ["west", "w"],
            },
            "story" : "You end up at a dead end, the maze only leads to the west.",
            "returnStory" : "You end up at a dead end, the maze only leads to the west.",
        },
        "maze14" : {
            "visited" : false,
            "locations" : {
                "maze12" : ["north", "n"],
            },
            "story" : "This path is a dead end, the maze only leads to the north.",
            "returnStory" : "This path is a dead end, the maze only leads to the north.",
        },
        "maze15" : {
            "visited" : false,
            "locations" : {
                "maze16" : ["north", "n"],
                "maze18" : ["east", "e"],
                "maze4" : ["south", "s"],
                "maze17" : ["west", "w"],
            },
            "story" : "You stumble upon a four way crossroad, the maze leads in all directions north, east, south, and west.",
            "returnStory" : "You stumble upon a four way crossroad, the maze leads in all directions north, east, south, and west.",
        },
        "maze16" : {
            "visited" : false,
            "locations" : {
                "maze15" : ["south", "s"],
            },
            "story" : "You reach a dead end, the maze only leads to the south.",
            "returnStory" : "You reach a dead end, the maze only leads to the south.",
        },
        "maze17" : {
            "visited" : false,
            "locations" : {
                "maze15" : ["east", "e"],
            },
            "story" : "You reach a dead end, the maze only leas to the east.",
            "returnStory" : "You reach a dead end, the maze only leads to the east.",
        },
        "maze18" : {
            "visited" : false,
            "locations" : {
                "maze20" : ["north", "n"],
                "maze19" : ["south", "s"],
                "maze15" : ["west", "w"],
            },
            "story" : "You wind up at a three way crossroad, the maze leads north, south, and west.",
            "returnStory" : "You wind up at a three way crossroad, the maze leads north, south, and west.",
        },
        "maze19" : {
            "visited" : false,
            "locations" : {
                "maze18" : ["north", "n"],
            },
            "story" : "You're at a dead end, the maze only leads to the north.",
            "returnStory" : "You're at a dead end, the maze only leads to the north.",
        },
        "maze20" : {
            "visited" : false,
            "locations" : {
                "maze22" : ["north", "n"],
                "maze21" : ["east", "e"],
                "maze18" : ["south", "s"],
            },
            "story" : "You reach a three way intersection, the maze leads north, east, and south.",
            "returnStory" : "You reach a three way intersection, the maze leads north, east, and south.",
        },
        "maze21" : {
            "visited" : false,
            "locations" : {
                "maze20" : ["west", "w"],
            },
            "story" : "This path is a dead end, the maze only leads to the west.",
            "returnStory" : "This path is a dead end, the maze only leads to the west.",
        },
        "maze22" : {
            "visited" : false,
            "locations" : {
                "maze23" : ["east", "e"],
                "maze20" : ["south", "s"],
            },
            "story" : "You're at a corner in the maze, the maze leads east and south.",
            "returnStory" : "You're at a corner in the maze, the maze leads east and south.",
        },
        "maze23" : {
            "visited" : false,
            "locations" : {
                "maze22" : ["west", "w"],
                "maze24" : ["south", "s"],
            },
            "story" : "You run into another corner, the maze leads south and west.",
            "returnStory" : "You run into another corner, the maze leads south and west.",
        },
        "maze24" : {
            "visited" : false,
            "locations" : {
                "maze23" : ["north", "n", "back in maze", "maze", "back"],
            },
            "items" : ["red key", "knight shield"],
            "story" : "You end up in a small open area, you see the red key on a stone pillar in the middle of the clearing. A knight shield is also laying at the base of the pillar. The only way out is north back into the maze.",
            "returnStory" : "You're back in the open area where you discovered the red key. The only way out is north.",
        },
        "maze25" : {
            "visited" : false,
            "locations" : {
                "maze2" : ["west", "w"],
            },
            "story" : "You reach a dead end, the maze only leads to the west.",
            "returnStory" : "You reach a dead end, the maze only leads to the west.",
        },
    },
    "items": {
        "rusty sword":{
            "damage" : 1,
            "type" : "weapon",
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
        },
        "iron sword" : {
            "damage" : 2,
            "type" : "weapon",
            "description" : "a sturdy sword made out of iron",
        },
        "iron shield" : {
            "protection" : 2,
            "type" : "shield",
            "description" : "a sturdy shield made out of iron",
        },
        "iron armor" : {
            "protection" : 2,
            "type" : "armor",
            "description" : "a full suit of armor made from iron",
        },
        "great sword" : {
            "damage" : 3,
            "type" : "weapon",
            "description" : "A huge sword made only for the bravest of wariors.",
        },
        "knight armor" : {
            "protection" : 3,
            "type" : "armor",
            "description" : "The best armor made for the kings knights.",
        },
        "knight shield" : {
            "protection" : 3,
            "type" : "shield",
            "description" : "The best shield made for the kings knights."
        },
        "fire sword" : {
            "damage" : 4,
            "type" : "weapon",
            "description" : "A sword that harnesses the power of fire this would be very useful against an ice enemy.",
        },
        "ice sword" : {
            "damage" : 4,
            "type" : "weapon",
            "description" : "A sword that harnesses the power of ice this would be very useful against a fire enemy.",
        },
        "red key" : {
            "type" : "key",
            "description" : "It's a red key, it probably unlocks something important.",
        },
        "blue key" : {
            "type" : "key",
            "description" : "It's a blue key, it probably unlocks something important.",
        },
        "yellow key" : {
            "type" : "key",
            "description" : "It's a yellow key, it probably unlocks something important.",
        },
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
        "info" : "info",
        "about" : "about",
        "use" : "use",
        "fire" : "fire",
        "a fire" : "fire",
        "you are fire" : "fire",
        "you're fire" : "fire",
        "youre fire" : "fire",
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
            player.inventory = player.inventory.filter(x => x != item); // test
        }
        else if (data.items[item].type == "armor") {
            if (player.armor != null) {
                player.inventory.unshift(player.armor);
            }
            player.armor = item;
            player.inventory = player.inventory.filter(x => x != item); // test
        }
        else if (data.items[item].type == "shield") {
            if (player.shield != null) {
                player.inventory.unshift(player.shield);
            }
            player.shield = item;
            player.inventory = player.inventory.filter(x => x != item); //test
        }
        else {
            changeSubText("This item is not equipable");
            console.log("this is not equipable");
        }
    }
    else {
        console.log("player does not have this item");
    }
    refreshInventory();
}

function info(item) {
    if (data.items[item] != undefined) {
        text = "";
        text += item + ":\n";
        text += "---Type: " + data.items[item].type + "\n";
        if (data.items[item].type == "weapon") {
            text += "---Damage: " + data.items[item].damage + "\n";
        }
        else if (data.items[item].type == "armor" || data.items[item].type == "shield"){
            text += "---Protection: " + data.items[item].protection + "\n";
        }
        text += "---Description: " + data.items[item].description;
        changeSubText(text);
    }
    else {
        console.log("item does not exist");
    }
}


/**
 * handles player attacking monsters and the final dragon boss
 * also handles the verification of 
 * 
 * @param enemy the enemy as a string that the player is attemting to attack
 */
async function attack(enemy) {
    var text = "You run at the dragon, with your " + player.weapon + " in hand. \n"
    if (player.location == "castle" && (enemy == "dragon" || enemy == "two headed dragon")) {
        if (player.weapon == "ice sword" && data.locations.castle.enemies.dragon.headOneAlive) {
            data.locations.castle.enemies.dragon.headOneAlive = false;
            text += "You get near the first head of the dragon and charge through its red hot flames. You take the ice sword an thrust it into the dragons neck, and with on last roar and spurt of fire the dragons head falls to the ground. "
        }
        else if (data.locations.castle.enemies.dragon.headOneAlive) {
            text += "You get to the first dragon head and swing at its neck with the " + player.weapon + ", and with a loud clang the sword bounces right off doing no damage to the dragon at all. "
        }
        else if (data.locations.castle.enemies.dragon.headOneAlive == false) {
            text += "The first head is already dead. "
        }
        text += "So you turn to the second head of the dragon. "
        if (player.weapon == "fire sword" && data.locations.castle.enemies.dragon.headTwoAlive) {
            data.locations.castle.enemies.dragon.headTwoAlive = false;
            text += "You focus on the second head of the dragon and feel the icey chill of its breath. You clasp the fire sword in your hands, jump toward the dragon and stab it directly in the head. The dragon head shakes you of before finally collapsing to the ground with a loud thud.\n"
        }
        else if (data.locations.castle.enemies.dragon.headTwoAlive) {
            text += "You're near the second dragon head and swing at its neck with the " + player.weapon + ", with a loud clang the sword bounces right off doing no damage to the dragon at all.\n"
        }
        else if (data.locations.castle.enemies.dragon.headTwoAlive == false) {
            text += "The second head is still lifeless on the ground where you had killed it.\n"
        }
        if (data.locations.castle.enemies.dragon.headOneAlive || data.locations.castle.enemies.dragon.headTwoAlive) {
            text += "You need to find a way to kill each of the dragons heads. You have a feeling that each one has its own weakness."
        }

        data.locations.castle.story = text;

        data.locations[player.location].visited = false;
        displayStory(player.location);
        data.locations[player.location].visited = true;
        
        if (data.locations.castle.enemies.dragon.headOneAlive == false && data.locations.castle.enemies.dragon.headTwoAlive == false) {
            won = true;
        }
    }
    else if (data.locations[player.location].enemies[enemy] != undefined) {
        if (playerPower() >= data.locations[player.location].enemies[enemy].health) {
            data.locations[player.location].story = data.locations[player.location].enemies[enemy].story.success;
            data.locations[player.location].visited = false;
            displayStory(player.location);
            data.locations[player.location].visited = true;
            // if the enemy has something to drop
            if (data.locations[player.location].enemies[enemy].drops != undefined) {
                if (data.locations[player.location].items == undefined) {
                    data.locations[player.location].items = [];
                }
                data.locations[player.location].items.push(data.locations[player.location].enemies[enemy].drops);
            }
            // remove the enemy from this scene
            delete data.locations[player.location].enemies[enemy];
            delete data.locations[player.location].enemies;
        }
        // if the player fails to kill the enemy show the failure story and set this scene like 
        // we never visited so that the story will show up again
        else {
            changeSubText(data.locations[player.location].enemies[enemy].story.failure);
            data.locations[player.location].visited = false;
        }
    }
}

function answerRiddle() {
    if (data.locations.mountainTemple.enemies != undefined) {
        var enemy = "old man";
        data.locations[player.location].story = data.locations[player.location].enemies[enemy].story.success;
        data.locations[player.location].visited = false;
        displayStory(player.location);
        data.locations[player.location].visited = true;
        // if the enemy has something to drop
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
        text += player.inventory[i] + "<br>";
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
        delete data.locations[player.location].inspectables;
        var text = "You found the " + item;

        changeSubText(text);
        refreshInventory();
    }
    else {
        console.log("Item not here");
    }
}

function use(item) {
    if (player.inventory.some(x => x == item)) {
        if (player.location == "castleGate") {
            if (item == "red key") {
                if (data.locations.castleGate.locked.red == true){
                    data.locations.castleGate.locked.red = false;
                    changeSubText("You use the red key on the red lock and with a satisfying click the lock falls of the gate.");
                }
                else {
                    changeSubText("The red lock is already unlocked.")
                }
            }
            else if (data.locations.castleGate.locked.blue == true){
                data.locations.castleGate.locked.blue = false;
                changeSubText("You use the blue key on the blue lock and with a satisfying click the lock falls of the gate.");
            }
            else {
                changeSubText("The blue lock is already unlocked.")
            }
        }
    }
}

/**
 * 
 * @param inspectable can be a string with a value or an empty string
 */
function inspect(inspectable) {
    console.log("inspecting" + inspectable);
    if (data.locations[player.location].inspectables != undefined) {
        if (Object.keys(data.locations[player.location].inspectables).some(inspect => Object.values(data.locations[player.location].inspectables[inspect].keywords).some(x => x == inspectable))) {
            toInspect = Object.keys(data.locations[player.location].inspectables).filter(inspect => Object.values(data.locations[player.location].inspectables[inspect].keywords).some(x => x == inspectable));
            if (data.locations[player.location].inspectables[toInspect] != undefined) {
                var text = data.locations[player.location].inspectables[toInspect].findings;
                console.log(text);
                changeSubText(text);
            }
        }
    }
    if (inspectable == "" && data.locations[player.location].items != undefined) {
        if (data.locations[player.location].items[0] != undefined) {
            var item = data.locations[player.location].items[0];
            changeSubText("There is a " + item + " here.");
        }
    }
    else if (inspectable == "" && (data.locations[player.location].items == undefined || data.locations[player.location].items[0] == undefined)) {
        changeSubText("You look around but can't seem to find anything useful.");
    }
}

/**
 * 
 * @param location the location the player is trying to go
 */
function moveTo(location) {
    // there are special rules for the castle gate because it is locked
    if (player.location == "castleGate" && location == "castle") {
        var text = "";
        if (data.locations.castleGate.locked.red == true){
            text += "The red lock is still locked.\n";
        }
        if (data.locations.castleGate.locked.blue == true) {
            text += "The blue lock is still locked."
        }
        else if (data.locations.castleGate.locked.red == false) {
            player.previousLocation = player.location;
            player.location = location;
            displayStory(location);
        }
    }
    else {
        // if there are no enemies the player can move otherwise "run" is the only option
        if (data.locations[player.location].enemies == undefined || location == player.previousLocation) {
            player.previousLocation = player.location;
            player.location = location;
            displayStory(location);
        }
        else {
            console.log("enemies not defeated");
        }
    }
    
}

function run () {
    if (player.location != null) {
        data.locations[player.location].visited = false;
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


    if (won) {
        await delay(15);
        data.locations[player.location].story = "Congratulations you defeated the dragon and saved the kingdom!";
        data.locations[player.location].visited = false;
        displayStory(player.location);
        data.locations[player.location].visited = true;
    }
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
            else if (data.commands[command] == "inspect") {
                var toInspect = input.replace(command, "");
                // this esentaily checks if there is an argument and cuts the space off if so
                if (toInspect[0] == ' ') {
                    toInspect = toInspect.slice(1);
                }
                inspect(toInspect);
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
            else if (data.commands[command] == "info") {
                var item = input.replace(command + " ", ""); 
                console.log(item);
                info(item);
            }
            else if (data.commands[command] == "fire" && player.location == "mountainTemple") {
                answerRiddle(); // TODO test
            }
            else if (data.commands[command] == "use") {
                var item = input.replace(command + " ", ""); 
                console.log(item);
                use(item);
            }
            else {
                // turn border red or something maybe in v2
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

