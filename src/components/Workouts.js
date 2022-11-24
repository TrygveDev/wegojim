import { useState } from "react";
import "../style/workouts.css";

function Workouts(props) {
    const [checked, setChecked] = useState(props.checked === null ? false : props.checked);
    function handleclick() {
        if (checked) {
            setChecked(false)
            // TODO: Remove data from cookie
        } else if (!checked) {
            props.setModal(true, props.index);
            setChecked(true)
            // Save data to cookie
        }

    }
    return (
        <div className={checked ? "workout-item checked" : "workout-item"} onClick={handleclick}>
            <div className="item-title">{props.pWeight} {props.title}</div>
            <div className="item-sets">{props.sets}</div>
            <div className="item-reps">{props.reps}</div>
        </div>
    );
}

export default Workouts;
