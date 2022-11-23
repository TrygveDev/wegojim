import { useState } from "react";
import "../style/workouts.css";

function Workouts(props) {
    const [checked, setChecked] = useState(false);
    function handleclick() {
        if (checked) {
            setChecked(false)
            // TODO: Remove data from cookie
        } else {
            props.setModal(true);
            setChecked(true)
            // Save data to cookie
        }

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
