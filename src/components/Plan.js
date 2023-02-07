import Cookies from "js-cookie";
import { useEffect } from "react";
import { useState } from "react";
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
                        reps: "8-12",
                        note: "3sec negatives"
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
                        reps: "Failure",
                        note: "3sec negatives"
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
                        reps: "8-12",
                        note: "3sec negatives"
                    },
                    4: {
                        title: "Cable Rows*",
                        sets: "3",
                        reps: "6-10",
                        note: "3sec negatives"
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
                        reps: "To Burn",
                        note: "3sec negatives"
                    },
                    2: {
                        title: "Leg Raise",
                        sets: "3",
                        reps: "10-12"
                    },
                    3: {
                        title: "Leg Extension*",
                        sets: "2",
                        reps: "10-12",
                        note: "3sec negatives"
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
                        reps: "10-15",
                        note: "3sec negatives"
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
                        reps: "8-12",
                        note: "3sec negatives"
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

    // Sets the active workout (visually) when the plan changes
    useEffect(() => {
        setActiveIndex(0)
    }, [props.plan, props.refreshing])
    const plan = fetchFromDb(props.plan)

    function getPreviousWeight(plan, workout) {
        if (Cookies.get("previousWorkouts") === undefined) {
            return "0";
        } else {
            let cookie = JSON.parse(Cookies.get("previousWorkouts"));
            cookie = cookie.filter((item) => item.workout === plan);

            cookie = cookie.sort((a, b) => a.date - b.date);
            cookie = cookie[cookie.length - 1];
            if (!cookie) return "0";
            cookie = Object.values(cookie.data).find(item => item.title === workout);
            return cookie.weight === "" ? "0" : cookie.weight;
        }
    }

    function getWorkoutData(plan) {
        if (Cookies.get(plan + "Temp") === undefined) {
            Cookies.set(props.plan + "Temp", JSON.stringify(workoutData), { expires: 365 })
            return JSON.parse(Cookies.get(plan + "Temp"));
        } else {
            return JSON.parse(Cookies.get(plan + "Temp"));
        }
    }

    const workoutData = Object.entries(plan.exercises).map((ex, index) => {
        const newData = {
            reps: ex[1].reps,
            sets: ex[1].sets,
            title: ex[1].title,
            weight: getPreviousWeight(props.plan, ex[1].title),
            time: "",
            note: ex[1].note,
            index: index,
            checked: false
        }
        return newData;
    })


    const [activeIndex, setActiveIndex] = useState(0);
    function changeActive(index) {
        setActiveIndex(index)
    }

    function setWeight(index, weight) {
        let workoutDataCopy = getWorkoutData(props.plan)
        workoutDataCopy[index].weight = weight === null ? "0" : weight
        Cookies.set(props.plan + "Temp", JSON.stringify(workoutDataCopy), { expires: 365 })
    }

    function setChecked(index, boolean) {
        let workoutDataCopy = getWorkoutData(props.plan)
        workoutDataCopy[index].checked = boolean
        Cookies.set(props.plan + "Temp", JSON.stringify(workoutDataCopy), { expires: 365 })
    }
    function removeWeight(index) {
        // TODO: Set weight to progress cookie last used weight if exists or 0
        let workoutDataCopy = getWorkoutData(props.plan)
        workoutDataCopy[index].weight = "0";
        Cookies.set(props.plan + "Temp", JSON.stringify(workoutDataCopy), { expires: 365 })
    }

    let workoutElements = workoutData.map((item, index) => {
        return (
            <Workouts
                title={item.title}
                reps={item.reps}
                sets={item.sets}
                weight={item.weight}
                time={item.time}
                note={item.note}
                index={index}
                key={index}
                checked={item.checked}
                changeActive={changeActive}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                setWeight={setWeight}
                setChecked={setChecked}
                removeWeight={removeWeight}
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
