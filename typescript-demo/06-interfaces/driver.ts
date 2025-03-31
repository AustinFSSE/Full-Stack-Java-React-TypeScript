import {Coach} from "./Coach";
import {GolfCoach} from "./GolfCoach";
import {CricketCoach} from "./CricketCoach";


let golf = new GolfCoach();
let cricketCoach = new CricketCoach();

let workouts: Coach[] = [];

workouts.push(cricketCoach);
workouts.push(golf) ;

for (let workout of workouts) {
    console.log(workout.getDailyWorkout());
}