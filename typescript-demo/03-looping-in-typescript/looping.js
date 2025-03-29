var reviews = [1, 2, 3];
var sports = ["Golf", "Football", "Wrestling", "Baseball"];
reviews.push(8);
sports.push("VolleyBall");
for (var i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
}
for (var _i = 0, sports_1 = sports; _i < sports_1.length; _i++) {
    var sport = sports_1[_i];
    if (sport === "Golf" || sport === "Football") {
        console.log("My favorite sport: ".concat(sport));
    }
    else {
        console.log(sport);
    }
}
