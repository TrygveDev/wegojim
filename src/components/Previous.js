
import { useState } from "react";
function Previous(props) {
    const [checked, setChecked] = useState(false);
    function click() {
        checked ? setChecked(false) : setChecked(true);
    }
    return (
        <div className="previousWorkout-container" onClick={click}>
            <div className={checked ? "previousWorkout-item previousWorkout-item-active" : "previousWorkout-item"}>
                <p className="previousWorkoutItem-date">{new Date(props.item.date).toDateString()}</p>
                <p className="previousWorkoutItem-title">Workout Plan - <span>{props.item.workout}</span></p>
            </div>
            <div className={checked ? "previousWorkoutItem-stats" : "hidden"} >
                <ul>
                    {Object.entries(props.item.data).map(([key, value]) => {
                        return (
                            <li key={key}>
                                <p className="previous-workout-stats-title">{value.weight}kg - {value.title}</p>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );



}

export default Previous;
