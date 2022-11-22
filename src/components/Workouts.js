import { useState } from "react";
import "../style/workouts.css";

function Workouts(props) {
    const [checked, setChecked] = useState(false);
    function handleclick() {
        checked ? setChecked(false) : setChecked(true);
        // Open modal
    }
    return (
        <div className={checked ? "workout-item checked" : "workout-item"} onClick={handleclick}>
            <div className="item-title">{props.title}</div>
            <div className="item-sets">{props.sets}</div>
            <div className="item-reps">{props.reps}</div>
        </div>
    );
}

export default Workouts;
