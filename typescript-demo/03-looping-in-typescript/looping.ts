
let reviews: number[] = [1, 2, 3];
let sports: string[] = ["Golf", "Football", "Wrestling", "Baseball"]

reviews.push(8);
sports.push("VolleyBall")

for (let i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
}

for (let sport of sports) {
    if (sport === "Golf" || sport === "Football") {
        console.log(`My favorite sport: ${sport}`);
    } else {
        console.log(sport);
    }

}