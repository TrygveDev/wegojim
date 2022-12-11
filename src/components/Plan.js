import Cookies from "js-cookie";
import { useEffect } from "react";
import { useState } from "react";
import "../style/componentStyles/plan.css";
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
    useEffect(() => {
        setActiveIndex(0)
    }, [props.plan])
    // CREATE EMPTY WORKOUT
    const plan = fetchFromDb(props.plan)
    let workoutData;
    if (Cookies.get(props.plan) == null) {
        workoutData = Object.entries(plan.exercises).map((ex, index) => {
            const newData = {
                reps: ex[1].reps,
                sets: ex[1].sets,
                title: ex[1].title,
                weight: [],
                time: "",
                note: ex[1].note,
                index: index,
                checked: false
            }
            return newData;
        })
        Cookies.set(props.plan, JSON.stringify(workoutData), { expires: 365 })
    }
    // CREATE WORKOUT TEMP
    if (Cookies.get(props.plan + "Temp") == null) {
        Cookies.set(props.plan + "Temp", Cookies.get(props.plan), { expires: 365 })
    }
    workoutData = JSON.parse(Cookies.get(props.plan + "Temp"))


    const [activeIndex, setActiveIndex] = useState(0);
    function changeActive(index) {
        setActiveIndex(index)
    }

    function setWeight(index, weight) {
        let copyWeightList = workoutData[index].weight
        copyWeightList.push({
            date: Date.now(),
            weight: weight
        })
        workoutData[index].weight = copyWeightList
        Cookies.set(props.plan + "Temp", JSON.stringify(workoutData), { expires: 365 })

    }

    function setChecked(index, boolean) {
        let workoutCopy = workoutData[index]
        workoutCopy.checked = boolean
        workoutData[index] = workoutCopy
        Cookies.set(props.plan + "Temp", JSON.stringify(workoutData), { expires: 365 })
    }
    function removeWeight(index) {
        let workoutCopy = workoutData[index]
        workoutCopy.weight.pop()
        workoutData[index] = workoutCopy
        Cookies.set(props.plan + "Temp", JSON.stringify(workoutData), { expires: 365 })
    }

    let workoutElements = workoutData.map((item, index) => {
        return (
            <Workouts
                title={item.title}
                reps={item.reps}
                sets={item.sets}
                weight={item.weight.length === 0 ? "0" : item.weight}
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
