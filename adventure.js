function clickEnter(e) {
    if (event.keyCode == 13) {
        parseInput(e);
    }
}

function parseInput(e) {
    var inputArea = e.target;
    var input = inputArea.value;

    inputArea.value = "";
}