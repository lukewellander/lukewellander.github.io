async function generateCal() {
    // maybe add ability to pick month/year
    console.log("generating");
    var daysInMonth = dayjs().daysInMonth(); // gets how many days in this month
    var dayOfMonth = dayjs().date(); // start at 1
    var dayOfWeek = dayjs().day(); // 0-6

    var firstDayOfMonth = dayjs().startOf('month').day();

    document.getElementById("cal").innerHTML = "";

    for (var i = 0; i < daysInMonth + firstDayOfMonth; i++) {
        var day = document.createElement("div");
        day.classList.add("day");

        var num = document.createElement("h2"); 
        num.innerText = i - firstDayOfMonth + 1;
        day.appendChild(num);

        var fact = document.createElement("p");
        var response = await fetch("https://uselessfacts.jsph.pl/random.json?language=en");
        var json = await response.json();
        console.log(await json);
        var text = await json.text;
        fact.innerText = text;
        day.appendChild(fact);

        if (i < firstDayOfMonth) {
            day.innerText = "";
        }
        document.getElementById("cal").appendChild(day);
    }
}