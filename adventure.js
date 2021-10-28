function clickEnter(e) {
    if (e.keyCode == 13) {
        parseInput(e);
    }
}

/** takes the input from the text box and parses it 
 *  so that it may be used as commans for the game
 */
function parseInput(e) {
    var inputArea = e.target;
    var input = inputArea.value;

    inputArea.value = "";

    if (input != ""){

    }
}