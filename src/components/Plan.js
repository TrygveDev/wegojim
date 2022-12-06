import "../style/plan.css";
import Workouts from "./Workouts";

function Plan(props) {

    function fetchFromDb(uid) {
        const db = {
            monday: {
                title: "Monday - Chest & Tricep",
                exercises: {
                    0: {
                        title: "Bench Press",
                        sets: "3",
                        reps: "6-12"
                    },
                    1: {
                        title: "Skull Crusher",
                        sets: "3",
                        reps: "8-12"
                    },
                    2: {
                        title: "Incline Bumbbell Bench Press",
                        sets: "3",
                        reps: "6-12"
                    },
                    3: {
                        title: "Cable Tricep Extensions*",
                        sets: "3",
                        reps: "8-12"
                    },
                    4: {
                        title: "Decline Bench Press",
                        sets: "2",
                        reps: "8"
                    },
                    5: {
                        title: "Tricep Push Away",
                        sets: "2",
                        reps: "8"
                    },
                    6: {
                        title: "Pushups*",
                        sets: "1",
                        reps: "Failure"
                    },
                }

            },
            tuesday: {
                title: "Tuesday - Back & Bicep",
                exercises: {
                    0: {
                        title: "Deadlift ",
                        sets: "2",
                        reps: "8"
                    },
                    1: {
                        title: "Chin Up",
                        sets: "2",
                        reps: "8-12"
                    },
                    2: {
                        title: "Barbell Rows",
                        sets: "3",
                        reps: "6-12"
                    },
                    3: {
                        title: "Cable Curl*",
                        sets: "3",
                        reps: "8-12"
                    },
                    4: {
                        title: "Cable Rows*",
                        sets: "3",
                        reps: "6-10"
                    },
                    5: {
                        title: "Hammer Curl",
                        sets: "3",
                        reps: "8-12"
                    },
                    6: {
                        title: "Lat Pulldown",
                        sets: "2",
                        reps: "10-12"
                    },
                }
            },
            thursday: {
                title: "Thursday - Legs & Abs",
                exercises: {
                    0: {
                        title: "Squat",
                        sets: "2",
                        reps: "8-12"
                    },
                    1: {
                        title: "Standing Calf Raise*",
                        sets: "2",
                        reps: "To Burn"
                    },
                    2: {
                        title: "Leg Raise",
                        sets: "3",
                        reps: "10-12"
                    },
                    3: {
                        title: "Leg Extension*",
                        sets: "2",
                        reps: "10-12"
                    },
                    4: {
                        title: "Leg Curl",
                        sets: "3",
                        reps: "8-12"
                    },
                    5: {
                        title: "Ab Crunch",
                        sets: "3",
                        reps: "10-12"
                    },
                    6: {
                        title: "Seated Calf Raise*",
                        sets: "3",
                        reps: "10-15"
                    },
                    7: {
                        title: "Plank",
                        sets: "2",
                        reps: "1-2min"
                    },
                }
            },
            friday: {
                title: "Friday - Shoulders",
                exercises: {
                    0: {
                        title: "Arnold Press",
                        sets: "3",
                        reps: "8-10"
                    },
                    1: {
                        title: "Upright Rows",
                        sets: "3",
                        reps: "8-12"
                    },
                    2: {
                        title: "Lateral Raise",
                        sets: "2",
                        reps: "10-15"
                    },
                    3: {
                        title: "Reverse Fly",
                        sets: "2",
                        reps: "10-15"
                    },
                    4: {
                        title: "Smith Press",
                        sets: "3",
                        reps: "8-10"
                    },
                    5: {
                        title: "Dumbbell Shrugs*",
                        sets: "2",
                        reps: "8-12"
                    },
                    6: {
                        title: "Dead Hang",
                        sets: "1",
                        reps: "Failure"
                    },
                }
            }
        }
        return db[uid]
    }

    // CREATE WORKOUT
    const plan = fetchFromDb(props.plan)
    let workoutData = Object.entries(plan.exercises).map((ex, index) => {
        const newData = {
            reps: ex[1].reps,
            sets: ex[1].sets,
            title: ex[1].title,
            pWeight: "",
            cWeight: "",
            index: index
        }
        return newData;
    })

    let workoutElements = workoutData.map((item, index) => {
        return (
            <Workouts
                title={item.title}
                reps={item.reps}
                sets={item.sets}
                pWeight={item.pWeight}
                cWeight={item.cWeight}
                index={index}
                key={index}
            />
        )
    })


    return (
        <div>
            {workoutElements}
        </div>
    );
}

export default Plan;
